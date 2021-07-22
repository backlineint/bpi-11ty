---
title: Working Around React's Web Component Limitations
description: React still has some limitations when it comes to using web
  components, but @lit-labs/react makes it much easier to work through them.
author: Brian
date: 2021-07-21T01:55:21.398Z
---
One of the most exciting features of web components is the fact that they can be used in any JavaScript framework. If you scan through the list at [Custom Elements Everywhere](https://custom-elements-everywhere.com/) you'll see that coverage is really solid across the board... until you get to React.

As [the test results](https://custom-elements-everywhere.com/libraries/react/results/results.html) show, the limitations fall into two main categories. The first is that React can not automatically pass non-string data (arrays and objects for example) into custom element properties.

Take for example this election results tracker component, `<results-tracker>`. All of the properties of the component are strings, except for candidates, which expects an array of objects like:

```json
const candidates = [
  {
    name: "Joseph R. Biden Jr.",
    primary: 253,
    secondary: 73879622,
    color: "#1375b7"
  },
  {
    name: "Donald J. Trump",
    primary: 214,
    secondary: 69772905,
    color: "#c93135"
  }
];
```

You would assume that you could pass in the `candidates` array just as you could in a React component.

```html
<results-tracker
  headline={headline}
  race={race}
  total={total}
  candidates={candidates}
>
  <p>{subheadline}</p>
</results-tracker>
```

Instead, you'll be met with an error. You can work around it by converting the `candidates` array to a string, but it feels a little dirty.

```html
<results-tracker
  headline={headline}
  race={race}
  total={total}
  candidates={JSON.stringify(candidates)}
>
  <p>{meta.subheadline}</p>
</results-tracker>
```

The second and larger category of limitations are related to events. React will not automatically listen to events dispatched by a custom element.

Take for example the generic-switch component from @gerneric-components...

Summary of limitations.

Working around it with a wrapper.

Working around it with @lit-labs/react

Long standing React repo issue / I hope adoption of web components forces Facebook's hand here. But if not, the Lit team taking things into their own hands is the next best thing.