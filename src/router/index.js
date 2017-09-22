import Vue from 'vue'
import Router from 'vue-router'

import IntroPage from '@/pages/IntroPage'
const NavigationPage = cb => require(['@/pages/NavigationPage'], cb)
const MePage = cb => require(['@/pages/MePage'], cb)
const SkillsPage = cb => require(['@/pages/SkillsPage'], cb)
const WorksPage = cb => require(['@/pages/WorksPage'], cb)
const WorkPage = cb => require(['@/pages/WorkPage'], cb)
const ContactPage = cb => require(['@/pages/ContactPage'], cb)

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
      path: '*',
      redirect: '/'
    }
  ]
})
