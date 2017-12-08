<template>
  <transition name="fade-in" appear>
    <div id="app">
      <transition name="page-navigation-animation">
        <page-navigation v-if="showPageNavigation" />
      </transition>

      <transition :name="routerAnimationName">
        <router-view />
      </transition>

      <keyboard-handler />
    </div>
  </transition>
</template>

<script>
import _capitalize from 'lodash/capitalize'
import PageNavigation from '@/components/PageNavigation'
import KeyboardHandler from './KeyboardHandler'

export default {
  name: 'App',
  components: { PageNavigation, KeyboardHandler },
  data () {
    return {
      routerAnimationName: null // Used to determine animation direction
    }
  },
  computed: {
    showPageNavigation () {
      return this.$route.path !== '/' && this.$route.path !== '/nav'
    }
  },
  mounted () {
    this.updateTitle()
  },
  methods: {
    updateTitle () {
      document.title = this.showPageNavigation ? `robertkirsz - ${_capitalize(this.$route.name)}` : 'robertkirsz'
    },
    getAnimationName (to, from) {
      if (from.name === 'Navigation' && to.meta.routeIndex > 0) {
        this.routerAnimationName = 'router-animation-fade'
      } else if (from.name === 'Intro' && to.meta.routeIndex > 0) {
        this.routerAnimationName = 'router-animation-bottom'
      } else {
        this.routerAnimationName =
          to.meta.routeIndex < 1
            ? to.meta.routeIndex < from.meta.routeIndex ? 'router-animation-top' : 'router-animation-bottom'
            : to.meta.routeIndex < from.meta.routeIndex ? 'router-animation-left' : 'router-animation-right'
      }
    }
  },
  watch: {
    $route (to, from) {
      this.updateTitle()
      this.getAnimationName(to, from)
    }
  }
}
</script>

<style lang="scss">
  @import "styles/main";
  @import "styles/variables";

  #app {
    @extend %full-size;
    @extend %transition;
    position: relative;
    perspective: 1200px;
    transform-style: preserve-3d;
    overflow: hidden;
  }

  .tag {
  	color: #777;
    margin: 20px 0;
    font-size: 2em;
    font-family: monospace;
  }

  .page {
    @extend %absolute;
    @extend %full-size;
    @include flex(column, nowrap, center, center);
    background: $grey;
    &:after {
      content: "";
      display: block;
      position: fixed;
      right: 0; bottom: 0; left: 0;
      height: 150px;
      background: linear-gradient(to top, #ededed 25%, transparent);
    }

    .content {
      width: 100%;
      padding-bottom: 120px;
      overflow-y: auto;
    }
  }

  .intro-page { z-index: 1; }
  .navigation-page { z-index: 2; }
  .page { z-index: 3; }
  .pages-navigation { z-index: 4; }

  .router-animation {
    &-fade {
      &-enter-active:not(.navigation-page) { @extend .fadeIn; }
      &-leave-active:not(.navigation-page) { @extend .fadeOut; }
    }
    &-top {
      &-enter-active {
        @extend .slideInTop;
        &.intro-page { @extend .introShow; }
      }
      &-leave-active { @extend .slideOutBottom; }
    }
    &-bottom {
      &-enter-active { @extend .slideInBottom; }
      &-leave-active {
        @extend .slideOutTop;
        &.intro-page { @extend .introHide; }
      }
    }
    &-left {
      &-enter-active { @extend .slideInLeft; }
      &-leave-active { @extend .still; }
    }
    &-right {
      &-enter-active { @extend .slideInRight; }
      &-leave-active { @extend .still; }
    }
  }

  .page-navigation-animation {
    &-enter-active { @extend .pageNavigationShow; }
    &-leave-active { @extend .pageNavigationHide; }
  }
</style>
