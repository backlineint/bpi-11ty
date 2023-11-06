---
title: An Update on The Drupal API Client
description: The Drupal API Client Project has made substantial progress, including publshing our first POC release.
author: Brian
date: 2023-10-26
---

At [DrupalCon Pittsburgh](https://events.drupal.org/pittsburgh2023), a team of interested community members submitted [The Drupal API Client Project](https://www.drupal.org/project/api_client) to be considered for funding as part of the [Pitchburgh Innovation Contest](https://www.drupal.org/innovation/pitchburgh-2023). (If you missed it, check out [our pitch video](https://www.youtube.com/watch?v=EdTnrPZUW98) below, along with the [original proposal](https://docs.google.com/document/d/1MAUCgxJmSHxA6ozVXp6U49UMPF3sJPrInz1rnl9Wf_4/edit?pli=1#heading=h.9531ycwaflet).)

<iframe src="https://www.youtube.com/embed/EdTnrPZUW98?si=qSF4Kml7J9p9HFMh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

While competing community maintained API clients exist, Drupal does not offer any official JavaScript utilities to simplify the process of consuming data outside of the CMS. Our goal is to assemble a group of contributors in order to combine the best of existing Drupal API clients into a set of utilities that can both address common use cases with little configuration, and also be extended to support the needs of a diverse JavaScript ecosystem.

We were [lucky enough to be selected](https://youtu.be/tNa4XKb3zds?si=di_9WNupphYQrnPi&t=4995) by a panel of judges and the Drupal community to recieve funding. Since then, we've made some exciting progress on making our pitch a reality and wanted to share some updates.

### Intitial Goals and Vertical Slice POC

Our initial focus was what we defined as a [vertical slice POC](https://www.drupal.org/project/api_client/issues/3365506) for our JSON:API Client. As a checkpoint on the way to our eventual 1.0 release, we saw value in focusing deeply on a narrow portion of the client. Specifically, we decided to focus on the ability to get a collection of resources from the API. Within that, we also wanted to implement all of our planned configuration options, specifically:

- The ability to provide a custom fetch method
- Support for authentication (basic auth for the POC)
- The ability to provide a local cache
- The ability to desaralize the response
- Support for localization
- Support for all query parameters supported by Drupal's JSON:API implementation.

Going this deep on our collection get method hopefully makes it easier to envision what the interface of the full client will be even though only a subset of our functionality exists. We also think that it will simplify implementation on the way to 1.0 as we will have already been forced to lay much of the necessary groundwork.

And having this POC early also hopefully makes it easier for us to engage with the community and get real world feebdack.

### 0.1.0 Release

NPM

Code sandbox

Docs

### How you can help

Feedback!

Hands on help - specifically outside of Pantheon.
