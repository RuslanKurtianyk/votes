<template>
    <button class="btn-create" v-on:click="openCreatePage">Create new vote</button>    
</template>
<script>
export default {
  name: 'button-create',
  data () {
      return {}
  },
  methods: {
    openCreatePage() {
        this.$router.push('/vote-create')
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/styles/variables";
    .btn-create {
        height: 36px;
        width: auto;
        border-radius: 3px;
        background: $bright-blue;
        color: $white;
        text-transform: uppercase;
    }
</style>