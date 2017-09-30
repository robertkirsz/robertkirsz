<template>
  <div class="page skills-page">
    <div class="content">

      <div class="container">
        <h1 class="tag">&lt;skills&gt;</h1>
      </div>

      <section v-for="level in skillLevels" :class="level">
        <div class="container">
          <h2>&lt;{{ level }}&gt;</h2>
          <div class="row">
            <skill-item
              v-for="skill in skills.filter(skill => skill.level === level)"
              :skill="skill"
              :key="skill.name"
            />
          </div>
        </div>
      </section>

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

<style lang="scss" scoped>
  .skills-page {
    section {
      padding-bottom: 20px;
      background: rgba(#fafafa, .25);
      box-shadow: 0 3px #d9d9d9;
    }
    h2 {
      color: #777;
      font-family: monospace;
      font-size: 1.5em;
      padding: 15px;
      margin: 0;
    }
  }
</style>
