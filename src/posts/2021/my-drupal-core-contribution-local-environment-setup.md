---
title: My Drupal Core Contribution Local Environment Setup
description: This is the process I followed to set up a local environment for
  Drupal contribution on a new machine.
author: Brian
date: 2021-02-20T21:37:14.333Z
tags:
  - drupal
---
There are many other ways to do this, but this is what works best for me.

Assumptions:
* I'm a Mac user, so this assumes you are too.
* You have git installed (install the Mac developer tools)
* You have Lando installed (if you're on an M1 Mac, you'll need to take special precautions)

* Clone the main Drupal repository: https://www.drupal.org/project/drupal/git-instructions
* Save example.gitignore as .gitignore and add the following lines:

`.gitignore`

`.lando.yml`

Inside your newly created Drupal directory, configure Lando:

`lando init`

Select the following options:

`? From where should we get your app's codebase? current working directory`

`? What recipe do you want to use? drupal9`

`? Where is your webroot relative to the init destination? .`

`? What do you want to call this app? drupal-core`

Start lando:

`lando start`

Install Drupal's dependencies with:

`lando composer install`

View your Drupal environment in the browser: http://drupal-core.lndo.site/

Install Drupal (todo: update this to be a single Drush command)

Database Settings:

Database name: drupal9
Database username: drupal9
Database password: drupal9

Advanced settings:
Host: database

Complete installation.

* Clone the issue fork.
* Check out a feature branch

Get to work.