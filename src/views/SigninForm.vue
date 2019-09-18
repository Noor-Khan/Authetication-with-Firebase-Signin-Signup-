<template>
  <div id="signin">
    <!-- Default form login -->
    <el-form class="text-center border border-light p-5" action="#!">
        <p class="h4 mb-4">Sign in</p>
        <!-- Email -->
        <el-form-item >
          <el-input
            placeholder="Email"
            v-model="input.username" required
            size="medium"
            clearable>
          </el-input>
        </el-form-item>
        <!-- <input type="email" > -->

        <!-- Password -->
        <el-form-item>
          <el-input
            placeholder="Password"
            type="password"
            size="medium"
            v-model="input.password" required
            clearable>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-col :span="12">
            <el-checkbox>Remember Password</el-checkbox>
          </el-col>
          <el-col :span="12">
            <el-button type="text" size="medium" @click.prevent="forget()">Forgot password?</el-button>
          </el-col>
        </el-form-item>
        <!-- Sign in button -->
        <el-form-item>
          <el-button 
            style="width:100%"
            type="primary" 
            size="medium" 
            @click.prevent="login()"
            :loading="isLoading"
            native-type="submit"
          > Sign in</el-button>
        </el-form-item>

        <!-- Register -->
        <p> Not a member?
            <router-link to="/signup"> <el-button type="text" size="medium"> Register </el-button></router-link>
        </p>
    </el-form>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      isLoading:false,
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      this.isLoading = true;
      firebase.auth().signInWithEmailAndPassword(this.input.username, this.input.password)
      .then(
        (user) => {
          this.$notify({
            title: 'Success',
            message: 'You are now logged in!',
            type: 'success'
          });
          this.isLoading = false;
          this.$router.push('/');
        },
        (err) => {
          this.$notify({
            title: 'Error',
            message: 'Oops! ' + err,
            type: 'error'
          });
          this.isLoading = false;
        }
      )
    },
    forget() {
      firebase.auth().sendPasswordResetEmail(this.input.username)
      .then((response) => {
        this.$notify({
          title: 'Success',
          message: 'Your request for reset password has been sent to you email ',
          type: 'success'
        });
      },
      (err) =>{
        this.$notify({
          title: 'Error',
          message: err + ' Please Input your valid email ',
          type: 'error'
        });      }
      )
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
