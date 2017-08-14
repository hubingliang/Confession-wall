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
  created: function(){
      this.AV()
  },
  name: 'app',
  components: {
    Home
  },
  methods: {
    AV:function(){
      var APP_ID = 'OoX8WgmB6rTjRX9Pg40MBscc-gzGzoHsz';
      var APP_KEY = 'Xxmm6i1SEsVIEDLt4xTKOiXW';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
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
