# TODOs

Approaches

- [..] Test `next-intl/middleware`
- [] Test custom Middleware approach // won't need this if `next-intl` can solve all our use cases

Use cases

- [√] Add app router page
  - [√] Test get locale from layout
  - [√] Test get locale from generateMetaData
  - [x] Test get locale from loading.tsx - DOES NOT WORK
    - [ ] Explore LocaleProvider workaround
- [√] Add page router page
  - [√] Test get locale from SSR
  - [√] Test get locale from page
- [√] Add Incremental adoption proxy
  - [√] Test if fallback gets rewritten
- [√] Test Multiple/chained Middleware locale detection/passing
