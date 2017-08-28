<template>
  <div class="dialog">
    <div class="bigItem">
        <div class="user">
            <img src="https://i.loli.net/2017/08/19/5997affaf2cda.jpg"/>
            <div class="username">
                <h4>{{item.username}}</h4>
                <span>用无限适用于未来的方法，置换体内星辰河流。</span>
            </div>
        </div>
        <div class="content">
            <img class="img" src="https://i.loli.net/2017/08/19/5997acbb7dd43.jpg"/>
            <p>{{item.content}}</p>
        </div>
        <div class="actions">
            <div class="good">
                <svg class="items-icon" aria-hidden="true">
                    <use xlink:href="#icon-dianzan2"></use>
                </svg>
                <span class="number">{{item.good}}</span>
            </div>
            <div class="comment-icon">
                <svg class="items-icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span class="comment">{{item.commentNumber}} 条评论</span>
            </div>
        </div>
        <div class="line"></div>
        <div class="comment">
          <img src="https://i.loli.net/2017/08/19/5997affaf2cda.jpg"/>
          <span>Brown</span>
          <span>:</span>
          <p>我能吞下玻璃而不伤身体，The quick brown fox jumps over the lazy dog.</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:['ConfessionData','item'],
    mounted() {
        this.read()
    },
    methods:{
        read:function(){
            console.log(this.item)
        }
    }
}
</script>

<style>

</style>
