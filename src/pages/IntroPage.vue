<template>
  <div class="intro-page scanlines" @click="$router.push('/nav')">
    <div class="title" data-parallax data-type="position" data-depth='0.5'>
      <div class="name" data-parallax data-type="position" data-depth='0.4'></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IntroPage'
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";
  @import "../styles/scanlines";

  .intro-page {
    @extend %flex-center;
    @extend %transition;
    @extend %full-size;
    user-select: none;
    cursor: pointer;
    background: url("/static/intro/background.jpg") no-repeat center center;
    background-size: cover;
    .title {
      position: relative;
      width: 90vw; height: 16vw;
      background: url("/static/intro/title.png") no-repeat center center;
      background-size: contain;
      z-index: 1;
    }
    .name {
      position: relative;
      top: 9vw; left: 22vw;
      width: 70vw; height: 21vw;
      background: url("/static/intro/name.png") no-repeat center center;
      background-size: contain;
    }
  }
</style>
