<template>
  <div class="pages-navigation">
    <router-link
      v-for="link in links"
      :key="link"
      :to="`/${link}`"
      :class="`${link}`"
    >
      {{ link }}
    </router-link>
    <span
      class="marker"
      :class="{ animate: animateMarker, 'no-transition': noTransition }"
      :style="markerStyle"
      ref="marker"
    />
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'PageNavigation',
    data () {
      return {
        links: ['me', 'skills', 'works', 'contact'],
        markerPosition: 0,
        animateMarker: false, // Animates marker size
        activeLinkDOM: null, // Active navigation element
        markerSizeDifference: 5,
        noTransition: true // Disables initial transition
      }
    },
    mounted () {
      // Removes animation class of the marker when it ends
      // so that the animation can be triggered again later
      this.$refs.marker.addEventListener('animationend', () => {
        this.animateMarker = false
      })
      // Save initial active navigation element
      this.activeLinkDOM = document.querySelector('.router-link-active')
    },
    computed: {
      markerStyle () {
        return { left: this.markerPosition + 'px' }
      }
    },
    watch: {
      markerPosition (next, prev) {
        // Enable transition after initial values are calculated
        if (this.noTransition && prev !== 0) this.noTransition = false
        // Trigger scale animation when marker position changes
        this.animateMarker = true
      },
      '$route' (to) {
        // When route changes, get navigation link corresponding to
        // the new path and store it as an active one
        const pathName = to.path.split('/')[1]
        this.activeLinkDOM = document.querySelector(`.${pathName}`)
      },
      activeLinkDOM () {
        // When active link changes, get its 'left' position and left position of
        // the wrapper of all links
        const activeElementLeftPos = this.activeLinkDOM.getBoundingClientRect().left
        const linksWrapperLeftPos = this.$el.getBoundingClientRect().left
        // Calculate marker position by subtracting two positions and correcting it
        // by subtracting size difference between marker and link element
        this.markerPosition = activeElementLeftPos - linksWrapperLeftPos - this.markerSizeDifference
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  $elementWidth: 100px;
  $elementHeight: 40px;
  $markerSizeDifference: 5px;

  .pages-navigation {
    @include flex();
    position: absolute;
    bottom: 5vh; left: 50%;
    transform: translateX(-50%);
    filter: url("#gooey");
  }

  a {
    width: $elementWidth;
    height: $elementHeight;
    margin: 0px 15px;
    background: white;
    font-size: 20px;
    color: #111;
    text-align: center;
    text-decoration: none;
    line-height: $elementHeight;
    cursor: pointer;
    z-index: 1;
    &.animate-left { animation: li-move-left 0.7s ease 0s forwards; }
    &.animate-right { animation: li-move-right 0.7s ease 0s forwards; }
  }

  .marker {
    content: "";
    position: absolute;
    top: -$markerSizeDifference;
    left: $markerSizeDifference;
    width: $elementWidth + $markerSizeDifference * 2;
    height: $elementHeight + $markerSizeDifference * 2;
    display: inline-block;
    transition: left 0.4s ease;
    background: white;
    &.animate { animation: marker-animation 0.5s ease 0s forwards; }
    &.no-transition {
      animation: none;
      transition: none;
    }
  }

  @keyframes marker-animation {
  	  0% { transform: scale(1, 1); }
  	 20% { transform: scale(1, 0.5); }
  	 40% { transform: scale(1, 0.5); }
  	100% { transform: scale(1, 1); }
  }

  svg { display: none; }
</style>
