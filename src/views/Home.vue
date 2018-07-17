<template>
  <div id="main">
    <items-list />
  </div>
</template>

<script>
  import ItemsList from '@/components/ItemsList'
  export default {
    name: 'home',
    components: {
      ItemsList
    },
    mounted () {
      // we are calling the upgradeAllRegistered & upgradeDom methods to ensure that all the objects with css classes
      // are instantiated.
      if (window.componentHandler) {
        window.componentHandler.upgradeAllRegistered()
        window.componentHandler.upgradeDom()
      }
    }
  }
</script>
