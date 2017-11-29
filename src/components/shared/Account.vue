<template>
    <div class="account">
        <div class="usur-info">
            <img src="" />
            <span>{{user.additionalUserInfo.profile.name}}</span>
        </div>
        <button v-on:click="logout">
            <logout-icon />
        </button>  
    </div>
</template>
<script>
import firebase from 'firebase'
import LogoutIcon from 'vue-material-design-icons/logout'

export default {
  name: 'account',
  props: {
      user: {
        type: Object,
        validator: function(value) {
            console.log(value);
            return typeof value === 'object'
        }
      }
    },
  components: { LogoutIcon },
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

  .account {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: auto;
  }
</style>