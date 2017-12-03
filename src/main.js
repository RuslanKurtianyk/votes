// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAnhUVK03j3ho9PyUfo71p3YLFJ4lzZPOQ",
  authDomain: "votes-io.firebaseapp.com",
  databaseURL: "https://votes-io.firebaseio.com",
  projectId: "votes-io",
  storageBucket: "votes-io.appspot.com",
  messagingSenderId: "664945492"
};

let app;
let firebaseApp;
let db;

Vue.config.productionTip = false

if (!app) {
  /* eslint-disable no-new */
  app = new Vue({
    el: '#app',
    created() {
      firebaseApp = firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user) => {
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
