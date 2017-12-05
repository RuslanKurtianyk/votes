<template>
  <div class="auth-container">
    <div class="auth-form">
      <h3>Auth Form</h3>
      <div class="form-container">  
        <input class="form-input" type="email" v-model="email" placeholder="Email" autocomplete="off">
        <input class="form-input" type="password" v-model="password" placeholder="Password" autocomplete="off">
        <button class="form-button btn-submit" v-on:click="signIn">Submit</button>
        <button class="form-button btn-submit-google" v-on:click="googleSignIn">Google Auth</button>
      </div>
       <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/home')
        }
      }
    },
    methods: {
      signIn () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      googleSignIn() {
        this.$store.dispatch('signUserInGoogle')
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/styles/default";
</style>