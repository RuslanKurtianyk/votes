import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import VoteList from '@/components/VoteList'
import VoteDetails from '@/components/VoteDetails'
import VoteCreate from '@/components/VoteCreate'
import firebase from 'firebase'
import AuthGuard from './auth-guard'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard,
      children: [
        {
          path: '/',
          name: 'home',
          component: VoteList
        },
        {
          path: '/vote/:id',
          name: 'Vote',
          component: VoteDetails
        },
        {
          path: '/vote-create',
          name: 'VoteCreate',
          component: VoteCreate
        }
        ]
    }
  ]
})

export default router