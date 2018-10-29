<template>
    <div class="form-group" style="text-align: -webkit-center">
      <p>Username</p>
      <input class="form-control col-sm-3 col-centered" v-model="username" placeholder="username">
      <p>Passowrd</p>
      <input class="form-control col-sm-3 col-centered" v-model="password" placeholder="passowrd" type="password">
      <input type="button" value="Sign in" class="btn btn-success" v-on:click="login">
      <router-link to="/register"><input type="button" value="Sign up" class="btn btn-primary" >
      </router-link>
    </div>
</template>

<script>
// eslint-disable-next-line
import * as AWSCognito from 'amazon-cognito-identity-js'
import {cognitoSignIn} from './CognitoTools.js'
sessionStorage.clear()
export default {
  name: 'Login',
  props: ['username', 'password'],
  data () {
    return {
      msg: 'Login component'
    }
  },
  methods: {
    login () {
      cognitoSignIn(this.username, this.password)
    }
  }
}
</script>
