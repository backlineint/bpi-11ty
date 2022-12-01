---
title: A Drupal Developer's Guide to Building Your First Web Component
description: "An opinionated introduction to creating web components, with extra color for those who work with Drupal"
author: Brian
date: 2022-11-30
---

I'll be a guest on an upcoming [DrupalEasy podcast](https://www.drupaleasy.com/podcast) episode focusing on the topic of how to write your first web component. As I preparing some notes, it really seemed like I was outlining a blog post. Rather than write it twice, I decided to just cut out the middle man and write it here.

### Before we get started

First, let's set expectations about what a web component is in this context.

No experience with web components required.

Second, I'm going all in on my personal opinions here and focusing on what helped working with web components click for me. There are many other ways to approach this - some with fewer dependencies, and none of them wrong. My vote would be to start here, and then explore to your heart's content.

You'll need NodeJS installed - only for a local webserver.

### What are we building?

A tip callout.

Explain and show examples.

### Start with your favorite text editor

That's right - no bundling and no TypeScript. You may want some or all of those things sooner rather than later, but I think there is a lot of value in understanding what can be done using just the core web platform.

Drupal Tip!

In D10 we said goodbye to IE 11 (and babel?)

### Import Lit from a CDN

We're using Lit for a few reasons. It simplifies the process of creating a custom element, but in my opinion doesn't stray too far from the core spec. It also provides a simiple example of using ES modules in the browser, which you may have assumed you couldn't do without a bundler.

tip-callout.js:
```js
// tip-callout.js
import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

console.log("Nothing broken yet")
```
index.html:
```html
<!-- index.html -->
<script type="module">
  import './tip-callout.js';
</script>

<p>My Document</p>
```

Open your html document in a local webserver using:

```bash
npx serve
```

In the same directory as your files.

You should see My Document in your browser and "nothing broken yet" in your console.

### Create an initial custom element

tip-callout.js:
```js
import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class TipCallout extends LitElement {
  render() {
    return html`<p>Drupal Tip!</p>`;
  }
}
customElements.define('tip-callout', TipCallout);
```

index.html:
```html
<script type="module">
  import './tip-callout.js';
</script>

<tip-callout></tip-callout>
```

You have a custom element! It renders static markup using an html template.

### Add a property to make the component dynamic

### Use a slot to render outside markup.

### Add styles scoped to the component.

### Maybe interactivity?

### Use it in Drupal.

Level up with bundlers.

Recent content from NEDCamp