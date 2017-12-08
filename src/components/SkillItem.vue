<template>
  <div class="skill col-xs-6 col-md-4 col-xlg-3" :class="skill.level" :style="`opacity: ${loaded ? 1 : 0}`">
    <img :src="`../../static/skills/${skill.icon}`" :alt="`Logo ${skill.name}`" />
    <p>{{ skill.name }}</p>
  </div>
</template>

<script>
  import { preload } from '../utils'

  export default {
    name: 'SkillItem',
    props: {
      skill: Object
    },
    data: () => ({ loaded: false }),
    async mounted () {
      await preload(`../../static/skills/${this.skill.icon}`)
      this.loaded = true
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .skill {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    transition: opacity 1s;

    @include medium {
      img:hover + p {
        opacity: 1;
        transform: translate3d(-50%, 0, 0) rotate3d(0, 0, 0, 0);
      }
    }

    p {
      position: relative;
      margin-top: 15px;
      padding: 0.9em 1.5em;
      background: #fafafa;
      box-shadow: 0 3px #d9d9d9;
      white-space: nowrap;
      &:before {
        content: "";
        position: absolute;
        background: #fafafa;
        display: block;
        width: 20px; height: 20px;
        top: -5px;
        left: 50%;
        margin-left: -10px;
        transform: rotate(45deg);
        z-index: -1;
      }

      @include large {
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: 5px;
        transform: translate3d(-50%, 10px, 0) rotate3d(1, 1, 0, 25deg);
        opacity: 0;
        transition: opacity 0.2s, transform 0.2s;
        pointer-events: none;
        z-index: 999;
      }
    }
  }

  .primary {
    img { height: 140px; }
    p { font-size: 1.2em;	}
  }

  .secondary {
    img { height: 120px; }
    p { font-size: 1em;	}
  }

  .other {
    img { height: 100px; }
    p { font-size: 0.9em;	}
  }
</style>
