<template>
  <div class="skill col-xs-6 col-md-4">
    <img :src="`../../static/skills/${skill.icon}`" :alt="`Logo ${skill.name}`" />
    <p>{{ skill.name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'SkillItem',
    props: {
      skill: Object
    }
  }
</script>

<style lang="scss" scoped>
  .skill {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (min-width: 992px) {
      img:hover + p {
        opacity: 1;
        transform: translate3d(-50%, 0, 0) rotate3d(0, 0, 0, 0);
      }
    }

    p {
      position: relative;
      margin-top: 15px;
      top: 100%;
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

      @media screen and (min-width: 992px) {
        position: absolute;
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
</style>
