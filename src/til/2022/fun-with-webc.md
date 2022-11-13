---
title: Fun With WebC and Server Rendered Web Components in 11ty
description: I recently experimented with WebC, one of a few recent implementaitons of single file web components. Along the way I also learned that 11ty is a great home for working with web components on the server in general.
author: Brian
date: 2022-10-23
---

This site is built using [11ty](https://www.11ty.dev/). While there is a lot that I enjoy about 11ty, one thing that I found lacking was 11ty's approach to components. It is possible to take a component-like approach using features like includes using template engines like Liquid or Nunjucks, but I still found myself running into the specific quirks of those templating engines. Even though I was able to get the job done, it didn't quite feel like the developer experience I'm used to working with things like React or Lit.

With the ongoing work I've been doing with [the Generic Drupal Web Components project](https://www.drupal.org/project/gdwc), I've become increasingly interested in the evolving approaches to server rendering web components. My plan is to slowly convert this site to use components from that library while along the way ensuring that they are compatible with [declarative shadow dom](https://web.dev/declarative-shadow-dom/) and current approaches to web component server side rendering.

General info on WebC

How does it solve these problems.

Construction banner example.

{% renderTemplate "webc" %}
<construction-banner></construction-banner>
{% endrenderTemplate %}

Gif of load without declarative shadow dom (Use shoelace Gif loader.)

Gif of load with declarative shadow dom

11ty is a very friendly place for web components.

Should be able to remove a decent amount of code, no need to migrate.
