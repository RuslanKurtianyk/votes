<template>
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
</template>

<script>
import VoteListItem from './VoteListItem'
  export default {
    name: 'vote-list',
    components: { VoteListItem }
  }
</script>
<style lang="scss">
@import "../assets/styles/default";
.container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    margin: $default-padding;
    
    .cell {
        max-width: $default-card-width;
        margin: $default-padding auto;
        align-self: center;
    }
}
</style>