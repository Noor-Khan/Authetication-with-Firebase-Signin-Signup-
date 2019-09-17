import firebase from 'firebase' ;
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import './views/firebaseInit'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-toast-notification/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMaterial)
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



