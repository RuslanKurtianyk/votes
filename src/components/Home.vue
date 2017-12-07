<template>
  <div>
    <navbar></navbar>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/shared/Navbar'

export default {
  name: 'home',
  components: { Navbar }
}
</script>
<style lang="scss">
  @import "../assets/styles/variables";
  @import "../assets/styles/default";
  .page {
    max-width: 100vw;
  }
</style>