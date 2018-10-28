<template>
    <div class="form-group" style="text-align: -webkit-center">
      <p>Username</p>
      <input class="form-control col-sm-3 col-centered" v-model="username" placeholder="username">
      <p>Passowrd</p>
      <input class="form-control col-sm-3 col-centered" v-model="passowrd" placeholder="passowrd" type="password">
      <router-link to='/welcome'><input type="button" value="Sign in" class="btn btn-success" v-on:click="login">
      </router-link>
      <router-link to="/register"><input type="button" value="Sign up" class="btn btn-primary" >
      </router-link>
    </div>
</template>

<script>
// eslint-disable-next-line
import * as AWSCognito from 'amazon-cognito-identity-js'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login component'
    }
  },
  methods: {
    login () {
      console.log('1111')
    }
  }
}
</script>
