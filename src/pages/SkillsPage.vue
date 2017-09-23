<template>
  <div class="page skills-page">
    <div class="content">
      <div class="container">
        <h2 class="tag rk">&lt;skills&gt;</h2>
      </div>
      <div class="primary row">
        <div class="container">
          <h2>&lt;primary&gt;</h2>
          <skill-item
            v-for="skill in skills.filter(({ level }) => level === 'primary')"
            :skill="skill"
            :key="skill.name"
          />
        </div>
      </div>
      <div class="secondary row">
        <div class="container">
          <h2>&lt;secondary&gt;</h2>
          <skill-item
            v-for="skill in skills.filter(({ level }) => level === 'secondary')"
            :skill="skill"
            :key="skill.name"
          />
        </div>
      </div>
      <div class="other row">
        <div class="container">
          <h2>&lt;other&gt;</h2>
          <skill-item
            v-for="skill in skills.filter(({ level }) => level === 'other')"
            :skill="skill"
            :key="skill.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillItem from '@/components/SkillItem'

export default {
  name: 'SkillsPage',
  components: { SkillItem },
  data () {
    return {
      skills: [
        { name: 'HTML5', icon: 'html5.png', level: 'primary' },
        { name: 'CSS3', icon: 'css3.png', level: 'primary' },
        { name: 'JavaScript', icon: 'javascript.png', level: 'primary' },
        { name: 'React', icon: 'react.png', level: 'primary' },
        { name: 'Redux', icon: 'redux.png', level: 'primary' },
        { name: 'React Router', icon: 'react-router.png', level: 'primary' },
        { name: 'Vue', icon: 'vue.png', level: 'primary' },
        { name: 'jQuery', icon: 'jquery.png', level: 'primary' },
        { name: 'SASS', icon: 'sass.png', level: 'primary' },
        { name: 'Bootstrap', icon: 'bootstrap.png', level: 'primary' },
        { name: 'Firebase', icon: 'firebase.png', level: 'secondary' },
        { name: 'React Native', icon: 'react-native.png', level: 'secondary' },
        { name: 'Git', icon: 'git.png', level: 'secondary' },
        { name: 'Gulp', icon: 'gulp.png', level: 'secondary' },
        { name: 'Grunt', icon: 'grunt.png', level: 'secondary' },
        { name: 'Webpack', icon: 'webpack.png', level: 'secondary' },
        { name: 'GitHub', icon: 'github.png', level: 'other' },
        { name: 'Bitbucket', icon: 'bitbucket.png', level: 'other' },
        { name: 'Trello', icon: 'trello.png', level: 'other' },
        { name: 'ESLint', icon: 'eslint.png', level: 'other' },
        { name: 'ScrumDo', icon: 'scrumdo.png', level: 'other' },
        { name: 'Slack', icon: 'slack.png', level: 'other' },
        { name: 'Atom', icon: 'atom.png', level: 'other' },
        { name: 'Photoshop', icon: 'photoshop.png', level: 'other' },
        { name: 'Sketch', icon: 'sketch.png', level: 'other' }
      ]
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

      &.primary {
        img { height: 140px; }
        p { font-size: 1.2em;	}
      }

      &.secondary {
        img { height: 120px; }
        p { font-size: 1em;	}
      }

      &.other {
        img { height: 100px; }
        p { font-size: 0.9em;	}
      }
    }
  }
</style>
