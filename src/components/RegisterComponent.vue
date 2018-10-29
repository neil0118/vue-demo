<template>
    <div class="form-group" style="text-align: -webkit-center">
      <label for="username">Username</label>
      <input class="form-control col-sm-3 col-centered" v-model="username" placeholder="username">
      <label for="username">Password</label>
      <input class="form-control col-sm-3 col-centered" v-model="password" placeholder="passowrd" type="password">
      <label for="username">Email</label>
      <input class="form-control col-sm-3 col-centered" v-model="email" placeholder="email">
      <input type="button" value="Sign up" class="btn btn-success" v-on:click="register">
      <router-link to="/"><input type="button" value="Back" class="btn btn-primary">
      </router-link>
    </div>
</template>

<script>
import {cognitoSignUp} from './CognitoTools.js'

export default {
  name: 'Register',
  props: ['username', 'password', 'email'],
  data () {
    return {
      msg: 'Register component'
    }
  },
  methods: {
    register () {
      cognitoSignUp(this.username, this.password, this.email)
    }
  }
}
</script>
