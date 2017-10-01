<template>
  <router-link
    class="work"
    :to="`/works/${work.path}`"
    :style="style"
    :title="work.name"
  />
</template>

<script>
  export default {
    name: 'WorkItem',
    props: {
      work: Object
    },
    data () {
      return {
        style: `background-image: url(../../static/work/${this.work.screenshot.desktop || this.work.screenshot.mobile})`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  $horizontalMargin: 20px;  // TODO: This also appears in SkillsPage and SkillItem - put it in one place

  .work {
    @extend %transition;
    $itemsNumber: 3;
    $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
    width: $size; height: $size;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @include small {
      $itemsNumber: 4;
      $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
      width: $size; height: $size;
    };
    @include medium {
      $itemsNumber: 5;
      $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
      width: $size; height: $size;
    };
    @include large {
      $itemsNumber: 6;
      $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
      width: $size; height: $size;
      max-width: 150px; max-height: 150px;
    };
    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(2px 2px 5px darken($grey, 35%));
    }
  }
</style>
