<template>
  <div id="signup">
    <!-- Default form login -->
    <el-form>
      <div class="form-title">
        <h2 class="h4 mb-4">Sign up</h2>
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

      <!-- Password -->
      <el-form-item >
        <el-input
          placeholder="Password"
          type="password"
          v-model="input.password" required
          size="medium"
          clearable>
        </el-input>
      </el-form-item>
      <!-- Sign in button -->
      <el-form-item>
        <el-button 
          style="width:100%"
          type="primary" 
          size="medium" 
          @click.prevent="signup()"
          :loading="isLoading"
          native-type="submit"
        > Sign up </el-button>
      </el-form-item>
      <el-form-item>
        <div class="accounts">
          <el-col>
            <el-button size="medium" class="google" @click="signupWithGoogle()">
              <img src="../assets/icons/google.png" alt="">
              <p>Continue with Google</p>
            </el-button>
          </el-col>
          <el-col>
            <el-button size="medium" class="facebook" @click="signupWithGoogle()">
              <img src="../assets/icons/fb.png" alt="">
              <p>Continue with Facebook</p>
            </el-button>
          </el-col>
        </div>
      </el-form-item>

      <!-- Register -->
      <el-form-item>
        <p>Already a member?
            <router-link to="/signin"> <el-button type="text" size="medium"> Sign in </el-button></router-link>
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
      isLoading: false,
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    signup() {
      this.isLoading = true
      firebase.auth().createUserWithEmailAndPassword(this.input.username, this.input.password)
      .then(
        (user) => {
          this.$notify({
            title: 'Success',
            message: 'Congratualtions! you have successfully registered your account ',
            type: 'success'
          });
            this.$emit('isLoggedIn', true)
            this.$router.push('/')
            this.isLoading = false
        },
        (err) => {
          this.$notify({
            title: 'Error',
            message: 'Oops! ' + err,
            type: 'error'
          });        
          this.isLoading = false
        }
      )
    },
    signupWithGoogle() {
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
    signupWithFacebook() {
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
<style lang="scss" scoped>
#signup  {
  margin-top: 8rem;
  form {
    margin: 0 auto;
    text-align: center;
    width: 30rem;
    box-shadow: 0px 0px 10px #efefef;
    padding: 30px 30px;
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
