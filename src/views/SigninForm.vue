<template>
  <div id="signin">
    <!-- Default form login -->
    <el-form>
      <div class="form-title">
        <h2> Sign in </h2>

      </div>
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
        <el-col :span="12" align="left">
          <el-checkbox>Remember Password</el-checkbox>
        </el-col>
        <el-col :span="12" align="right">
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
      <el-form-item>
        <div class="accounts">
          <el-col>
            <el-button size="medium" class="google" @click="signinWithGoogle()">
              <img src="../assets/icons/google.png" alt="">
              <p>Continue with Google</p>
            </el-button>
          </el-col>
          <el-col>
            <el-button size="medium" class="facebook" @click="signinWithFacebook()">
              <img src="../assets/icons/fb.png" alt="">
              <p>Continue with Facebook</p>
            </el-button>
          </el-col>
        </div>
      </el-form-item>
      <!-- Register -->
      <el-form-item>
        <p> Not a member?
            <router-link to="/signup"> <el-button type="text" size="medium"> Register </el-button> </router-link>
        </p>
      </el-form-item>
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
            title: 'Login Failed',
            message: 'Oops! ' + err,
            type: 'error'
          });
          this.isLoading = false;
        }
      )
    },
    forget() {
      firebase.auth().sendPasswordResetEmail(this.input.username)
      .then(
        (response) => {
          this.$notify({
            title: 'Success',
            message: 'Your request for reset password has been sent to you email ',
            type: 'success'
          });
        },
        (err) =>{
          this.$notify({
            title: 'Login Failed',
            message: err + ' Please Input your valid email ',
            type: 'error'
          });      
        }
      )
    },
    signinWithGoogle() {
      let VueParent = this
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(
        (result) => {
          VueParent.$router.push('/')
          this.$notify({
            title: 'Success',
            message: 'You are now logged in by this email: ' + result.user.email,
            type: 'success'
          });
        },
        (err) => {
          console.log(err)
        }
      )
    },
    signinWithFacebook() {
      let VueParent = this
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(
        (result) => {
          VueParent.$router.push('/')
          this.$notify({
            title: 'Success',
            message: 'You are now logged in by this name: ' + result.additionalUserInfo.profile.name,
            type: 'success'
          });
          console.log(result)
      },
      (err) => {
        console.log(err.message)
      })
    }
  }
}
</script>
<style lang="scss">
#signin {
  margin-top: 7rem;
  form {
    margin: 0 auto;
    text-align: center;
    width: 30rem;
    box-shadow: 0px 0px 10px #efefef;
    padding: 30px 30px; 
    border-radius: 5px;
  }
  .form-title {
    margin: 20px 0;
  }
  .accounts button img {
    width: 32px;
  }
  .accounts button {
    width: 100%;
    margin: 5px 0;
  }
  .accounts button img, p {
    display: inline;
    padding: 5px;
  }
}
</style>
