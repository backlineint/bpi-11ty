---
title: Configuring Lighthouse CI with Github Actions
description: I'll be spending time auditing web performance over the next couple
  of weeks, and wanted to start with some measurement using Lighthouse CI.
author: Brian
date: 2021-03-02T20:34:15.697Z
---
I'll be spending a lot of time auditing web performance over the next couple of weeks, and along the way expect to be setting up some tooling that I haven't used before. First on the list was Lighthouse CI, which I took for a spin on a Github repository. I initially set this up manually following [the getting started docs](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md), but eventually learned that the [Lighthouse CI Action](https://github.com/marketplace/actions/lighthouse-ci-action) met my needs nicely.

First, I added a `budget.json` file which I will eventually assert against:

```json
[
  {
    "path": "/*",
    "resourceSizes": [
      {
        "resourceType": "document",
        "budget": 18
      },
      {
        "resourceType": "total",
        "budget": 200
      }
    ]
  }
]
```

This is just the default example from the docs, I'll be defining what the actual budget should be later.

Next I created `.github/workflows/ci.yml` with the following contents:

```yml
name: Lighthouse CI for Netlify sites
on: pull_request
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: Install & Build
        run: |
          npm install
          npm build
      - name: Wait for the Netlify Preview
        uses: jakepartusch/wait-for-netlify-action@v1
        id: netlify
        with:
          site_name: 'my-fun-netlify-name'
      - name: Audit URLs using Lighthouse
        uses: treosh/lighthouse-ci-action@v7
        with:
          urls: |
            ${{ steps.netlify.outputs.url }}
            ${{ steps.netlify.outputs.url }}/about/
            ${{ steps.netlify.outputs.url }}/all/
            ${{ steps.netlify.outputs.url }}/jams/2021/hades/
            ${{ steps.netlify.outputs.url }}/posts/2021/gatsby-source-drupal-only-referenced-images/
          budgetPath: ./budget.json
          temporaryPublicStorage: true
```

This isn't the default recipe, but it allowed me to wait for Netlify's deploy preview to complete, and then run lighthouse on the actual preview site. In my case, I also needed to bump things up to a more recent version of node instead of the default. I also removed `uploadArtifacts: true` in my case, as I don't know that I really need the reports to persist long term.

At this point, I had the lighthouse reports running, but I had to dig into the build logs to get them.

Pick up with status checks: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#github-app-method-recommended
https://github.com/apps/lighthouse-ci
