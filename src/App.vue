<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  data(){
    return{
    }
  },
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  #app{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
