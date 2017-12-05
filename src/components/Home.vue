<template>
  <div>
    <navbar></navbar>
    <div class="container">
    <vote-list-item></vote-list-item>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/shared/Navbar'
import VoteListItem from './VoteListItem'

export default {
  name: 'home',
  components: { Navbar, VoteListItem },
  methods: { }
}
</script>
<style lang="scss">
  @simport "../assets/styles/default";
  .container {
      padding: 20px;
      margin: 20px;
  }
</style>