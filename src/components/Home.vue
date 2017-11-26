<template>
  <div>
    <h3>{{ msg }}</h3>
    <button v-on:click="logout">Log out</button>    
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'home',
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