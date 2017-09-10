<template>
  <div class="dialog">
    <div class="bigItem">
        <div class="user">
            <img v-bind:src="item.userImage"/>
            <div class="username">
                <h4>{{item.username}}</h4>
                <span>{{item.usersign}}</span>
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
        <div class="comment-form">
            <el-input
            type="textarea"
            :rows="2"
            placeholder="说点什么？"
            v-model="comment">
            </el-input>
            <el-button type="primary" class="upComment" @click="convert()">发表</el-button>
            <svg class="emoji-icon" aria-hidden="true">
                <use xlink:href="#icon-emoji"></use>
            </svg>
            <div class="emojiBox">
                <div class="emoji">
                    <img class="emojione" alt="😄" title=":smile:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f604.png"/>
                    <img class="emojione" alt="❤️" title=":heart:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/2764.png"/>
                    <img class="emojione" alt="💔" title=":broken_heart:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f494.png"/>
                    <img class="emojione" alt="😂" title=":joy:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f602.png"/>
                    <img class="emojione" alt="😃" title=":smiley:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f603.png"/>
                    <img class="emojione" alt="🙂" title=":slight_smile:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f642.png"/>
                    <img class="emojione" alt="😅" title=":sweat_smile:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f605.png"/>
                    <img class="emojione" alt="😆" title=":laughing:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f606.png"/>
                    <img class="emojione" alt="😉" title=":wink:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f609.png"/>
                    <img class="emojione" alt="😓" title=":sweat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f613.png"/>
                    <img class="emojione" alt="😘" title=":kissing_heart:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f618.png"/>
                    <img class="emojione" alt="😜" title=":stuck_out_tongue_winking_eye:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61c.png"/>
                    <img class="emojione" alt="😞" title=":disappointed:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61e.png"/>
                    <img class="emojione" alt="😠" title=":angry:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f620.png"/>
                    <img class="emojione" alt="😢" title=":cry:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f622.png"/>
                    <img class="emojione" alt="😣" title=":persevere:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f623.png"/>
                    <img class="emojione" alt="😨" title=":fearful:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f628.png"/>
                    <img class="emojione" alt="😳" title=":flushed:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f633.png"/>
                    <img class="emojione" alt="😵" title=":dizzy_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f635.png"/>
                    <img class="emojione" alt="🙆" title=":person_gesturing_ok:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f646.png"/>
                    <img class="emojione" alt="😇" title=":innocent:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f607.png"/>
                    <img class="emojione" alt="😎" title=":sunglasses:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60e.png"/>
                    <img class="emojione" alt="😑" title=":expressionless:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f611.png"/>
                    <img class="emojione" alt="😕" title=":confused:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f615.png"/>
                    <img class="emojione" alt="😛" title=":stuck_out_tongue:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61b.png"/>
                    <img class="emojione" alt="😮" title=":open_mouth:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62e.png"/>
                    <img class="emojione" alt="😶" title=":no_mouth:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f636.png"/>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            comment:''
        }
    },
    props:['item'],
    mounted() {
    },
    methods:{
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
        },
        convert:function(){
            var input = this.comment
            console.log(input)
            var output = emojione.shortnameToImage(input);
            alert(output);
        }
    }
}
</script>

<style>

</style>
