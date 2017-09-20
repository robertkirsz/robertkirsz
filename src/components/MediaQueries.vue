<template>
  <div />
</template>

<script></script>

<style lang="scss" scoped>
  @import "../styles/variables";

  div {
    position: fixed;
    top: 0; right: 0; left: 0;
    height: 25px;
    color: white;
    font-weight: bolder;
    text-align: center;
    z-index: 10000;
    &:after {
      content: "";
      line-height: 25px;
    }
    @include phone-only {
      background-color: rgba(red, 0.2);
      &:after { content: "phone-only"; }
    };
    @include tablet-portrait-up {
      background-color: rgba(green, 0.2);
      &:after { content: "tablet-portrait-up"; }
    };
    @include tablet-landscape-up {
      background-color: rgba(blue, 0.2);
      &:after { content: "tablet-landscape-up"; }
    };
    @include desktop-up {
      background-color: rgba(black, 0.2);
      &:after { content: "desktop-up"; }
    };
    @include big-desktop-up {
      background-color: rgba(pink, 0.2);
      &:after { content: "big-desktop-up"; }
    };
  }
</style>
