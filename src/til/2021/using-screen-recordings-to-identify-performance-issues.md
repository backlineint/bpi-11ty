---
title: Using Screen Recordings to Identify Page Load Performance Issues
description: "Sometimes a picture (or in this case a video) is worth a thousand
  words, and identifying page load performance issues is no exception. "
author: Brian
date: 2021-03-20T21:50:15.087Z
---
Todo: add image

Sometimes when auditing Lighthouse results the sheer amount of feedback can make it difficult to determine what to focus on improving. In cases like those, I've found that a screen recording can provide quite a bit of clarity.

[Web Page Test] provides a number of easy options to generate a recording of your test runs. You can save the recording as a video or a gif after clicking on the 'watch video' link in the related column. Or you can enter the timeline view, configure options like frame size and slow motion, and export your recording. 
 
(Image example) 

This is an example (link) of a recording of the homepage of this site being loaded. You'll see a pretty obvious problem - the menu is loading as expanded and then collapsing when JavaScript executes, which is likely causing cumulative layout shift. I've found that a slow motion video can also make less glaring issues clear, like web fonts shifting during load.

For a Calibre is a paid alternative that even goes as far as 

CLS Gif Generator

throttle in app / Playing back timeline.
