<template>
  <div class="box">
    <div class="start" v-show="startshow" @click="startshow = !startshow,homeshow = !homeshow" >
      <svg class="icon animated bounce" aria-hidden="true">
          <use xlink:href="#icon-xin"></use>
      </svg>
      <p class="animated bounce">Confession Wall</p>
      
    </div>
    <div class="home" v-show="homeshow" id="home">
      <div class="topbar">
        <div class="logo">
          <svg id="icon" class="icon animated fadeInDown" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
          </svg>
          <h3 class="animated fadeInDown">Confession Wall</h3>
        </div>

        <div class="nav animated fadeInDown">
          <el-button type="text" class="nav-item" v-on:click="Confession()" @click="Confessionshow = true">表 白 墙</el-button>
          <el-button type="text" class="nav-item" v-on:click="Lost()" @click="Lostshow = !Lostshow">失 物 招 领</el-button>
          <el-button type="text" class="nav-item" v-on:click="Notice()" @click="Noticeshow = true">各 类 通 知</el-button>
        </div>
        <div class="link-box">
          <a href="http://211.68.250.72/JWWEB/" target="_blank">
            <button id="link" class="xx animated fadeInDown">教 务 在 线 传 送 门</button> 
          </a>
        </div>
      </div>
 
      <div class="main animated fadeIn">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
        </svg>
        <h1>天农，表白，墙</h1>
        <p></p>
        <el-button @click="Confessionshow = !Confessionshow" class="Confessionshow" v-on:click="Confession()">Confession!</el-button>
      </div>
      
      <footer class="footer animated fadeInUp">
        <p>设计参考于-Jared Granger</p>
      </footer>
      <transition name="el-zoom-in-bottom" >
        <Confession v-show="Confessionshow"></Confession>
      </transition>
      <transition name="el-zoom-in-bottom" >
        <Lost v-show="Lostshow"></Lost>
      </transition>
      <transition name="el-zoom-in-bottom" >
        <Lost v-show="Noticeshow"></Lost>
      </transition>
      
      <div class="nav-icon" id="nav-icon">
        <svg class="icon animated fadeInRight" aria-hidden="true" v-on:click="Confession()" @click="Confessionshow = true,Lostshow = false, Noticeshow = false">
            <use xlink:href="#icon-xin1"></use>
        </svg>
        <svg class="icon animated fadeInRight" aria-hidden="true" v-on:click="Lost()" @click="Confessionshow = true,Lostshow = true">
            <use xlink:href="#icon-wenhao"></use>
        </svg>
        <svg class="icon animated fadeInRight" aria-hidden="true" v-on:click="Notice()" @click="Noticeshow = true">
            <use xlink:href="#icon-tongzhi"></use>
        </svg>
      </div>
      <div class="back-button animated fadeInLeft">
        <button type="text" class="back" id="back" v-on:click="back()" @click="Confessionshow = false,Lostshow = false, Noticeshow = false">
          <p>回</p>
          <p>到</p>
          <p>首</p>
          <p>页</p>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import Confession from './Confession'
import Lost from './Lost'
import Notice from './Notice'

export default {
  components:{Confession,Lost,Notice},
  data: () => ({
    Confessionshow: false,
    Lostshow: false,
    Noticeshow: false,
    startshow: true,
    homeshow: false,
    Windowshow: false,
  }),
  mounted() {

  },
  methods: {
    Confession:function(){
      $('#home').css('background','rgb(0, 50, 203)')
      $('#icon').css('background','rgb(0, 50, 203)')
      $('#link').css('color','rgb(0, 50, 203)').css('border','1px solid rgb(0, 50, 203)')
      $('#nav-icon').children().css('fill','rgb(0, 50, 203)').css('border','1px solid rgb(0, 50, 203)')
      $('#back').css('color','rgb(0, 50, 203)')
    },
    back:function(){
      $('#home').css('background','rgb(0, 50, 203)')
      $('#icon').css('background','rgb(0, 50, 203)')
      $('#link').css('color','white').css('border','1px solid white')
      $('#nav-icon').children().css('fill','white').css('border','1px solid white')
      $('#back').css('color','white')
    },
    Lost:function(){
      $('#home').css('background','rgb(244, 49, 49)')
      $('#icon').css('background','rgb(244, 49, 49)')
      $('#link').css('color','rgb(244, 49, 49)').css('border','1px solid rgb(244, 49, 49)')
      $('#nav-icon').children().css('fill','rgb(244, 49, 49)').css('border','1px solid rgb(244, 49, 49)')
      $('#back').css('color','rgb(244, 49, 49)')
    },
    Notice:function(){
      $('#home').css('background','rgb(123, 57, 163)')
      $('#icon').css('background','rgb(123, 57, 163)')
      $('#link').css('color','rgb(123, 57, 163)').css('border','1px solid rgb(123, 57, 163)')
      $('#nav-icon').children().css('fill','rgb(123, 57, 163)').css('border','1px solid rgb(123, 57, 163)')
      $('#back').css('color','rgb(123, 57, 163)')
    },
    register:function(){
      var username = $('#inputUsername').val();
      var password = $('#inputPassword').val();
      var email = $('inputEmail').val();

      // LeanCloud - 注册
      // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.setEmail(email);
      user.signUp().then(function (loginedUser) {
        // 注册成功，跳转到商品 list 页面
      }, (function (error) {
          alert(JSON.stringify(error));
      }));
    },
    login:function(){
      var username = $('#inputUsername').val();
      var password = $('#inputPassword').val();

      // LeanCloud - 登录
      // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
      AV.User.logIn(username, password).then(function (loginedUser) {
        // 登录成功，跳转到商品 list 页面
      }, function (error) {
        alert(JSON.stringify(error));
      });
    }
  }
}
</script>

