# mfe-todo

## Architecture

This should be able to do the following:

- House multiple Angular applications (shells/hosts) that can be a mobile app or a PWA using Capacitor in the `shells` directory
- House multiple microfrontend applications in the `features` directory that can be:
  - an Angular application with its own routings
  - an Angular application that define custom elements using @angular/elements
  - (optional) an application that does the above but using a different frontend framework (eg. React)
- House multiple libraries that can be consumed locally or publish to npm registry independently, and they can be:
  - Angular libraries
  - Declaration only libraries (types only)
  - other libraries (eg. utility library using vite)
- Run individually or together through monorepo tool (ie. Turborepo) so that:
  - don't need to manually run individual scripts one by one during development
  - support cache to make development more efficient
  - easy manage dependency versions within the monorepo
  - easy clean up node_modules and caches and whatnot
  - centralize deployment scripts

TBC...
