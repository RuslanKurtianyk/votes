<template>
<div class="auth-container">
  <div class="auth-form">
    <h3>Let's create a new account!</h3>
     <div class="form-container">
      <input class="form-input"type="text" v-model="email" placeholder="Email">
      <input class="form-input" type="password" v-model="password" placeholder="Password">
      <input class="form-input" type="password" v-model="confirmPassword" placeholder="Confirm Password">
      <button class="form-button" :disabled="passwordMatch" v-on:click="signUp">Sign Up</button>
    </div>
    <p>or go back to <router-link to="/login">login</router-link>.</p>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      passwordMatch() {
        return this.password == this.confirmPassword;
      }
    },
    methods: {
      signUp() {
          this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/styles/default";
</style>