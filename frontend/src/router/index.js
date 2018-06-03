import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Auth from '@/api/Auth'

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
    }
  ]
})
