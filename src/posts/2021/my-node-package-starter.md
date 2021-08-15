---
title: My Node Package Starter
description: Absent of more specific constraints, this is my preferred setup
  when creating a new node package.
author: Brian
date: 2021-08-08T14:15:30.082Z
---
* Vite - vanilla TS

`npm init vite@latest`

* Circle
* Typedocs
* Jest
* Structure of exports...
* ESlint and prettier
** save on edit in vscode.
Create example.settings.json in .vscode
.gitignore settings.json
extension.json to suggest extentions on install
Install prettier as local dependency
Add this to package.json
`  "prettier": {
    "singleQuote": true,
    "arrowParens": "avoid",
    "proseWrap": "always"
  },`

** Also run as scripts for pre-commit hooks. https://www.npmjs.com/package/@typescript-eslint/eslint-plugin then https://github.com/prettier/eslint-config-prettier Then lint staged. 
* NVMrc

just drop in latest LTS major version

* Husky
