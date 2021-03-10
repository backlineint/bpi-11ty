---
title: Running Lighthouse CI Server Locally
description: "While it would be better in almost every way to host Lighthouse CI
  Server somewhere, running it locally can still be a useful way to to collect
  some baseline performance measurements. These are the steps I followed to run
  an instance locally and collect some initial data."
author: Brian
date: 2021-03-10T23:10:55.432Z
---
While I had previously [set up Lighthouse CI with Github Actions](/til/2021/configuring-lighthouse-ci-with-github-actions/) and found it useful, I found myself looking longingly at the [reports provided by Lighthouse CI Server](https://twitter.com/_developit/status/1266112451155841024) as a way to compare results over time. While the docs are mainly focused on running on a public server with persistent storage (which is clearly the most useful way to do this,) I couldn't help but wonder if I could run the server locally to capture some quick data comparing a few specific changes.

Turns out you absolutely can. The docs provide [an example Docker container to use locally](https://twitter.com/_developit/status/1266112451155841024), but I went with the even lower-fi solution.

From within the repository containing the code that I'm measuring, I added packages for Lighthouse CI Server, along with sqlite for data storage.

    npm install -D @lhci/cli @lhci/server sqlite3

I also added [Concurrently](https://www.npmjs.com/package/concurrently) as it made it easier to start the server and collect data in one fell swoop:

    npm install -D concurrently

While I was messing around with `package.json` I added the following scripts:

{% highlight json %}
"scripts": {
  "lhci:audit": "concurrently \"npm run lhci:server\" \"lhci autorun\"",
  "lhci:wizard": "lhci wizard",
  "lhci:server": "lhci server --storage.storageMethod=sql --storage.sqlDialect=sqlite --storage.sqlDatabasePath=./db.sql"
},
{% endhighlight %}

Create lighthouserc.js

npm run lhci:server

Different terminal

npm run lhci:wizard

(Or use concurrently)

Gitignore stuff

Figure out the right process to run and compare commits.