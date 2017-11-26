// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'

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
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
});

