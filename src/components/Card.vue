<template>
    <div class="card-wrapper animated fadeInDown"  id="userCard">
      <div class="userCard">
        <div class="logo">
          <svg class="card-icon" aria-hidden="true">
            <use xlink:href="#icon-xin"></use>
          </svg>
          <div>
            <h1>天农，表白，墙</h1>
            <p>C o n f e s s i o n - W a l l</p>
          </div>
        </div>
        <el-button class="cardClose" type="text" @click="cardClose()"><i class="el-icon-close"></i></el-button>
        <div class="user-Information">
            <img v-bind:src="card.userImage" alt="" class="userImage">
            <div class="user">
              <h1>
                <span class="username">{{card.username}}
                  <svg class="icon nan" aria-hidden="true">
                    <use xlink:href="#icon-nan"></use>
                  </svg>
                   <svg class="icon nv" aria-hidden="true">
                    <use xlink:href="#icon-nv"></use>
                  </svg>
                </span>
                <span class="usersign">{{card.userSign}}</span>
              </h1>
              <div class="major">
                <span>专业 :</span>
                <p>{{card.major}}</p>
              </div>
              <div class="realName">
                <span>姓名 :</span>
                <p>{{card.realName}}</p>
              </div>
              <div class="call">
                <span>QQ :</span>
                <p>1104524351</p>
                <span>微信 :</span>
                <p>15620688207</p>
              </div>
            </div>

          </div>
      </div>
    </div>
</template>

<script>
    export default {
       props:['card'],
       methods:{
           cardClose:function() {
               $('#userCard').css('display','none')
           }
       }
    }
</script>