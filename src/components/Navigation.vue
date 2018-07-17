<template>
  <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
    <router-link class="mdl-layout__tab" :class="{ 'is-active': isPageActive('home') }" @click.native="setActive('home')" :to="{ name: 'home'}">Home</router-link>
    <router-link class="mdl-layout__tab" :class="{ 'is-active': isPageActive('tech-stack') }" @click.native="setActive('tech-stack')" :to="{ name: 'tech-stack'}">Tech Stack</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activePage: ''
      }
    },
    created () {
      // call the setActive method upon creation, so if user access the search page with a direct url, it will be highlighted
      this.setActive(this.$route.name)
    },
    methods: {
      setActive (page) {
        this.activePage = page
      },
      // check if the page is active to assign the class in the router-link above
      isPageActive (page) {
        if (this.activePage == page) {
          return true
        }
        return false
      }
    }
  }
</script>