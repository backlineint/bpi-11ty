---
title: Running Lighthouse CI Server Locally
description: "While it would be better in almost every way to host Lighthouse CI
  Server somewhere, running it locally can still be a useful way to to collect
  some baseline performance measurements. These are the steps I followed to run
  an instance locally and collect some initial data. "
author: Brian
date: 2021-03-09T23:10:55.432Z
---
npm init -y

npm install -D @lhci/cli @lhci/server sqlite3

Add Scripts: 

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lhci:wizard": "lhci wizard",
    "lhci:server": "lhci server --storage.storageMethod=sql --storage.sqlDialect=sqlite --storage.sqlDatabasePath=./db.sql"
  },

Create lighthouserc.js

npm run lhci:server

Different terminal

npm run lhci:wizard

(Or use concurrently)

Gitignore stuff

Figure out the right process to run and compare commits.