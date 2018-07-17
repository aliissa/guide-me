<template>
  <div id="news-item" class="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp">
    <div class="mdl-card__media background-transparent">
    </div>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text align-flex-start">{{item.venue.name}}</h2>
    </div>
    <template v-if="item.venue.categories && item.venue.categories.length > 0">
      <div class="mdl-card__supporting-text">Category: {{item.venue.categories[0].name}}</div>
    </template>
    <div class="mdl-card__supporting-text">Address: {{item.venue.location.address}}, {{item.venue.location.distance}}m away</div>
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
