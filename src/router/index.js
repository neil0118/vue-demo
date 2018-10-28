import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/LoginComponent'
import Welcome from '../components/WelcomeComponent'
import Register from '../components/RegisterComponent'
import Confirm from '../components/ConfirmComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: Confirm
  }
  ]
})
