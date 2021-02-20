---
title: Running Lando on an Apple Silicon Mac
description: While I've done some development on my M1 MacBook, I had been
  procrastinating on doing any Docker based development. Decided to take the
  plunge today.
author: Brian
date: 2021-02-20T20:23:29.236Z
tags:
  - drupal
---
While I've done some NodeJS based development on my M1 MacBook, I had been procrastinating on doing anything Docker based. I had an opportunity to take the plunge today and decided to go for it.

My understanding is that [this config is not officially supported](https://github.com/lando/lando/issues/2688) for a variety of reasons, but for me it pretty much just worked.

Here's what I did:

* Downloaded and installed the [Docker M1 Tech Preview](https://docs.docker.com/docker-for-mac/apple-m1/)
* Downloaded the latest [Lando release](https://github.com/lando/lando/releases) (3.0.25 in my case)
* Installed Lando, being sure to customize the install to not install Docker Desktop over my existing tech preview.
* Created and started a Drupal 9 project that just worked.

If I run into any quirks as I put it through the paces a bit more, I'll update this post.

