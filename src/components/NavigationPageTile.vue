<template>
  <div
    @click="linkChosen = true"
    class="tile"
    :class="[link, { 'opened': linkChosen }]"
  >
    <span class="content">
      {{ link }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'NavigationPageTile',
    props: { link: String },
    data () {
      return {
        linkChosen: false
      }
    },
    mounted () {
      this.$el.addEventListener('transitionend', () => {
        // Redirect if link is chosen (we need to check that because other,
        // tiles also have transitions)
        if (this.linkChosen) this.$router.push(`/${this.link}`)
      })
    },
    watch: {
      linkChosen () {
        // Tell parent that we've chosen a link so it can luanch its animations
        this.$emit('linkChosen')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .tile {
    @extend %flex-center;
    @extend %transition;
    position: absolute;
    cursor: pointer;
    &.opened {
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: 1;
    }
  }

  .content {
    @extend %temp-font;
    @extend %transition;
    text-transform: capitalize;
  }

  .me {
    top: 0; right: 50%; bottom: 50%; left: 0;
    background: $green;
  }

  .skills {
    top: 0; right: 0; bottom: 50%; left: 50%;
    background: $orange;
  }

  .works {
    top: 50%; right: 50%; bottom: 0; left: 0;
    background: $red;
  }

  .contact {
    top: 50%; right: 0; bottom: 0; left: 50%;
    background: $blue;
  }
</style>
