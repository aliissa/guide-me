<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <main class="mdl-layout__content">
      <div class="mdl-grid">
        <div id="search-container" class="mdl-cell mdl-cell--6-col search-container">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
            <input class="mdl-textfield__input" type="text" id="searchKeyword" v-model="query" @keyup="manageInput">
            <label class="mdl-textfield__label" for="searchKeyword">Specify location or venue type</label>
          </div>
          <div>
            <button id="btnSearch" class="mdl-button mdl-js-button mdl-button--icon" @click="listItems" :disabled="isSearchDisabled">
              <i class="material-icons">search</i>
            </button>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--6-col padding-top-5">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
            <select class="mdl-textfield__input" v-model="radius" @change="listItems">
              <option value="100">Within 100 Meters</option>
              <option value="300">Within 300 Meters</option>
              <option value="1000">Within 1,000 Meters</option>
              <option value="10000">Within 10,000 Meters</option>
            </select>
            <label class="mdl-textfield__label is-focused" for="searchKeyword">Select Radius</label>
          </div>
        </div>
      </div>
      <div id="list-container" class="mdl-grid list-container">
        <template v-if="itemsData">
            <item v-for="item in itemsList[0].items" :item="item" :key="item.referralId"></item>
        </template>
        <div v-else-if="status.loading" id="loading" class="full-width">
          <div class="mdl-spinner mdl-js-spinner is-active"></div>
        </div>
        <div v-else-if="status.error" class="full-width">An error has occured, please try again later.</div>
        <div v-else id="no-data" class="full-width">
          Your search did not match any results.
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Item from '@/components/Item'

export default {
  name: 'items-list',
  data () {
    return {
      query: '',
      radius: 0
    }
  },
  components: {
    Item
  },
  created: function() {
    // load 10 news item with the default search keyword which is set to technology
    this.listItems()
  },
  mounted () {
    // we are calling the upgradeAllRegistered & upgradeDom methods to ensure that all the objects with css classes
    // are instantiated.
    if (window.componentHandler) {
      window.componentHandler.upgradeAllRegistered()
      window.componentHandler.upgradeDom()
    }
  },
  methods: {
    ...mapActions({
      getItems: 'getItems',
    }),
    listItems () {
      if (navigator.geolocation) {
        var context = this
        navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude
        var long = position.coords.longitude
        context.getItems({
          longitude: long,
          latitude: lat,
          radius: context.radius,
          query: context.query
        })
      })
      }
    },
    // this method is to check what keys were clicked and to handle them
    manageInput () {
      // check if the key pressed was "Enter" to trigger the listItems method
      if (event && event.keyCode === 13) {
        if (!this.isSearchDisabled) {
          this.listItems()
        }
      }
      // if the user clear the search input and there are no data displayed, fetch the initial data again
      if (this.query.length === 0) {
        if (this.itemsList.length > 0 && this.itemsList[0].items && this.itemsList[0].items.length === 0) {
          this.query = ''
          this.radius = 0
          this.listItems()
        }
      }
    }
  },
  computed: {
    itemsData () {
      if (this.itemsList && this.itemsList.length > 0 && this.itemsList[0].items && this.itemsList[0].items.length > 0) {
        return this.itemsList
      }
    },
    isSearchDisabled () {
      if (this.query.length > 1) {
        return false
      }
      return true
    },
    ...mapGetters({
      itemsList: 'itemsList',
      status: 'status'
    })
  }
}
</script>

<style scoped lang="scss">
  %flex-start {
    display: flex;
    justify-content: center;
  }

  .search-container {
    @extend %flex-start;
    align-items: center;
  }

  .list-container {
    width: 100%;
    padding: 0;
    overflow-y: overlay;
    height: 600px;
  }

  .full-width {
    width: 100%;
  }

  .padding-top-5 {
    padding-top: 5px;
  }
</style>