---
title: How Drupal's Preview Works
description: I recently needed to dig into the specifics of how Drupal's node
  preview actually worked only to find that all of my assumptions were wrong.
author: Brian
date: 2021-09-29T01:28:50.252Z
tags:
  - drupal
---
I've been thinking quite a bit recently about Drupal's options for decoupled preview with other JavaScript front ends. As part of some related experimentation, I found myself needing to understand more about how Drupal's standard preview functionality works. To be specific here - I'm talking about when you're editing a node and click on the preview button to see a full rendering of the page you're currently editing. 

I realized I had never really had any reason to think about how that actually works. Like many things on the web, it just kind of magically does. My general assumption was that it was some variation of Drupal's revision functionality. An unpublished version of the node is created to represent the preview, and is deleted after some period of inactivity.

As I dug I found that I was totally wrong.

Preview submission handler - web/core/modules/node/src/NodeForm.php

Something else... 

Thinking about this now, I think it makes sense. Privacy. Database churn. Etc. Plus everyone was really surprised when I talked to this (some Drupal lifer is probably like - duh, I knew that)


Would it be useful if we could do something similar with a separate front end?