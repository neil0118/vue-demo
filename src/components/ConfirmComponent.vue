<template>
    <div class="form-group" style="text-align: -webkit-center">
      <p>User {{ username }} is registered.</p>
      <router-link to='/'><input type="button" class="btn btn-success" value="Sign in"></router-link>
    </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {},
  data () {
    return {
      msg: 'Confirm component',
      username: sessionStorage.getItem('_username')
    }
  }
}
</script>
