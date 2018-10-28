<template>
    <div class="form-group" style="text-align: -webkit-center">
      <p>Welcome user {username}</p>
      <router-link to="/"><input type="button" class='btn btn-secondary' value='log out'>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome component',
      username: 'default'
    }
  }
}
</script>
