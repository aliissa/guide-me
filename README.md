# Guide Me

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run test:unit
```

Here I will list the tech stack used, architecture implemented and how components are structured.

## Tech Stack:

- Vuejs: I used Vuejs framework to build the user interface. Vuejs system is built around the concept of components, which are small reusable parts of UI and Code.
Also, Vue is reactive, which means that if you change a data value it will trigger and update the page to reflect these change.

- Vuex: Vuex is a state management pattern/library that centralizes the business logic
Components in Vuex are loosely coupled since no or minimal interactions will happen between components via events, all components will have a single source of truth which is the Store.
- Material Design lite: I used Material Design lite to built a simple yet well structured UI.

- SASS: There was a minimalist usage of sass to write less CSS code benefit from variables and inheritance.

## App Structure:
- main.js: this is the main file where we import the modules needed like vue-router and store
- App.vue: the main component which usually holds the skeleton of the app
- Views: The parent components which are usually reflected in the router as main sections
- Components: the children components which contains the logic and are usually imported in one or more view component
- router.js: this is where we define our routes and choose the components that will be loaded in each route
- store: this is the center of our Vuex application where we hold the application state.
We can't change the state directly from the components, state can changed only by explicitly committing mutations from the corresponding actions
We use getters in components to display any state in the UI

## Testing:
- Unit Testing:
  - Mocha was used for unit testing
  - I wrote tests for all the actions, mutations and getters
  - Run tests: npm run test:unit

