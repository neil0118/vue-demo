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
  props: {'username': {
    value: sessionStorage.getItem('_username')
  }},
  data () {
    return {
      msg: 'Welcome component'
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
