import Vue from 'vue'
import Router from 'vue-router'

import IntroPage from '@/pages/IntroPage'
import NavigationPage from '@/pages/NavigationPage'
import MePage from '@/pages/MePage'
import SkillsPage from '@/pages/SkillsPage'
import WorksPage from '@/pages/WorksPage'
import WorkPage from '@/pages/WorkPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: IntroPage,
      meta: { routeIndex: -1 }
    },
    {
      path: '/nav',
      name: 'Navigation',
      component: NavigationPage,
      meta: { routeIndex: 0 }
    },
    {
      path: '/me',
      name: 'Me',
      component: MePage,
      meta: { routeIndex: 1 }
    },
    {
      path: '/skills',
      name: 'Skills',
      component: SkillsPage,
      meta: { routeIndex: 2 }
    },
    {
      path: '/works',
      name: 'Works',
      component: WorksPage,
      meta: { routeIndex: 3 },
      children: [
        {
          path: ':id',
          name: 'Work',
          component: WorkPage,
          meta: { routeIndex: 3 }
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
      meta: { routeIndex: 4 }
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFoundPage
    }
  ]
})
