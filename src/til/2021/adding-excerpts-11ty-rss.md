---
title: Adding Excerpts to an 11ty RSS Feed
description: Harder than I thought...
author: Brian
date: 2021-03-01
---

I previously wrote about [creating multiple feeds with the 11ty RSS Plugin](/til/2021/creating-multiple-feeds-with-the-11ty-rss-plugin/) which I was doing in service of creating a feed for [Planet Drupal](https://www.drupal.org/planet). While creating a second feed was an important first step, I also [found that my feed needed to have an excerpt](https://www.drupal.org/project/content/issues/3199462) of a specific length.

I found a couple of different ways to add excerpts to 11ty feeds.

Escape hatch

Markdown filter trick.

Also created an RSS example (that I probably didn't need to) https://github.com/11ty/eleventy-plugin-rss/pull/24  Misinterpreted validation.



Link to previous post.

Didn't want to manually manage a description field, needed it under a character limit, wanted an escape hatch. (Drupal Planet requirements)

https://www.npmjs.com/package/eleventy-plugin-excerpt

https://github.com/psalaets/eleventy-plugin-excerpt/blob/master/extract-excerpt.js

Secret excerpts: https://www.11ty.dev/docs/data-frontmatter-customize/

https://github.com/markdown-it/markdown-it

https://www.11ty.dev/docs/plugins/rss/