---
title: Using Tailwind With Web Components
description: Approaches to using a CSS library like Tailwind that still work
  with shadow DOM scoped CSS>
author: Brian
date: 2021-01-17T20:19:28.427Z
tags:
  - til
---
(Is hard)

https://dev.to/43081j/using-tailwind-at-run-time-with-web-components-47c

Twind for runtime https://github.com/tw-in-js/twind/

But Safari doesn't support constructable stylesheets.

Gave up and imported full stylesheet in html, which feels dirty.