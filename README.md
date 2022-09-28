# Vanilla Extract

Some good background reading (and where this readme was copied from 😅): [A thorough analysis of CSS-in-TS](https://github.com/andreipfeiffer/css-in-js#vanilla-extract)

## Summary

Vanilla Extract is a modern solution with great TypeScript integration and no runtime overhead. It's pretty minimal in its features, straightforward and opinionated. Everything is processed at compile time, and it generates static CSS files. Successor of [Treat](#treat), also be called "Treat v3", is developed and maintained by the same authors.

Version: **`1.9`** | Maintained by [Seek OSS](https://github.com/seek-oss/) | Launched in **2021** | [View Docs](https://vanilla-extract.style/)

### Features

- ✅ **TypeScript support**
- ✅ **Built-in Theming support**
- ✅ **Context-aware code completion**
- ✅ **Framework agnostic**
- 🟠 **Atomic CSS**: can be achieved with [Sprinkles](https://www.npmjs.com/package/@vanilla-extract/sprinkles)
- ❌ **No Styles/Component co-location**: styles must be placed in an external `.css.ts` file
- **Styles definition method(s)**

  - ❌ Tagged Templates
  - ✅ Style Objects

- **Styles nesting**

  - ✅ Contextual styles
  - ❌ Abitrary nesting

- **Styles apply method(s)**

  - ✅ `className`
  - ❌ `styled` component
  - ❌ `css` prop

- **Styles output**
  - ✅ `.css` file extraction
  - ❌ `<style>` tag injection

## Other benefits

- 👮 forbids **nested arbitrary selectors** (ie: `& > span`), which might be seen as a downside, but it actually discourages bad-practices like **specificity wars**, which should be avoided when scaling CSS (however, this is impossible to be statically type-checked without _pattern matching_, so it will throw a runtime exception)
- 🥳 generates the same filename hash on build, if styles haven't changes, meaning that end-users benefit of CSS cache-ing even when deploying new versions with component updates only (logic, or content), without styles updates

## Worth mentioning observations

- 😌 in contrast with Treat, it relies on CSS Variables support, which means: 1) it doesn't work on IE, 2) is simpler and easier to maintain, 3) it supports other bundlers besides webpack
- 😣 [Next.js integration](https://github.com/seek-oss/vanilla-extract/discussions/89) is not very smooth at the moment, there is not officially maintained package and upgrading Next.js might require some manual plumbing
- 😕 bundles all styles, exported or not, even if they are not used in component
- 😥 it doesn't handle dynamic styles: you can use built-in `variants` based on predefined types, or **inline styles** for user-defined styles

# Conclusion

We felt a lot like using CSS Modules: we need an external file for styles, we place the styles on the elements using `className`, we handle dynamic styles with **inline styles**, etc. However, we don't write CSS, and the overall experience with TypeScript support is magnificent, because everything is typed, so we don't do any **copy-paste**. Error messages are very helpful in guiding us when we do something we're not supposed to do.

vanilla-extract is built with restrictions in mind, with a strong user-centric focus, balacing the developer experience with solid TypeScript support. It's also worth mentioning that [Mark Dalgleish](https://twitter.com/markdalgleish), co-author of CSS Modules, works at Seek and he's also a contributor.

The authors vision is to think of vanilla-extract as a low-level utility for building higher-level frameworks, which will probably happen in the future.
