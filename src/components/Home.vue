<template>
  <div class="box">
    <div class="start" v-show="startshow" @click="startshow = !startshow,homeshow = !homeshow" >
      <svg class="icon animated bounce" aria-hidden="true">
          <use xlink:href="#icon-xin"></use>
      </svg>
      <p class="animated bounce">Confession Wall</p>
      
    </div>
    <div class="home" v-show="homeshow">
      <div class="topbar">
        <div class="logo">
          <svg class="icon animated fadeInDown" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
          </svg>
          <h3 class="animated fadeInDown">Confession Wall</h3>
        </div>

        <div class="nav animated fadeInDown">
          <el-button type="text" class="nav-item">文字按钮</el-button>
          <el-button type="text" class="nav-item">文字按钮</el-button>
          <el-button type="text" class="nav-item">文字按钮</el-button>
        </div>
        <el-button type="primary" class="xx animated fadeInDown">教 务 在 线 传 送 门</el-button>
      </div>
 
      <div class="main animated fadeIn">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
        </svg>
        <h1>天农，表白，墙</h1>
        <p></p>
        <el-button @click="Confessionshow = !Confessionshow" class="Confessionshow">Confession!</el-button>
      </div>

      <footer class="footer animated fadeInUp">
        <p>设计参考于-Jared Granger</p>
      </footer>
      <transition name="el-zoom-in-bottom" >
        <Confession v-show="Confessionshow"></Confession>
      </transition>
    </div>
    
  </div>
</template>

<script>
import Confession from './Confession'
export default {
  components:{Confession},
  props:['show2'],
  data: () => ({
    Confessionshow: false,
    startshow: true,
    homeshow: false
  }),
  mounted() {

  },
  methods: {
    disappear:function(){

    },
  }
}
</script>

