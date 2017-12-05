<template>
  <div>
    <navbar></navbar>
    <div class="page">
      <div class="container">
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
        <div class="cell">
          <vote-list-item></vote-list-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/shared/Navbar'
import VoteListItem from './VoteListItem'

export default {
  name: 'home',
  components: { Navbar, VoteListItem }
}
</script>
<style lang="scss">
  @import "../assets/styles/variables";
  @import "../assets/styles/default";

  .page {
    max-width: 100vw;

    .container {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        margin: 20px;

        .cell {
          max-width: $default-card-width;
          margin: $default-padding auto;
          align-self: center;
        }
    }
  }
</style>