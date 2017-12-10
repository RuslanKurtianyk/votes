<template>
    <nav class="navbar">
        <button class="navbar" type="button" v-on:click="goToHomePage">
          <magnet-icon />
        </button>
        <div class="btn-create-container">
          <button-create></button-create>
        </div>       
       <account></account>  
    </nav>
</template>
<script>
import MagnetIcon from 'vue-material-design-icons/magnet'
import Account from './Account'
import ButtonCreate from './ButtonCreate'

export default {
  name: 'navbar',
  components: { MagnetIcon, Account, ButtonCreate },
  methods: {
    goToHomePage() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  nav {
    width: auto;
    height: 60px;
    padding: 0 $default-padding;
    display: flex;
    align-items: center;
    border-bottom: 2px solid $dark-grey;
    background: darken($primary-background-color, 15%);

    .btn-create-container {
      margin-left: 15px;
    }
  }
</style>