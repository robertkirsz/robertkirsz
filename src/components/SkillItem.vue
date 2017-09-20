<template>
  <div class="skill" :style="style" :title="skill.name" />
</template>

<script>
  export default {
    name: 'SkillItem',
    props: {
      skill: Object
    },
    data () {
      return {
        style: `background-image: url(../../static/skills/${this.skill.icon})`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  $horizontalMargin: 20px;  // TODO: This also appears in SkillsPage - put it in one place

  .skill {
    @extend %transition;
    $itemsNumber: 3;
    $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
    width: $size; height: $size;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @include tablet-portrait-up {
      $itemsNumber: 4;
      $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
      width: $size; height: $size;
    };
    @include tablet-landscape-up {
      $itemsNumber: 5;
      $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
      width: $size; height: $size;
    };
    @include desktop-up {
      $itemsNumber: 6;
      $size: (calc((100vw - #{$horizontalMargin * 2}) / #{$itemsNumber}));
      width: $size; height: $size;
      max-width: 150px; max-height: 150px;
    };
    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(2px 2px 5px darken($orange, 35%));
    }
  }
</style>
