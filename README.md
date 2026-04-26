# @rvx/iconoir
This package provides all the [iconoir](https://iconoir.com/) icons as [rvx components](https://mxjp.github.io/rvx/).

```bash
npm i @rvx/iconoir
```

## Usage
```jsx
import { Sparks } from "@rvx/iconoir/solid";

<Sparks />
```

All icons are rendered with the following additional css classes:
+ **iconoir**
+ **iconoir-[variant]**
+ **iconoir-[name]**

```html
<svg class="iconoir iconoir-solid iconoir-sparks" ...
```

You can add additional attributes or event handlers:
```jsx
import { Override } from "rvx";
import { Sparks } from "@rvx/iconoir/solid";

<Override role="button" on:click={...}>
  <Sparks />
</Override>
```
