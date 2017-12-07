<template>
    <nav class="navbar">
        <button class="navbar" type="button" >
          <magnet-icon />
        </button>
       <account></account>  
    </nav>
</template>
<script>
import MagnetIcon from 'vue-material-design-icons/magnet'
import Account from './Account'

export default {
  name: 'navbar',
  components: { MagnetIcon, Account },
  methods: {}
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
  }
</style>