<template>
  <div id="app">
    <button class="btn btn-default" @click.prevent="logout()">Logout</button>
    <router-view @isLoggedIn="isLoggedIn" />
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
body, html {   
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display:table;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fafffd;
    }
  }
}
</style>
