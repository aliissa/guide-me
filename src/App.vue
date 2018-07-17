<template>
  <div id="app">
    <div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class = "mdl-layout__header">
        <div class = "mdl-layout__header-row">
           <span class = "mdl-layout-title">Guide Me</span>
        </div>
        <Navigation />
      </header>
      <main class="mdl-layout__content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
