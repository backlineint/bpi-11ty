---
title: Fun With WebC and Server Rendered Web Components in 11ty
description: I recently experimented with WebC, one of a few recent implementaitons of single file web components. Along the way I also learned that 11ty is a great home for working with web components on the server in general.
author: Brian
date: 2022-10-23
---

This site is built using [11ty](https://www.11ty.dev/). While there is a lot that I enjoy about 11ty, one thing that I found lacking was 11ty's approach to components. It is possible to take a component-like approach using features like includes using template engines like Liquid or Nunjucks, but I still found myself running into the specific quirks of those templating engines. Even though I was able to get the job done, it didn't quite feel like the developer experience I'm used to working with things like React or Lit.

With the ongoing work I've been doing with [the Generic Drupal Web Components project](https://www.drupal.org/project/gdwc), I've become increasingly interested in the evolving approaches to server rendering web components. My plan is to slowly convert this site to use components from that library while along the way ensuring that they are compatible with [declarative shadow dom](https://web.dev/declarative-shadow-dom/) and current approaches to web component server side rendering.

Given everything mentioned above, [WebC](https://github.com/11ty/webc) from 11ty maintainer [Zach Leatherman](https://www.zachleat.com/) caught my eye:

> WebC is a framework-independent standalone HTML compiler for generating markup for web components.

And from the perspective of the [WebC 11ty Plugin](https://www.11ty.dev/docs/languages/webc/):

> Brings first-class components to Eleventy.
>
> - Expand any HTML element (including custom elements) to HTML with defined conventions from web standards.
> - This means that Web Components created with WebC are compatible with server-side rendering (without duplicating author-written markup)

Well that sure does seem to be relevant to my interests.

After [installing the plugin](https://www.11ty.dev/docs/languages/webc/#installation), I set out to create my first WebC component. My goal was to create a notification banner that also used a 3rd party (in the context of this site anyway) web component.

As a first step, I just created a WebC component `construction-banner.webc` that included some paragraph text.

```html
<p class="construction-banner">
  Alert! Alert! I'm -slowly- working on an active redesign. If things look out
  of place, it may be related to that, or I may just have bad taste.
</p>
```

That allowed me to embed the component using the render plugin using:

{% highlight liquid %}
{% renderTemplate "webc" %}
<construction-banner></construction-banner>
{% endrenderTemplate %}
{% endhighlight %}

In fact, I'm doing that below in this here markdown file.

{% renderTemplate "webc" %}
<banner-paragraph></banner-paragraph>
{% endrenderTemplate %}

Cool! Next I tried throwing one of my existing web components in there to how WebC handled it.

Looks like:

Throw some styling in there.

Show load without server side rendering.

{% renderTemplate "webc" %}
<construction-banner></construction-banner>
{% endrenderTemplate %}

Gif of load without declarative shadow dom (Use shoelace Gif loader.)

Gif of load with declarative shadow dom

11ty is a very friendly place for web components.

Should be able to remove a decent amount of code, no need to migrate.
