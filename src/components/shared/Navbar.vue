<template>
    <nav class="navbar">
        <button class="navbar" type="button" >
          <menu-icon />
        </button>
       <account></account>  
    </nav>
</template>
<script>
import MenuIcon from 'vue-material-design-icons/menu'
import Account from './Account'

export default {
  name: 'navbar',
  components: { MenuIcon, Account },
  methods: {}
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  nav {
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid $ocean;
    background: darken($primary-background-color, 15%);
  }
</style>