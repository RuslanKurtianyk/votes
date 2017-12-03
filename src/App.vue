<template>
  <div id="app">
    <v-container>
      <router-view/>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
  @import "./assets/styles/default";
  @import "./assets/styles/variables";
  
  body {
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 14px;
    background: $primary-background-color;
  }
</style>