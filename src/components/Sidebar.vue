<template>
    <div>
        <el-button class="toggleBtn" v-if="isCollapse" @click="collapse(isCollapse)" icon="el-icon-arrow-right" circle></el-button>
        <el-button class="toggleBtn2" v-else-if="!isCollapse" @click="collapse(isCollapse)" icon="el-icon-arrow-left" circle></el-button>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
            <el-menu-item index="1">
                <i class="el-icon-user"></i>
                <span slot="title">User Profile</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-folder"></i>
                <span slot="title">Documents</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-bell"></i>
                <span slot="title">Notifications</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-unlock"></i>
                <span slot="title">Privicy</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">Settings</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-bank-card"></i>
                <span slot="title">Payment Details</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-coin"></i>
                <span slot="title">Storage</span>
            </el-menu-item>
            <el-menu-item index="8" @click="logout()">
                <i class="el-icon-switch-button"></i>
                <span slot="title">Logout</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import firebase from 'firebase'
  export default {
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
          console.log('hello')
        firebase.auth().signOut()
            .then(() => {
                this.$router.push('/signin')
            })
      },
      collapse(isCollapse) {
        if (isCollapse) {
          this.isCollapse = false
        } else {
          this.isCollapse = true;
        }
      }
    }
  }
</script>
<style lang="scss">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .toggleBtn {
        position: absolute;
        z-index: 1;
        left: 47px;
        top: 100px;
        &:focus{
            outline: none;
        }
    }
    .toggleBtn2 {
        position: absolute;
        z-index: 1;
        left: 183px;
        top: 100px;
        &:focus{
            outline: none;
        }
    }
    .el-menu-item {
        i {
            font-size: 24px !important;
        }
        span {
            margin-left: 10px;
        }
    }
</style>



