<template>
    <nav class="navbar ev-appnav">
        <button class="navbar" type="button" >
          <menu-icon />
        </button>
        <button v-on:click="logout"><logout-icon /></button>  
    </nav>
</template>
<script>
import firebase from 'firebase'
import MenuIcon from 'vue-material-design-icons/menu'
import LogoutIcon from 'vue-material-design-icons/logout'

export default {
  name: 'navbar',
  components: { MenuIcon, LogoutIcon },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  $default-padding: 10px;

  nav {
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid $ocean;
    background: darken($primary-background-color, 15%);
  }
</style>