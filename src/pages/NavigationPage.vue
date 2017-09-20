<template>
  <div
    class="navigation-page"
    :class="opened && 'opened'"
  >
    <navigation-page-tile
      v-for="link in links"
      :key="link"
      :link="link"
      @linkChosen="linkChosen"
    />
  </div>
</template>

<script>
  import NavigationPageTile from '@/components/NavigationPageTile'

  export default {
    name: 'NavigationPage',
    components: { NavigationPageTile },
    data () {
      return {
        links: ['me', 'skills', 'works', 'contact'],
        opened: false
      }
    },
    methods: {
      linkChosen () {
        this.opened = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .navigation-page {
    @extend %absolute;
    @extend %transition;
    @extend %full-size;
    &.opened .tile:not(.opened) { background: #333; }
  }
</style>
