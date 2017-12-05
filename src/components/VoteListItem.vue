<template>
  <div class="vote-list-item-container">
    <div class="wrapper">
        <div class="header">test</div>
        <div class="body">test</div>
        <div class="footer">
        test
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vote-list-item',
    data () {
      return {
        name: '',
        status: '',
        participantCount: 0,
        createdDate: new Date(),
        createdBy: "Test User",
        time: new Date()
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    }
  }
</script>
<style lang="scss">
@import "../assets/styles/default";
.vote-list-item-container {
    min-width:250px;
    min-height: 300px;
    width: 250px;
    height: 300px;
    background: $light-blue;
    border: 2px solid $dark-grey;
    border-radius: 5px;
}
</style>