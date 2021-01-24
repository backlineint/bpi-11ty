---
title: Documenting My Mac Setup
description: "Hey future self: this is what you do when you set up a new Mac"
author: Brian
date: Last Modified
publishedDate: 2021-01-24
tags:
  - mac
---

Between loaners, replacements, and other surprises, over the past year or so I've set up new Mac laptops more than I ever have before. I tend to start fresh rather than migrate in order to get that nice clean digital slate. But what I don't do, is document the process all that well. You're in luck future self, because 4th time is the charm.

## Prerequisites
* Make a cup of coffee.
* Make sure you have your 2FA apps handy
* For anything that isn't in version control or in the cloud (hopefully that list gets smaller every time you do this), copy over files using a USB drive.

## System Preferences
* If I'm using multiple monitors, configure monitor orientation under System Preferences -> Displays.
* System Preferences -> Trackpad:
  * Enable tap to click.
  * Secondary click - click in bottom right corner.
* System Preferences -> Dock: Position on screen left.
* Finder -> Preferences -> Show Hard Disks on the Desktop
* Sign in and enable iCloud
* System Preferences -> Mission Control
  * Disable 'automatically rearrange spaces based on most recent use'
  * Disable 'displays have separate spaces'

## Software

* Install Chrome (yeah, [I know](https://chromeisbad.com/))
  * Sync to Google Account (has the added bonus of syncing all extensions)
  * Log into [Last Pass extension](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd?hl=en-US)
  * Preferences -> Appearance - turn off 'Show warning before quitting with ⌘Q' (I've always been baffled about that being a default)
* Install Firefox and Edge for cross browser fun.
* Sign in to Mac App Store and download the following apps and utilities:
  *  [Evernote](https://evernote.com/).
  * Install [Things](https://culturedcode.com/things/) and set up Things Cloud.
  * Set up all the [Slacks](https://slack.com/).
  * [Unclutter](https://unclutterapp.com/) (can't live without this one) Configure to store files in ~/Downloads
  * [Lightshot Screenshot](https://app.prntscr.com/en/index.html)
  * [Dropover](https://dropoverapp.com/)
  * Pomodoro timer - currently using [Flow](https://flowapp.info/)
  * [Giphy Capture](https://giphy.com/apps)
* Set up email. Outlook if a work machine. Log into [Hey](https://hey.com/).
* Download and configure [Bartender](https://www.macbartender.com/)
* Tunes - Install Sonos and set up account in Apple Music App.
* [Postman](https://www.postman.com/) - for API debugging
* [Sketch](https://www.sketch.com/) - because that is what you see most designs in these days.
* Creative Cloud / Photoshop  

## Terminal and SSH

* Install developer tools by typing `git` in the terminal.
* Follow [First Time Github Guide](https://kbroman.org/github_tutorial/pages/first_time.html)
* Change git editor to Nano: `git config --global core.editor "nano"`
* [Add key to ssh-agent](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
* Add new key to Bitbucket, Github, and Acquia accounts (Acquia requires an RSA key. Hopefully they will support ed25519 in the future, but in the meantime using RSA will make your life easier.)
* Install [Oh My Zsh](https://ohmyz.sh/#install)
* [Installed Powerline Fonts](https://github.com/powerline/fonts#installation) via git clone
* Change zsh theme by editing ~/.zshrc and change to agnoster
* Update ZSH permissions [as outlined here](https://github.com/ohmyzsh/ohmyzsh/issues/6835).
* Terminal Preferences - Changed default profile to Ocean and font to 'Source Code Pro for Powerline'
* VS Code User Preferences - Changed Terminal › Integrated: Font Family to 'Source Code Pro for Powerline'
* Install [Homebrew](https://brew.sh/)

## IDE(s)

Download and install [Visual Studio Code](https://code.visualstudio.com/) and enable the following extensions:
* [Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
* [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
* [Empty Indent](https://marketplace.visualstudio.com/items?itemName=DmitryDorofeev.empty-indent)
* [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
* [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)
* [PHP Doc Blocker](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker)
* [PHP Intelephense](https://marketplace.visualstudio.com/search?term=php%20doc%20blocker&target=VSCode&category=All%20categories&sortBy=Relevance)
* [phpcbf](https://marketplace.visualstudio.com/items?itemName=persoderlind.vscode-phpcbf)
* [phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Twig](https://marketplace.visualstudio.com/items?itemName=whatwedo.twig)
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

Plus many more that will be triggered by project configuration.

I also add the following settings in the user version of settings.json

```javascript
{
    "editor.tabSize": 2,
    "editor.detectIndentation": false,
    "editor.fontFamily": "'Source Code Pro for Powerline', Menlo, Monaco, 'Courier New', monospace",
    "explorer.confirmDelete": false,
    "window.zoomLevel": 1,
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "terminal.integrated.shell.osx": "/bin/zsh",
    "files.associations": {
      "*.theme": "php"
    },
}
```

Also install:
* [PHP Storm](https://www.jetbrains.com/phpstorm/) because their visual merge conflict resolution tool is still way better than VS Code.
* [Atom](https://atom.io/) as a lightweight alternative for when you need one.

## Local Development Environment

### NodeJS

* [Install NVM via Homebrew](https://formulae.brew.sh/formula/nvm#default) (following manual steps outlined at end of install process)
* Install latest node LTS via homebrew `nvm install --lts`

### PHP

* Upgrade PHP Version `brew install php@7.4`. Follow manual installation steps to add this new php version to your path.
* [Download composer](https://getcomposer.org/download/)
* Move composer into path `mv composer.phar /usr/local/bin/composer`
* Downgrade to Composer 1 (hopefully won't be necessary next time) `composer self-update --1`
* Increase composer memory limit by running `echo 'export COMPOSER_MEMORY_LIMIT=-1' >> ~/.zshrc`

### Vagrant
* Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* Download and install [Vagrant](https://www.vagrantup.com/)
* Install the following Vagrant plugins:
  * `vagrant plugin install vagrant-auto_network`
  * `vagrant plugin install vagrant-hostsupdater`
  * `vagrant plugin install vagrant-vbguest`
* [Install Ansible via Homebrew](https://formulae.brew.sh/formula/ansible#default)

### Docker

* Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
  * In Docker Desktop preferences, disable starting Docker upon login.
* Install [Lando](https://github.com/lando/lando/releases) (assuming that the version packaged with Lando is reasonable, you could install Docker Desktop as part of installing Lando)

## Dock

* Rip a bunch of nonsense out of the dock.
* Add: Outlook, Things, Chrome, VS Code, Slack, Terminal, Evernote, Sonos

## Things to install as needed:
* [Audio Hijack](https://rogueamoeba.com/audiohijack/)
* [Deckset](https://www.deckset.com/)
* Dropbox (hoping to find my way out of Dropbox...)
* [EncryptMe](https://encrypt.me/)
* FileZilla
* [Kap](https://getkap.co/)
* [Mmhmm](https://www.mmhmm.app/)
* XCode

You did it. Take a nap.