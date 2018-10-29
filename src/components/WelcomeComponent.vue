<template>
    <div class="form-group" style="text-align: -webkit-center">
      <p>Welcome user {{ username }}</p>
      <input type="button" class='btn btn-secondary' value='log out' v-on:click="logout">
    </div>
</template>

<script>
if (!sessionStorage.getItem('_username')) window.location.href = '#/'

export default {
  name: 'Welcome',
  props: {},
  data () {
    return {
      msg: 'Welcome component',
      username: sessionStorage.getItem('_username')
    }
  },
  methods: {
    logout () {
      sessionStorage.removeItem('_username')
      window.location.href = '#/'
    }
  }
}
</script>
