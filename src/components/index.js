import LoginComponent from './LoginComponent.vue'
import WelcomeComponent from './WelcomeComponent.vue'
export const Login = {
  install: function (Vue) {
    Vue.component('Login', LoginComponent)
  }
}
export const Welcome = {
  install: function (Vue) {
    Vue.component('Welcome', WelcomeComponent)
  }
}
