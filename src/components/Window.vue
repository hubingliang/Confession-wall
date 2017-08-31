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
            <div class="imgBox">
                <img class="img" v-for="item in item.imageUrl" v-bind:src="item" v-bind:key="item" @click="bigImage(item)"/>
            </div>      
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
    props:['item'],
    mounted() {
        this.read()
    },
    methods:{
        read:function(){
            console.log(this.item)
        },
        bigImage:function(item){
            $(`    <div id="wrapper">
        <div id="imgBox">
            <img src="${item}" alt="" id="img">
        </div>
    </div>`).appendTo(".Confession")
            let box = $('#imgBox')[0]
            let img = $('#img')[0]
            let wrapper = $('#wrapper')
            box.addEventListener('mousemove',function(e){
            let width = box.getBoundingClientRect().width

            let height = box.getBoundingClientRect().height

            
            let Xcenter = box.offsetLeft + width /2
            let Ycenter = box.offsetTop + height /2
            let mouseX = e.clientX - Xcenter
            let mouseY = e.clientY - Ycenter
            


            let Xpercent = mouseX / width/2
            let Ypercent = mouseY / height/2
            
            let xDeg = Xpercent * 50
            let yDeg = Ypercent * 50
            img.style.transform = `translateZ(-100px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`  

            })
            wrapper.bind('click',function(){
                wrapper.remove()
            })
        }
    }
}
</script>

<style>

</style>
