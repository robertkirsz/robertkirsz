<template>
  <div class="KeyboardHandler" />
</template>

<script>
export default {
  name: 'KeyboardHandler',
  data () {
    return {
      key: null,
      prevRouteName: null
    }
  },
  mounted () {
    window.addEventListener('keyup', this.handleKeyDown)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.handleKeyDown)
  },
  methods: {
    handleKeyDown ({ key }) {
      if (!['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].includes(key)) return

      const { name, meta: { routeIndex } } = this.$route
      const { routes } = this.$router.options

      switch (key) {
        case 'ArrowUp':
          this.$router.push({ name: 'Intro' })
          break
        case 'ArrowDown':
          if (name === 'Navigation' || routeIndex > 0) break

          this.$router.push({ name: this.prevRouteName || 'Me' })
          break
        case 'ArrowRight':
          if (name === 'Navigation' || routeIndex < 1) break

          const nextRoute = routes.find(
            route => route.meta && route.meta.routeIndex === routeIndex + 1
          )

          if (nextRoute) this.$router.push({ name: nextRoute.name })
          this.prevRouteName = name
          break
        case 'ArrowLeft':
          if (name === 'Navigation' || routeIndex < 2) break

          const prevRoute = routes.find(
            route => route.meta.routeIndex === routeIndex - 1
          )

          if (prevRoute) this.$router.push({ name: prevRoute.name })
          this.prevRouteName = name
          break
        default:
      }
    }
  }
}
</script>

<style>
  .KeyboardHandler { display: none; }
</style>
