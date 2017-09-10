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
                  
                  <svg class="card-icon nan" aria-hidden="true" v-if="card.gender === 'man'">
                    <use xlink:href="#icon-nan"></use>
                  </svg>
                   <svg class="card-icon nv" aria-hidden="true" v-else>
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
                <span v-if="card.callWhat === '1'">QQ :</span>
                <span v-else-if="card.callWhat === '2'">微信 :</span>
                <span v-else="card.callWhat === '3'">电话 :</span>
                <p>{{card.call}}</p>
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