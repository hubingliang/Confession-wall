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
            <el-button class="registerClose" type="text" @click="formshow = false"><i class="el-icon-close"></i></el-button>
            <h1>注册</h1>
            <p>在墙上闲扯</p>
            <form class="register-form" autocomplete="off">
                  <input type="text"placeholder="用户名"id="inputUsername">
                  <input type="password"placeholder="密码"id="inputPassword">
                  <input type="text"placeholder="邮箱"id="inputEmail">
                  <el-button class="el-register" v-on:click="register()" type="primary" >注册</el-button>
            </form>
          </div>
          <div class="login">
            <el-button class="loginClose" type="text" @click="formshow = false"><i class="el-icon-close"></i></el-button>
              <h1>登录</h1>
              <p>在墙上分享你的</p>
              <form class="login-form" autocomplete="off">
                  <input type="text"placeholder="Username"id="signinUsername">
                  <input type="password"placeholder="password"id="signinPassword">
                  <el-button class="el-signin" v-on:click="login()" type="primary">登 录</el-button>
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

    <div class="wrapper animated fadeInDown" id="userInformation" v-show="wrappershow">
        <div class="userForm">
          <div class="logo">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xin"></use>
            </svg>
            <div>
              <h1>天农，表白，墙</h1>
              <p>C o n f e s s i o n - W a l l</p>
            </div>
          </div>
          <form class="user-form">
            <svg class="icon-loading" aria-hidden="true" v-show="loadingshow">
                <use xlink:href="#icon-loading"></use>
            </svg>
            <input class="upImage" type="file" id="userImage"/>
            <img class="userImage" src="" v-show="userImageshow" />
            <div class="imageBox" v-show="imageBoxshow">
              <p>上传你的头像</p>
              <svg class="icon-updata" aria-hidden="true">
                <use xlink:href="#icon-updata"></use>
              </svg>
            </div>
            <div class="inputBox">
              <div class="username">{{this.user.username}}</div>
              <div class="gender">
                <el-radio class="radio" v-model="user.gender" label="man">男</el-radio>
                <el-radio class="radio" v-model="user.gender" label="woman">女</el-radio>
              </div>
              <el-input placeholder="一句话介绍" class="usersign" v-model="user.userSign"></el-input>
              <div class="real">
                <el-input placeholder="专业" class="major" v-model="user.major"></el-input>
                <el-input placeholder="姓名" class="realName" v-model="user.realName"></el-input>
              </div>
              <el-input placeholder="联系方式" v-model="user.call" class="call">
                <el-select v-model="user.callWhat" slot="prepend" placeholder="请选择" class="callWhat">
                  <el-option label="QQ" value="1"></el-option>
                  <el-option label="微信" value="2"></el-option>
                  <el-option label="电话" value="3"></el-option>
                </el-select>
              </el-input>

            </div>

            <el-button type="primary" class="submit" @click="save()">确认修改</el-button>
          </form>
        </div>
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
            <button id="link" class="xx animated fadeInDown" @click="logOut()">登 出</button> 
        </div>

      </div>

      

      <div class="main animated fadeIn">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
        </svg>
        <h1>天农，表白，墙</h1>
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
      wrappershow: false,
      userCardshow: false,
      loadingshow: false,
      userImageshow: false,
      imageBoxshow: true,

      user:{
        username:'',
        gender:'',
        userSign:'',
        realName:'',
        userImage:'',
        callWhat:'',
        call:''
      },

      slidermove: 0,
    }
  },
  mounted() {
    this.showImage()
    this.currentUser()
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
      user.signUp().then( (loginedUser)=> {
          this.user.username = username
          $('#userInformation').css('display','flex')
      }, (function (error) {
          alert(JSON.stringify(error));
      }));
    },
    login:function(){
      var username = $('#signinUsername').val();
      var password = $('#signinPassword').val();

      // LeanCloud - 登录
      // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
      AV.User.logIn(username, password).then( (loginedUser)=> {
        $('#username').html(loginedUser.attributes.username)
        this.user.username = loginedUser.attributes.username
        $('#home').css('display','flex')
        $('#start').css('display','none')
      }, function (error) {
        alert(JSON.stringify(error));
      })
    },
    userImage:function(){
      var fileUploadControl = $('#userImage')[0];
      if (fileUploadControl.files.length > 0) {
        var localFile = fileUploadControl.files[0];
        var name = 'avatar.jpg';

        var file = new AV.File(name, localFile);
        file.save().then((file)=> {
          // 文件保存成功
          this.user.userImage = file.url()
          let url = file.url()
          $('.userImage').attr('src',`${url}`)
          this.loadingshow = false
          this.userImageshow = true
          this.imageBoxshow = false
        }, function(error) {
          // 异常处理
          console.error(error);
        });
      }
    },
    move:function(){
      $('#slider').css('transform',`translateX(400px)`)
    },
    showImage:function(){
      $('#userImage').change(()=> {
        this.loadingshow = true
        this.userImage()
      });
    },
    save:function(){
      var username = $('#inputUsername').val();
      var password = $('#inputPassword').val();
      if(this.user.userImage === ''|| this.user.gender === '' || this.user.userSign === '' || this.user.major === ''|| this.user.realName === '' || this.user.call === '' || this.user.callWhat === ''){
        alert('未填写完全')
        return
      }  
      let userImage = this.user.userImage
      let gender = this.user.gender
      let userSign = this.user.userSign
      let major = this.user.major
      let realName = this.user.realName
      let call = this.user.call
      let callWhat = this.user.callWhat
      
      AV.User.logIn(`${username}`, `${password}`).then(function (loginedUser) {
      loginedUser.set('username',username);
      loginedUser.set('gender',gender);
      loginedUser.set('userSign',userSign);
      loginedUser.set('major',major);
      loginedUser.set('realName',realName);
      loginedUser.set('call',call);
      loginedUser.set('userImage',userImage);
      loginedUser.set('callWhat',callWhat);
      loginedUser.save();
      $('#userInformation').css('display','none')
      $('#home').css('display','flex')
      $('#start').css('display','none')
      }, function (error) {
        // 异常处理
        console.error(error);
      });

    },
    currentUser:function(){
      var currentUser = AV.User.current();
      if (currentUser) {
        $('#start').css('display','none')
        $('#home').css('display','flex')
        $('#username').html(currentUser.attributes.username)
        this.user.username = currentUser.attributes.username
        this.user.call = currentUser.attributes.call
        this.user.gender = currentUser.attributes.gender
        this.user.major = currentUser.attributes.major
        this.user.realName = currentUser.attributes.realName
        this.user.userImage = currentUser.attributes.userImage
        this.user.userSign = currentUser.attributes.userSign
        
      }
      else {
        //currentUser 为空时，可打开用户注册界面…
      }
    },
    logOut:function(){
      AV.User.logOut();
      // 现在的 currentUser 是 null 了
      var currentUser = AV.User.current();
      history.go(0) 
    },
    cardClose:function(){
      $('#userCard').css('display','none')
    }
  }
}
</script>

