<template>
  <div>
    <navbar></navbar>
  </div>
</template>
<script>
import firebase from 'firebase';
import Navbar from '@/components/shared/Navbar'
import Vue from 'vue';

Vue.component('navbar', Navbar);

export default {
  name: 'home',
  // conponents: { 'navbar': Navbar },
  data () {
    return {
      msg: 'Welcome ))'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>