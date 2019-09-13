import firebase from 'firebase' ;
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import './views/firebaseInit'
import 'vue-toast-notification/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueToast);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
let app;

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



