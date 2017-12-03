// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'
import firebaseConfig from './config/firebase'

let app;
let firebaseApp;
let db;

Vue.config.productionTip = false

if (!app) {
  /* eslint-disable no-new */
  app = new Vue({
    el: '#app',
    created() {
      firebaseApp = firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.dispatch('autoSignIn', user)
        }
      })
    },
    router,
    store,
    template: '<App/>',
    components: {
      App
    }
  })
}
