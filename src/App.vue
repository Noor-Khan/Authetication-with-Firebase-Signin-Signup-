<template>
  <div id="app">
    <router-view @logout="logout()" />
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
      logout() {
        firebase.auth().signOut()
        .then(() => {
          this.$router.push('/signin')
        })
      },
    }
}
</script>
<style lang="scss">


</style>
