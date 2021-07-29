---
title: Working Around React's Web Component Limitations
description: React still has some limitations when it comes to using web
  components, but @lit-labs/react makes it much easier to work through them.
author: Brian
date: 2021-07-21T01:55:21.398Z
---
One of the most exciting features of web components is the fact that they can be used in any JavaScript framework. If you scan through the list at [Custom Elements Everywhere](https://custom-elements-everywhere.com/) you'll see that coverage is really solid across the board... until you get to React.

As [the test results](https://custom-elements-everywhere.com/libraries/react/results/results.html) show, the limitations fall into two main categories. The first is that React can't automatically pass non-string data like arrays and objects into custom element properties.

Take for example this election results tracker component: `<results-tracker>`. All of the properties of the component are strings, except for candidates, which expects an array of objects like:

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

Instead, you'll be met with an error. You can work around it by converting the `candidates` array to a JSON string, but it feels a little dirty.

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

The second and larger category of limitations are related to events. React does not automatically listen to events dispatched by a custom element.

Take for example the [generic-switch component](https://genericcomponents.netlify.app/generic-switch/demo/index.html) from [@generic-components/components](https://github.com/thepassle/generic-components). `<generic-switch>` emits a `checked-changed` event when toggling the switch on or off. You may want to update some application state as a result of this event, but by default, React will have no visibility into this event.

To handle this event, you could create a wrapping component that uses a ref to listen to the checked-changed event. 

Within the app, you'd use your wrapper component instead of the custom element itself:

```js
<SwitchProvider checked handleToggle={togglePolitics}>
  Politics:
</SwitchProvider>
```

The specifics don't really matter for this example, but the togglePolitics() function updates the necessary application state when the switch is toggled.

The wrapping component itself would look something like this:

```js
import { useEffect, useRef } from "react";

import "@thepassle/generic-components/generic-switch.js";

const SwitchProvider = ({ checked, handleToggle, children }) => {
  const switchRef = useRef();

  useEffect(() => {
    switchRef.current.addEventListener("checked-changed", (e) => {
      handleToggle(switchRef.current.__checked);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Can't add handleToggle as a dependency above because it would result in
  // this hook being called multiple times

  return (
    <generic-switch checked={checked} ref={switchRef}>
      {children}
    </generic-switch>
  );
};

export default SwitchProvider;
```

That gets the job done, but it is quite a bit of additional boilerplate. Almost enough to make you consider using a React based switch component instead.

Enter lit-labs/react

Working around both of these cases with @lit-labs/react

Long standing React repo issue / I hope adoption of web components forces Facebook's hand here. But if not, the Lit team taking things into their own hands is the next best thing.