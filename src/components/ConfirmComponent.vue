<template>
    <div class="form-group" style="text-align: -webkit-center">
      <p>User {username} is registered.</p>
      <router-link to='/welcome'><input type="button" class="btn btn-success" value="Sign in"></router-link>
      <router-link to='/'><input type="button" class="btn btn-white" value="Back to login"></router-link>
    </div>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      msg: 'Confirm component'
    }
  }
}
</script>
