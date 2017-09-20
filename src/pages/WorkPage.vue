<template>
  <div class="work-page">
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: 'WorkPage',
    data () {
      return {
        text: this.$route.params.id
      }
    },
    watch: {
      '$route' (to, from) {
        this.text = to.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>
  .work-page {}
</style>
