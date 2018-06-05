import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Auth from '@/api/Auth'
import Content from '@/components/commons/Content'
import Diary from '@/components/Diary'
import Chat from '@/components/Chat'
import Setting from '@/components/Setting'
import Project from '@/components/Project'
import Calendar from '@/components/diary/Calendar'
import Importance from '@/components/diary/Importance'
import List from '@/components/diary/List'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (Auth.loggedIn()) return next()
  alert('로그인이 필요합니다')
  next({
    path: '/login',
    query: {redirect: to.fullPath}
  })
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: "/",
      component: Content,
      redirect: "/diary",
      children: [
        {
          path: 'diary',
          name: 'Diary',
          component: Diary,
          children: [
            {
              path: 'calendar',
              name: 'calendar',
              component: Calendar
            },
            {
              path: 'importance',
              name: 'importance',
              component: Importance
            },
            {
              path: 'list',
              name: 'list',
              component: List
            }
          ]
        },
        {
          path: 'chat',
          name: 'chat',
          component: Chat
        },
        {
          path: 'setting',
          name: 'Setting',
          component: Setting
        },
        {
          path: 'project',
          name: 'Project',
          component: Project
        }
      ]
    },
  ]
})
