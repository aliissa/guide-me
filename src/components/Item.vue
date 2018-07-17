<template>
  <div id="news-item" class="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp">
    <div class="mdl-card__media background-transparent">
      <!-- <template v-if="item.multimedia.length > 0">
        <img class="max-height-200" :src="this.url + item.multimedia[0].url" border="0">
      </template> -->
    </div>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text align-flex-start">{{item.venue.name}}</h2>
    </div>
    <template v-if="item.venue.categories && item.venue.categories.length > 0">
      <div class="mdl-card__supporting-text">Category: {{item.venue.categories[0].name}}</div>
    </template>
    <div class="mdl-card__supporting-text">Address: {{item.venue.location.address}}, {{item.venue.location.distance}}m away</div>
    <!-- <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" @click="isExpanded = !isExpanded">
        <span v-if="isExpanded">Read less</span>
        <span v-else>Read more</span>
      </a>
    </div> -->
    <!-- <div class="margin-horizontal-5 item-container">
      <transition name="fade" :duration="500">
        <div v-if="isExpanded" class="mdl-card__supporting-text">
          {{item.snippet}} <a :href="item.web_url" target="_blank">Read full srticle <i class="material-icons">launch</i></a>
        </div>
      </transition>
    </div> -->
  </div>
</template>

<script>
import config from '@/config/config'

export default {
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .background-transparent {
    background-color: transparent;
  }

  .align-flex-start {
    align-self: flex-start;
  }

  .mdl-card__supporting-text, .mdl-card__title-text {
    text-align: left;
  }

  .mdl-card {
    min-height: 100px;
  }

  .mdl-card__supporting-text {
    padding: 5px 16px;
  }
</style>
