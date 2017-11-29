<template>
  <div>
    <navbar></navbar>
  </div>
</template>
<script>
import firebase from 'firebase'
import Navbar from '@/components/shared/Navbar'

export default {
  name: 'home',
  components: { Navbar },
  data () {
    return {
      data: ''
    }
  },
  methods: { }
}
</script>