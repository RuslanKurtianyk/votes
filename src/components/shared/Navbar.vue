<template>
    <nav class="navbar ev-appnav">
        <button class="navbar" type="button" >
            <span class="navbar-toggler-icon">button</span>
        </button>
        <button v-on:click="logout">Log out</button>  
    </nav>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'navbar',
  data: {},
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>