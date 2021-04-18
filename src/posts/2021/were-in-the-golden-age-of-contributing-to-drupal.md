---
title: We're In The Golden Age of Contributing to Drupal
description: A series of tooling changes have made it easier than ever to
  contribute to Drupal and frankly, I'm excited about it.
author: Brian
date: 2021-03-19T19:20:09.591Z
tags:
  - drupal
---
I spent some time recently looking at the new [general project type on Drupal.org](https://www.drupal.org/project/project_general). As someone who spends quite a bit of time working on Drupal adjacent things, a home for Drupal related projects that aren't modules or themes opens up some exciting (and important) possibilities. As I thought more about how this could be used for an upcoming project, it dawned on me that this was just latest in a series of developments that vastly improve the experience of contributing to Drupal. 

---

I'm sure other Drupal lifers can think of older milestones, but my personal turning point goes back about four years ago to [when the project application process was updated](https://www.drupal.org/project/drupalorg/issues/2666584) so that any user would have the ability to create a full project on Drupal.org. Prior to that, the process to create a new project felt insurmountable (at least to younger me.) Drupal activity will never reach the 50 NPM packages that were probably created while you read this paragraph, but reducing the barrier to entry makes a big difference.

Fast forward a few years and the hits just keep on coming.

Unquestionably the biggest improvement is the introduction of the [merge request workflow](https://www.drupal.org/docs/develop/git/using-git-to-contribute-to-drupal/creating-issue-forks-and-merge-requests) on Drupal.org for both Drupal Core and Contributed projects. Rather than generating and uploading patches, users can now create an issue fork and submit a merge request. This process is likely to be much more comfortable to developers who are familiar with creating pull requests on Github. And this workflow wouldn't have been possible if Drupal hadn't [migrated to a platform like Gitlab](https://about.gitlab.com/blog/2018/08/16/drupal-moves-to-gitlab/) in the first place.

https://www.youtube.com/watch?v=NIWCXE-aM6Y

The process to set up a local environment for Drupal development has improved over this time frame as well. Docker based solutions like [Lando](https://github.com/thinktandem/drupal-contributions) and [DDEV](https://github.com/drud/quicksprint) have prepackaged environments to automate the process of setting up a local environment to contribute to Drupal. Looking forward, [cloud based environments](https://github.com/shaal/ddev-gitpod) could further simplify this set up process.

https://www.youtube.com/watch?v=ifk5dF6rGy0

[Simplytest.me](https://simplytest.me/) continues to be a great option for contributors to evaluate modules and even test patches, and it has recently been modernized with a backend powered by [Tugboat](https://www.tugboat.qa/). Speaking of Tugboat, it also now provides [live previews for merge requests for Core and Contrib projects](https://www.drupal.org/docs/develop/git/using-git-to-contribute-to-drupal/using-live-previews-on-drupal-core-and-contrib).

That brings us all the way back to the recent addition of general projects. 

A ridiculous amount of work went into all of these developer experience improvements. Thanks to the many people who put in the time and effort to make this possible.

**Update**