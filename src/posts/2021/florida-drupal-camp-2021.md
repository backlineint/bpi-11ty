---
title: "Talks: Florida Drupal Camp 2021"
description: Presented 'Web Components From The Eyes of a Newcomer,' along with a very serious lightning talk.
author: Brian
date: 2021-02-20
imagePath: ./src/posts/2021/fldc_title.jpg
alt: Title Slide
tags:
  - drupal
  - talks
excerpt: "<p>This was my second time giving this talk, and I kind of forgot how dense of a topic this is. One major update was a re-worked example of approaches to scoped styling. (The sandbox probably doesn't make a ton of sense without having someone walk through it. Might try to do a quick recording of it someday.) Next time I do this styling demo, it should go later in the presentation. I think people needed more of a foundation on web component concepts before we get this deep into styling specifics.</p><p>Other odds and ends:<br/>* The way the camp used gather.town was really fun. Hoping we can borrow some of FLDC's great ideas for Midcamp.<br />* Found out about Promet Source's Provus project which is a component based Drupal stater site. We are working on a similar effort at Bounteous.<br />* Hoping to check in on contribution day for a bit.</p>"
---
[Slides](https://noti.st/brianperry/bdLuuQ/web-components-through-the-eyes-of-a-newcomer) / [Session Page](https://www.fldrupal.camp/sessions/design-theming-front-end-development/web-components-through-eyes-newcomer)

This was my second time giving this talk, and I kind of forgot how dense of a topic this is. One major update was a re-worked example of approaches to scoped styling:

<iframe src="https://codesandbox.io/embed/election-results-tracker-global-styling-options-w0i3e?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Election Results Tracker (Global Styling Options)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

(The sandbox probably doesn't make a ton of sense without having someone walk through it. Might try to do a quick recording of it someday.) Next time I do this styling demo, it should go later in the presentation. I think people needed more of a foundation on web component concepts before we get this deep into styling specifics.

I also added an example of using web components with a JS framework - React in this case:

<iframe src="https://codesandbox.io/embed/web-components-with-react-tvnwd?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Web Components With React"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

I think this example ended up being a little confusing because React and Web Components don't play all that nice together. I'll try to work up an example with a more web component friendly framework next time.

Also saw that I somehow found my way into being listed as a featured presenter on [Noti.st](https://noti.st/explore) where I post my slides. Cool! (Less cool is the fact that my wife called me out on using a photo that is too old...)

{% image "./src/posts/2021/fldc_notist.png", "Noti.st featured presenters", false, "object-cover h-full w-full rounded ring-2 ring-indigo-500" %}

Other odds and ends:
* The way the camp used [gather.town](https://gather.town/) was really fun. Hoping we can borrow some of FLDC's great ideas for [Midcamp](https://www.midcamp.org/).
* Found out about Promet Source's [Provus](https://github.com/promet/provus) project which is a component based Drupal stater site. We are working on a similar effort at [Bounteous](https://www.bounteous.com/).
* Hoping to check in on contribution day for a bit.