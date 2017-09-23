<template>
  <div class="page skills-page">
    <div class="content">
      <div class="container">
        <h2 class="tag rk">&lt;skills&gt;</h2>
      </div>
      <div v-for="level in skillLevels" :key="level">
        <div class="row" :class="level">
          <div class="container">
            <h2>&lt;{{ level }}&gt;</h2>
            <skill-item
              v-for="skill in skills.filter(skill => skill.level === level)"
              :skill="skill"
              :key="skill.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from '@/database'
import SkillItem from '@/components/SkillItem'

export default {
  name: 'SkillsPage',
  components: { SkillItem },
  computed: {
    skills () {
      return database.skills
    },
    skillLevels () {
      return ['primary', 'secondary', 'other']
    }
  }
}
</script>

<style lang="scss">
  .skills-page {
    &:after {
      background: linear-gradient(to top, #ededed 25%, transparent);
    }

    .content {
      width: 100%;
      padding-bottom: 120px;
      overflow-y: auto;
    }

    .row {
      margin: 0 0 10px;
      padding-bottom: 20px;
      background: rgba(#fafafa, .25);
      box-shadow: 0 3px #d9d9d9;

      h2 {
        color: #777;
        font-family: monospace;
        font-size: 1.5em;
        margin: 15px;
      }
    }
  }
</style>
