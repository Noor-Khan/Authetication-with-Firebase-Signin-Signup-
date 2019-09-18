<template>
  <div id="login">
    <!-- Default form login -->
    <form class="text-center border border-light p-5" action="#!">
        <p class="h4 mb-4">Sign up</p>
        <!-- Email -->
        <input type="email"  v-model="input.username" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Username or E-mail" required>

        <!-- Password -->
        <input type="password" v-model="input.password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

        <!-- Sign in button -->
        <button class="btn btn-info btn-block my-4" type="submit" @click.prevent="signup()">Sign up</button>

        <!-- Register -->
        <p>Already a member?
            <router-link to="/signin"> Sign in </router-link>
        </p>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase'
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
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.input.username, this.input.password)
      .then(
        (user) => {
            this.$toast.open({
              message: 'Congratualtions! you have successfully registered your account ' + user.user.email ,
              type: 'success',
              duration: 5000,
              position: 'top-right'
            })
            this.$emit('isLoggedIn', true)
            this.$router.push('/')
        },
        (err) => {
          this.$toast.open({
            message: 'Oops! ' + err,
            type: 'error',
            position: 'top-right',
            duration: 5000
            })
        }
      )
    } 
  }
}
</script>
<style lang="scss" scoped>
#login {
  margin-top: 10rem;
}
#login  form {
    margin: 0 auto;
    text-align: center;
    width: 30rem;
    box-shadow: 0px 0px 10px #efefef;
    padding: 30px 30px;
}

  /* #form-login {
    background:#fff;
    width: 40rem;
    text-align: center;
    margin: 0 auto;
    box-shadow: 1px 1px 1px #efefef;
    padding: 15px 30px;
  } */
  /* #login {
   display: table;
   width: 100%;
}
#form-login {
   display: table-cell;
   text-align: center;
   vertical-align: middle;
} */
</style>
