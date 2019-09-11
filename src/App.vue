<template>
  <div id="app">
    <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>
<script>
export default {
   data() {
      return {
          authenticated: false,
          mockAccount: {
              username: "noor",
              password: "passpass"
          }
      }
    },
    mounted() {
        if(!this.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
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
