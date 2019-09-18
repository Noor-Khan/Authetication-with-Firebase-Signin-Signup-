<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
   data() {
      return {
        isLoggedIn: false,
        currentUser: false
      }
    },
    methods: {
    }
}
</script>
<style lang="scss">


</style>
