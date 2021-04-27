---
title: Configuring Tugboat Live Previews For Drupal General Projects
description: A quick example of how to set up Tugboat Live Previews for a
  general project on drupal.org that uses NodeJS.
author: Brian
date: 2021-04-27T18:23:13.947Z
tags:
  - drupal
---
[I've written previously](/posts/2021/were-in-the-golden-age-of-contributing-to-drupal/) about my excitement that Tugboat now offers live previews for core and contrib merge requests on Drupal.org, so I was especially excited to see live previews added to the [Generic Drupal Web Components](https://www.drupal.org/project/gdwc) project recently during DrupalCon.

GDWC is a general project on Drupal.org and uses NodeJS rather than PHP. Since Tugboat runs on Docker it seemed likely that we could run NodeJS, but the existing documentation is unsurprisingly focused on Drupal PHP projects.

While the documentation on Drupal.org focuses on Drupal Module and Theme projects, it turns out Tugboat Live Previews can also be easily configured to run for NodeJS based Drupal General Projects as well.

Almost all of the credit here goes 

Propose an update to the docs here: https://www.drupal.org/docs/develop/git/using-git-to-contribute-to-drupal/using-live-previews-on-drupal-core-and-contrib