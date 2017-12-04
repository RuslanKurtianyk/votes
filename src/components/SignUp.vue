<template>
<div class="auth-container">
  <div class="auth-form">
    <h3>Let's create a new account!</h3>
     <div class="form-container">
      <input class="form-input" type="text" v-model="email" placeholder="Email">
      <input class="form-input" type="password" v-model="password" placeholder="Password">
      <input class="form-input" type="password" v-model="confirmPassword" placeholder="Confirm Password">
      <button class="form-button" :disabled="disableSubmit" v-on:click="signUp">Sign Up</button>
    </div>
    <p>or go back to <router-link to="/login">login</router-link>.</p>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

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
      disableSubmit () {
        return this.password === '' || this.password !== this.confirmPassword
      }
    },
    methods: {
      signUp() {
          this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
      },
      passwordMatchValidate() {

      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/styles/default";
</style>