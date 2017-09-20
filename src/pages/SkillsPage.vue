<template>
  <div class="page skills-page">
    <div class="content">
      <skill-item v-for="skill in skills" :skill="skill" :key="skill.name" />
    </div>
  </div>
</template>

<script>
  import SkillItem from '@/components/SkillItem'

  export default {
    name: 'SkillsPage',
    data () {
      return {
        skills: [
          { name: 'HTML5', icon: 'html5.png', level: 'advanced' },
          { name: 'CSS3', icon: 'css3.png', level: 'advanced' },
          { name: 'JavaScript', icon: 'javascript.png', level: 'advanced' },
          { name: 'jQuery', icon: 'jquery.png', level: 'advanced' },
          { name: 'React', icon: 'react.png', level: 'advanced' },
          { name: 'Redux', icon: 'redux.png', level: 'advanced' },
          { name: 'React Router', icon: 'react-router.png', level: 'advanced' },
          { name: 'React Native', icon: 'react-native.png', level: 'intermediate' },
          { name: 'SASS', icon: 'sass.png', level: 'intermediate' },
          { name: 'Git', icon: 'git.png', level: 'intermediate' },
          { name: 'Bootstrap', icon: 'bootstrap.png', level: 'intermediate' },
          { name: 'Gulp', icon: 'gulp.png', level: 'intermediate' },
          { name: 'Grunt', icon: 'grunt.png', level: 'intermediate' },
          { name: 'Karma', icon: 'karma.png', level: 'intermediate' },
          { name: 'Mocha', icon: 'mocha.png', level: 'intermediate' },
          { name: 'Chai', icon: 'chai.png', level: 'intermediate' },
          { name: 'ESLint', icon: 'eslint.png', level: 'intermediate' },
          { name: 'Vue.js', icon: 'vue.png', level: 'beginner' },
          { name: 'Webpack.js', icon: 'webpack.png', level: 'beginner' },
          { name: 'PHP', icon: 'php.png', level: 'beginner' },
          { name: 'MySQL', icon: 'mysql.png', level: 'beginner' },
          { name: 'GitHub', icon: 'github.png', level: 'other' },
          { name: 'Bitbucket', icon: 'bitbucket.png', level: 'other' },
          { name: 'Trello', icon: 'trello.png', level: 'other' },
          { name: 'ScrumDo', icon: 'scrumdo.png', level: 'other' },
          { name: 'Slack', icon: 'slack.png', level: 'other' },
          { name: 'Babel', icon: 'babel.png', level: 'other' },
          { name: 'Photoshop', icon: 'photoshop.png', level: 'other' },
          { name: 'Atom', icon: 'atom.png', level: 'other' }
        ]
      }
    },
    components: { SkillItem }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  $horizontalMargin: 20px;  // TODO: This also appears in SkillItem - put it in one place

  .skills-page {
    justify-content: flex-start;
    background: $orange;
    &:after {
      background: linear-gradient(to top, $orange 25%, transparent);
    }
    .content {
      @include flex(row, wrap);
      padding: #{$horizontalMargin} #{$horizontalMargin} 100px;
      overflow-y: auto;
    }
  }
</style>
