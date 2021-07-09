---
title: Following Drupal Core's Issue Fork Workflow
description: Working on an issue for the Olivero theme at the Florida Drupal
  Camp sprint was my first opportunity to try out Drupal's new issue fork
  workflow for core. The process is well documented, but wanted to capture my
  steps for reference.
author: Brian
date: 2021-02-20T19:48:24.888Z
tags:
  - drupal
---
Issue fork docs: https://www.drupal.org/docs/develop/git/using-git-to-contribute-to-drupal/creating-issue-forks-and-merge-requests

This issue: https://www.drupal.org/project/drupal/issues/3174107

Had an existing issue fork.

Clicked the \`get push access\` button.

Expanded the show commands link and basically just followed that

Create your Drupal repository using: https://www.drupal.org/project/drupal/git-instructions

`git clone --branch 9.2.x https://git.drupalcode.org/project/drupal.git`\
`cd drupal`

Add and fetch the issue fork's repo:

`git remote add drupal-3174107 git@git.drupal.org:issue/drupal-3174107.git
git fetch drupal-3174107`

Check out issue fork branch: 

`git checkout -b '3174107--add-additional' --track drupal-3174107/'3174107--add-additional'`

