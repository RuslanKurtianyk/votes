<template>
    <div class="account">
        <div class="user-info">
            <img :src="photoUrl" />
            <span>{{user.name}}</span>
        </div>
        <button v-on:click="logout">
            <logout-icon />
        </button>  
    </div>
</template>
<script>
import LogoutIcon from 'vue-material-design-icons/logout'

export default {
  name: 'account',
  components: { LogoutIcon },
  methods: {
    logout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    photoUrl() {
      return (this.$store.getters.user && this.$store.getters.user.photoUrl) ? 
        this.$store.getters.user.photoUrl :
        ''
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/styles/variables";

  .account {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: auto;
    color: $black;

    .user-info {
      display: flex;
      align-items: center;
      
      img {
        max-height: 50px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
</style>