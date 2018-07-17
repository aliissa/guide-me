<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      Here I will list the tech stack used, architecture implemented and how components are structured.
    </div>
    <ul>
      <li>
        <div>Vuejs: I used Vuejs framework to build the user interface. Vuejs system is built around the concept of components, which are small reusable parts of UI and Code.</div>
        <div>Also, Vue is reactive, which means that if you change a data value it will trigger and update the page to reflect these change.</div>
      </li>
      <li>
        <div>Vuex: Vuex is a state management pattern/library that centralizes the business logic</div>
        <div>Components in Vuex are loosely coupled since no or minimal interactions will happen between components via events, all components
        will have a single source of truth which is the Store.</div>
      </li>
      <li>Material Design lite: I used Material Design lite to built a simple yet well structured UI.</li>
      <li>SASS: There was a minimalist usage of sass to write less CSS code  benefit from variables and inheritance.</li>
      <li>
        <div>App Structure:</div>
        <ul>
          <li>main.js: this is the main file where we import the modules needed like vue-router and store</li>
          <li>App.vue: the main component which usually holds the skeleton of the app</li>
          <li>Views: The parent components which are usually reflected in the router as main sections</li>
          <li>Components: the children components which contains the logic and are usually imported in one or more view component</li>
          <li>router.js: this is where we define our routes and choose the components that will be loaded in each route</li>
          <li>
            <div>store: this is the center of our Vuex application where we hold the application state.</div>
            <div>We can't change the state directly from the components, state can changed only by explicitly committing mutations from the corresponding actions</div>
            <div>We use getters in components to display any state in the UI</div>
          </li>
        </ul>
      </li>
      <li>
        <div>Testing:</div>
        <ul>
        <li>Unit Testing:
          <ul>
            <li>Mocha was used for unit testing</li>
            <li>I wrote tests for all the actions, mutations and getters</li>
            <li>Run tests: <code>npm run test:unit</code></li>
          </ul>
        </li>
        <li>E2E Testing:
          <ul>
            <li>Nightwatch was used for E2E testing</li>
            <li>I wrote tests to test page load with initial news items, searching for data while expecting results and
            searching for data while expecting no data</li>
            <li>Run tests: <code>npm run test:e2e</code></li>
          </ul>
        </li>
      </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tech-stack-content',
  props: {
    title: String
  }
}
</script>

<!-- scoped is used below to limit the css to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: circle;
  width: 90%;
  text-align: left;
}
li {
  margin: 10px 0;
}
</style>
