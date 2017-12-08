<template>
  <div class="intro-page scanlines" @click="loaded && $router.push('/nav')">
    <transition name="fade">
      <div v-if="loaded" class="title">
        <div class="name" />
      </div>
    </transition>
  </div>
</template>

<script>
  import { preload } from '../utils'

  export default {
    name: 'IntroPage',
    data: () => ({ loaded: false }),
    async mounted () {
      await preload([
        '../../static/intro/background.jpg',
        '../../static/intro/title.png',
        '../../static/intro/name.png'
      ])
      this.loaded = true
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";
  @import "../styles/scanlines";

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }

  .intro-page {
    @extend %flex-center;
    @extend %transition;
    @extend %full-size;

    user-select: none;
    cursor: pointer;
    background: url("/static/intro/background.jpg") no-repeat center;
    background-size: cover;

    .title {
      position: relative;
      width: 90vw; height: 16vw;
      background: url("/static/intro/title.png") no-repeat center;
      background-size: contain;
    }

    .name {
      position: relative;
      top: 9vw; left: 22vw;
      width: 70vw; height: 21vw;
      background: url("/static/intro/name.png") no-repeat center;
      background-size: contain;
    }
  }
</style>
