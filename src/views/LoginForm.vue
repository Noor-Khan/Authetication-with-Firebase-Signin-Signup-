<template>
  <div>
    <form action="" class="form-inline text-center">
      <input type="text" v-model="input.username" placeholder="Email" class="form-control">
      <input type="password" v-model="input.password" placeholder="Password"  class="form-control">
      <button @click.prevent="login()" class="btn btn-info">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if(this.input.username != "" && this.input.password != "") {
          if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "dashboard" });
          } else {
              console.log("The username and / or password is incorrect");
          }
      } else {
          console.log("A username and password must be present");
      }
    } 
  }
}
</script>
<style scoped>
/*  */
</style>
