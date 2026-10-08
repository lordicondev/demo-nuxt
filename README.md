# Lordicon × Nuxt

Animated [Lordicon](https://lordicon.com/) icons in a Nuxt 4 app, with
[`@lordicon/element`](https://www.npmjs.com/package/@lordicon/element): icons in any template,
icons that follow Vue state, and server rendering that does not shift the page.

```sh
npm install
npm run dev        # http://localhost:3000
```

With Node 22.22, 24.15 or later, as Nuxt 4.6 asks.

## Lordicon in your Nuxt app

**1. Install**

```sh
npm install @lordicon/element
```

**2. Define the element** in a client plugin, `app/plugins/lordicon.client.ts`:

```ts
import { defineElement } from '@lordicon/element';

export default defineNuxtPlugin(() => {
    defineElement();
});
```

**3. Tell Vue it is not a component**, in `nuxt.config.ts`. Without it, Vue looks for a
component named `lord-icon`: the server leaves the icon out, and hydration fails.

```ts
export default defineNuxtConfig({
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === 'lord-icon',
        },
    },
});
```

**4. Give icons a size** in your global CSS, so that nothing moves while the page loads:

```css
@layer base {
    lord-icon {
        display: inline-block;
        width: 64px;
        height: 64px;
    }

    lord-icon:not(:defined) > * {
        width: 100%;
        height: 100%;
    }
}
```

In `@layer base`, the rule gives way to your classes, so one icon can take another size:
`class="size-8"`, or `style="width: 32px; height: 32px"`. The layer matters with Tailwind 4
and Nuxt UI: their classes sit in a layer, and a rule outside any layer would beat them.

**5. Use it**, in any template:

```vue
<template>
    <lord-icon src="/icons/lock.json" trigger="hover" />
</template>
```

Pick icons on [lordicon.com](https://lordicon.com/), give them your style and colours there,
and download them as Lottie JSON into `public/`, as here.

## What's inside

| Page                | Shows                                                                                   | Code                                                               |
| ------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `/`                 | Triggers, colours, stroke, a colour from CSS, icons in buttons and links                | [`app/pages/index.vue`](app/pages/index.vue)                       |
| `/state`            | `follow` with data from `useFetch`, a process in stages, `play()` after a request       | [`app/pages/state.vue`](app/pages/state.vue)                       |
| `/server-rendering` | A placeholder, a size before the script runs, loading on view or interaction, late data | [`app/pages/server-rendering.vue`](app/pages/server-rendering.vue) |

The buttons, the form and the late data are in [`app/components/`](app/components/), their
data in [`server/api/`](server/api/).

## Good to know

- The plugin runs in the browser only, hence `.client.ts`. The server needs nothing: it sends
  `<lord-icon>` as HTML, with its attributes. No `<ClientOnly>` either.
- Icons do not wait for Vue: they load once the plugin has run, also in a component that
  hydrates later, with `hydrate-on-visible` say.
- Prefer `src` to `:icon`: the URL is in the server's HTML and the icon loads sooner, and the
  JSON stays out of your JavaScript. `:icon` works too: Vue sets it as a property.
- A template ref gives the element, with `play()` and the rest:
  `useTemplateRef<LordIconElement>('icon')`, the type from `@lordicon/element`. Its events go
  to `@ready`, `@complete` and so on.
- `defineElement()` takes options, in the same plugin: triggers of your own, or
  `motion: 'always'` for every icon.
- Screen readers skip icons: give one an `aria-label` when it means something on its own. When
  the viewer asks for less motion, icons stop animating by themselves.
- Children of `<lord-icon>` show until the icon is ready: a still of the icon, downloaded from
  lordicon.com as SVG, makes a good placeholder.
- Nuxt 3 works the same way, with `plugins/` and `pages/` at the root rather than in `app/`.
- Every attribute and trigger: the
  [`@lordicon/element`](https://www.npmjs.com/package/@lordicon/element) README.

## This project

A new Nuxt 4 app as `npm create nuxt` makes it (the minimal template, TypeScript), with
ESLint through `@nuxt/eslint`, Prettier, and plain CSS. Its server routes stand in for your
backend, so it runs on a Node server rather than as a static site.

```sh
npm run lint
npm run typecheck
npm run format     # Prettier
npm run build && npm run preview
```

## License

MIT
