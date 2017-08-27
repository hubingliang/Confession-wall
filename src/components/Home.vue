<template>
  <div class="box">
    <div class="start" v-show="startshow" @click="startshow = startshow,homeshow = homeshow" id="start">
      <div class="icon-box">
        <svg class="icon animated bounce" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
        </svg>
        <p class="animated bounce">Confession Wall</p>
      </div>
      <div class="main-button">
        <el-button class="Confessionshow animated bounce" @click="formshow = !formshow">登 录</el-button>
        <el-button class="Confessionshow animated bounce" @click="formshow = !formshow,move()">注 册</el-button>
      </div>

      <transition name="el-fade-in">
        <div class="form" v-show="formshow">
          <div class="register">
            <h1>注册</h1>
            <p>在墙上分享你的</p>
            <form class="register-form" autocomplete="off">
                  <input type="text"placeholder="用户名"id="inputUsername">
                  <input type="password"placeholder="密码"id="inputPassword">
                  <input type="text"placeholder="邮箱"id="inputEmail">
                  <el-button class="el-register"v-on:click="register()" type="primary" >注册</el-button>
            </form>
          </div>
          <div class="login">
              <h1>登录</h1>
              <p>在墙上分享你的</p>
              <form class="login-form" autocomplete="off">
                  <input type="text"placeholder="Username"id="signinEmail">
                  <input type="password"placeholder="password"id="signinPassword">
                  <el-button class="el-signin" v-on:click="login()" type="primary">sign in</el-button>
              </form>
          </div>
          <div class="slider" id="slider">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xin"></use>
            </svg>
            <h1>W a l l</h1>
            <p>Just say ! Just now !</p>
          </div>
        </div>

      </transition>
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
        <div class="greet">
          <p>你好 </p><p id="username"></p>
        </div>
      </div>
      
      <footer class="footer animated fadeInUp">
        <p>设计参考于-Jared Granger</p>
      </footer>

      <transition name="el-zoom-in-bottom" >
        <Confession v-show="Confessionshow" v-bind:user="user"></Confession>
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
  data(){
    return{
      Confessionshow: false,
      Lostshow: false,
      Noticeshow: false,
      startshow: true,
      homeshow: false,
      Windowshow: false,
      formshow: false,


      user:{
        username:'',
      },

      slidermove: 0,
    }
  },
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
        let x = 400
        setInterval(function(){
          if(x>=0){
              $('#slider').css('transform',`translateX(${x}px)`)
              x = x - 10
          }
        },15)
      }, (function (error) {
          alert(JSON.stringify(error));
      }));
    },
    login:function(){
      var username = $('#inputUsername').val();
      var password = $('#inputPassword').val();

      // LeanCloud - 登录
      // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
      AV.User.logIn(username, password).then( (loginedUser)=> {
        $('#start').css('display','none')
        $('#home').css('display','flex')
        $('#username').html(loginedUser.attributes.username)
        console.log(loginedUser.attributes.username)
        this.user.username = loginedUser.attributes.username
      }, function (error) {
        alert(JSON.stringify(error));
      })

      



    },
    move:function(){
      $('#slider').css('transform',`translateX(400px)`)
    }
  }
}
</script>

