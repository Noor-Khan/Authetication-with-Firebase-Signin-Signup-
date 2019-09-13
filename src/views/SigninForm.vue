<template>
  <div id="signin">
    <!-- Default form login -->
    <form class="text-center border border-light p-5" action="#!">
        <p class="h4 mb-4">Sign in</p>
        <!-- Email -->
        <input type="email"  v-model="input.username" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Username or E-mail" required>

        <!-- Password -->
        <input type="password" v-model="input.password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

        <div class="d-flex justify-content-around">
            <div>
                <!-- Remember me -->
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
            </div>
            <div>
                <!-- Forgot password -->
                <a href="">Forgot password?</a>
            </div>
        </div>

        <!-- Sign in button -->
        <button class="btn btn-info btn-block my-4" type="submit" @click.prevent="login()">Sign in</button>

        <!-- Register -->
        <p>Not a member?
            <router-link to="/signup"> Register </router-link>
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
    login() {
      firebase.auth().signInWithEmailAndPassword(this.input.username, this.input.password)
      .then(
        (user) => {
          this.$toast.open({
            message: 'Congratualtions! you have successfully login your account ' + user.user.email,
            type: 'success',
            duration: 5000,
            position: 'top-right'
            })
          this.$router.push('/');
        },
        (err) => {
          this.$toast.open({
            message: 'Oops! ' + err,
            type: 'error',
            duration: 5000,
            position: 'top-right'
          })
        }
      )
      // if(this.input.username != "" && this.input.password != "") {
      //     if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
      //         this.$emit("authenticated", true);
      //         this.$router.replace({ name: "dashboard" });
      //     } else {
      //         console.log("The username and / or password is incorrect");
      //         alert("Username or Password is icorrect")
      //     }
      // } else {
      //   console.log("A username and password must be present");
      //   alert("Username or Password is icorrect")
      // }
    } 
  }
}
</script>
<style lang="scss">
#signin {
  margin-top: 10rem;
  form {
    margin: 0 auto;
    text-align: center;
    width: 30rem;
    box-shadow: 0px 0px 10px #efefef;
    padding: 30px 30px; 
  }
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
