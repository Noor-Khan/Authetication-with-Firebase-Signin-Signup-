<template>
  <div id="login">
    <!-- Default form login -->
    <el-form>
        <p class="h4 mb-4">Sign up</p>
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

        <!-- Register -->
        <p>Already a member?
            <router-link to="/signin"> <el-button type="text" size="medium"> Sign in </el-button></router-link>
        </p>
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
