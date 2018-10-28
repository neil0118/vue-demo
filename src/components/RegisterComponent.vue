<template>
    <div class="form-group" style="text-align: -webkit-center">
      <label for="username">Username</label>
      <input class="form-control col-sm-3 col-centered" v-model="username" placeholder="username">
      <label for="username">Password</label>
      <input class="form-control col-sm-3 col-centered" v-model="passowrd" placeholder="passowrd" type="password">
      <label for="username">Comfirm Password</label>
      <input class="form-control col-sm-3 col-centered" v-model="email" placeholder="email">
      <router-link to='/confirm'><input type="button" value="Sign up" class="btn btn-success">
      </router-link>
      <router-link to="/"><input type="button" value="Back" class="btn btn-primary">
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Email',
  data () {
    return {
      msg: 'Email component'
    }
  }
}
</script>
