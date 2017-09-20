<template>
  <div class="page contact-page">{{ text }}</div>
</template>

<script>
  export default {
    name: 'ContactPage',
    data () {
      return {
        text: 'Contact'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .contact-page { background: $blue; }
</style>
