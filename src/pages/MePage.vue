<template>
  <div class="page me-page">
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: 'MePage',
    data () {
      return {
        text: 'Me'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .me-page {
    background: $grey;
  }
</style>
