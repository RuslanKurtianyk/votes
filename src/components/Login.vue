<template>
  <div class="container">
    <div class="login-form">
      <h3>Auth Form</h3>
      <div class="form-container">  
        <input type="email" v-model="email" placeholder="Email" autocomplete="off">
        <input type="password" v-model="password" placeholder="Password" autocomplete="off">
        <button class="btn-submit" v-on:click="signIn">Submit</button>
        <button class="btn-submit-google" v-on:click="googleSignIn">Google Auth</button>
      </div>
       <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          user => {
            console.log(user);
            this.$router.replace('home')
          },
          err => {
            console.log('Oops. ' + err.message)
          }
        );
      },
      googleSignIn: function () {
       const provider = new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider).then(
          user => {
            console.log(user);
            this.$router.replace('home')
          },
          err => {
            console.log('Oops. ' + err.message)
          }
        )
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/styles/variables";

  $default-padding: 10px;

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: $ocean;

    .login-form {
      background: darken($primary-background-color, 10%);
      border-radius: 5px;
      padding: $default-padding;
      
      .form-container {
        display: flex;
        flex-direction: column;
        input {
          width: calc(100% - $default-padding * 2);
        }
      }
    }

    input {
      padding: $default-padding;
      border: 0;
      margin: $default-padding 0;
      border-bottom: 2px solid $ocean;
      background: transparent;
    }

    button {
      background: $ocean;
      padding: $default-padding;
      margin: $default-padding 0;
      border: 5px;
      color: $light-blue;
      text-transform: uppercase;

      &.btn-submit-google {
        background: darken($ocean, 30%);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>