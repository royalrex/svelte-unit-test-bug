# Bug repo for cypress-svelte-unit-test

This repository contains a simple case for which the cypress-svelte-unit-test fails because of the way the tested
component is removed from the DOM.

Dependencies:

- Cypress 6.9.1
- cypress-svelte-unit-test 3.3.4

### Bug

The plugin does not properly destroy the tested component giving a memory leak, but also hinders proper testing of more
advanced components. In particular; the bug will break components that are updated through shared svelte stores. The fix
is inspired by how cypress have added support for svelte components in v10.7.0. The motivation for this fix is to
support testing of code bases on earlier versions of cypress.

## Install & Run

1. install packages

```sh
npm install
```

2. Run the test!

```sh
npm run cypress:run
```

3. Observe the bug

Expected result is that the very simple test will succeed, but it doesn't. It fails because the component is not
completely destroyed between test cases. Updating the svelte store will then trigger DOM updates in these leaked
components.