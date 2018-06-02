import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Diary from '@/components/Diary'
import Chat from '@/components/Chat'
import Setting from '@/components/Setting'
import Project from '@/components/Project'

Vue.use(Router)

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
      path: '/diary',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
