<template>
  <div class="dialog animated fadeIn window" id="window">
    <div class="bigItem">
        <el-button class="dialog-close" type="text" @click="hidden()"><i class="el-icon-close" @click="hidden()"></i></el-button>
        <div class="user">
            <img v-bind:src="item.userImage"/>
            <div class="username">
                <h4>{{item.username}}</h4>
                <span>{{item.usersign}}</span>
            </div>
        </div>
        <div class="content-box">
            <div class="content">
                <div class="imgBox">
                    <img class="img" v-for="item in item.imageUrl" v-bind:src="item" v-bind:key="item" @click="bigImage(item)"/>
                </div>      
                <pre v-html="item.content"></pre>
            </div>
            <div class="actions">
                <div class="good" @click="good()">
                    <svg class="items-icon" aria-hidden="true" @click="good()" v-if="item.good === 0">
                        <use xlink:href="#icon-dianzan2"></use>
                    </svg>
                    <svg class="red-icon" aria-hidden="true" @click="good()" v-else="item.good === 1">
                        <use xlink:href="#icon-dianzan2"></use>
                    </svg>
                    <span class="number">{{item.good}}</span>
                </div>
                <div class="comment-icon">
                    <svg class="items-icon" aria-hidden="true">
                        <use xlink:href="#icon-pinglun"></use>
                    </svg>
                    <span class="comment-number">{{item.commentNumber}} 条评论</span>
                </div>
            </div>
            <div class="comment-box">
                <div class="comment" v-for="comment in item.comment">
                    <img v-bind:src="comment.userImage"/>
                    <span class="comment-username">{{comment.username}}</span>
                    <span>：</span>
                    <p v-html="comment.comment"></p>
                </div>

            </div>
        </div>
        
        <div class="comment-form">
            <el-input
            type="textarea"
            :rows="2"
            placeholder="说点什么？"
            resize="none"
            v-model="comment">
            </el-input>
            <el-button type="primary" class="upComment" @click="addComment()">发表</el-button>
            <svg class="emoji-icon" aria-hidden="true" @click="emojishow = !emojishow">
                <use xlink:href="#icon-emoji"></use>
            </svg>
            <div class="emojiBox" v-show="emojishow">
                <div class="emoji">
                        <img class="emojione" alt="😀" title=":grinning:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f600.png">
                        <img class="emojione" alt="😃" title=":smiley:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f603.png">
                        <img class="emojione" alt="😄" title=":smile:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f604.png">
                        <img class="emojione" alt="😁" title=":grin:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f601.png">
                        <img class="emojione" alt="😆" title=":laughing:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f606.png"><img class="emojione" alt="😅" title=":sweat_smile:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f605.png"><img class="emojione" alt="😂" title=":joy:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f602.png"><img class="emojione" alt="🤣" title=":rofl:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f923.png"><img class="emojione" alt="😊" title=":blush:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60a.png"><img class="emojione" alt="😇" title=":innocent:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f607.png"><img class="emojione" alt="🙂" title=":slight_smile:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f642.png"><img class="emojione" alt="🙃" title=":upside_down:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f643.png"><img class="emojione" alt="😉" title=":wink:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f609.png"><img class="emojione" alt="😌" title=":relieved:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60c.png"><img class="emojione" alt="😍" title=":heart_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60d.png"><img class="emojione" alt="😘" title=":kissing_heart:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f618.png"><img class="emojione" alt="😗" title=":kissing:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f617.png"><img class="emojione" alt="😙" title=":kissing_smiling_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f619.png"><img class="emojione" alt="😚" title=":kissing_closed_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61a.png"><img class="emojione" alt="😋" title=":yum:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60b.png"><img class="emojione" alt="😜" title=":stuck_out_tongue_winking_eye:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61c.png"><img class="emojione" alt="😝" title=":stuck_out_tongue_closed_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61d.png"><img class="emojione" alt="😛" title=":stuck_out_tongue:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61b.png"><img class="emojione" alt="🤑" title=":money_mouth:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f911.png"><img class="emojione" alt="🤗" title=":hugging:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f917.png"><img class="emojione" alt="🤓" title=":nerd:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f913.png"><img class="emojione" alt="😎" title=":sunglasses:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60e.png"><img class="emojione" alt="🤡" title=":clown:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f921.png"><img class="emojione" alt="🤠" title=":cowboy:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f920.png"> <img class="emojione" alt="😏" title=":smirk:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60f.png"><img class="emojione" alt="😒" title=":unamused:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f612.png"><img class="emojione" alt="😞" title=":disappointed:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61e.png"><img class="emojione" alt="😔" title=":pensive:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f614.png"><img class="emojione" alt="😟" title=":worried:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f61f.png"><img class="emojione" alt="😕" title=":confused:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f615.png"><img class="emojione" alt="🙁" title=":slight_frown:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f641.png"><img class="emojione" alt="😣" title=":persevere:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f623.png"><img class="emojione" alt="😖" title=":confounded:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f616.png"><img class="emojione" alt="😫" title=":tired_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62b.png"><img class="emojione" alt="😩" title=":weary:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f629.png"><img class="emojione" alt="😤" title=":triumph:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f624.png"><img class="emojione" alt="😠" title=":angry:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f620.png"><img class="emojione" alt="😡" title=":rage:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f621.png"><img class="emojione" alt="😶" title=":no_mouth:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f636.png"><img class="emojione" alt="😐" title=":neutral_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f610.png"><img class="emojione" alt="😑" title=":expressionless:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f611.png"><img class="emojione" alt="😯" title=":hushed:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62f.png"><img class="emojione" alt="😦" title=":frowning:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f626.png"><img class="emojione" alt="😧" title=":anguished:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f627.png"><img class="emojione" alt="😮" title=":open_mouth:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62e.png"><img class="emojione" alt="😲" title=":astonished:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f632.png"><img class="emojione" alt="😵" title=":dizzy_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f635.png"><img class="emojione" alt="😳" title=":flushed:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f633.png"><img class="emojione" alt="😱" title=":scream:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f631.png"><img class="emojione" alt="😨" title=":fearful:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f628.png"><img class="emojione" alt="😰" title=":cold_sweat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f630.png"><img class="emojione" alt="😢" title=":cry:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f622.png"><img class="emojione" alt="😥" title=":disappointed_relieved:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f625.png"> <img class="emojione" alt="🤤" title=":drooling_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f924.png"><img class="emojione" alt="😭" title=":sob:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62d.png"><img class="emojione" alt="😓" title=":sweat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f613.png"><img class="emojione" alt="😪" title=":sleepy:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62a.png"><img class="emojione" alt="😴" title=":sleeping:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f634.png"><img class="emojione" alt="🙄" title=":rolling_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f644.png"><img class="emojione" alt="🤔" title=":thinking:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f914.png"><img class="emojione" alt="🤥" title=":lying_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f925.png"><img class="emojione" alt="😬" title=":grimacing:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f62c.png"><img class="emojione" alt="🤐" title=":zipper_mouth:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f910.png"><img class="emojione" alt="🤢" title=":nauseated_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f922.png"><img class="emojione" alt="🤧" title=":sneezing_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f927.png"><img class="emojione" alt="😷" title=":mask:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f637.png"><img class="emojione" alt="🤒" title=":thermometer_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f912.png"><img class="emojione" alt="🤕" title=":head_bandage:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f915.png"><img class="emojione" alt="😈" title=":smiling_imp:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f608.png"><img class="emojione" alt="👿" title=":imp:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f47f.png"><img class="emojione" alt="👹" title=":japanese_ogre:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f479.png"><img class="emojione" alt="👺" title=":japanese_goblin:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f47a.png"><img class="emojione" alt="💩" title=":poop:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f4a9.png"><img class="emojione" alt="👻" title=":ghost:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f47b.png"><img class="emojione" alt="💀" title=":skull:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f480.png">☠<img class="emojione" alt="👽" title=":alien:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f47d.png"><img class="emojione" alt="👾" title=":space_invader:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f47e.png"><img class="emojione" alt="🤖" title=":robot:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f916.png"><img class="emojione" alt="🎃" title=":jack_o_lantern:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f383.png"><img class="emojione" alt="😺" title=":smiley_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f63a.png"><img class="emojione" alt="😸" title=":smile_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f638.png"><img class="emojione" alt="😹" title=":joy_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f639.png"> <img class="emojione" alt="😻" title=":heart_eyes_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f63b.png"><img class="emojione" alt="😼" title=":smirk_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f63c.png"><img class="emojione" alt="😽" title=":kissing_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f63d.png"><img class="emojione" alt="🙀" title=":scream_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f640.png"><img class="emojione" alt="😿" title=":crying_cat_face:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f63f.png"><img class="emojione" alt="😾" title=":pouting_cat:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f63e.png"><img class="emojione" alt="👐" title=":open_hands:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f450.png"><img class="emojione" alt="🙌" title=":raised_hands:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f64c.png"><img class="emojione" alt="👏" title=":clap:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f44f.png"><img class="emojione" alt="🙏" title=":pray:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f64f.png"><img class="emojione" alt="🤝" title=":handshake:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f91d.png"><img class="emojione" alt="👍" title=":thumbsup:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f44d.png"><img class="emojione" alt="👎" title=":thumbsdown:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f44e.png"><img class="emojione" alt="👊" title=":punch:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f44a.png"><img class="emojione" alt="✊" title=":fist:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/270a.png"><img class="emojione" alt="🤛" title=":left_facing_fist:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f91b.png"><img class="emojione" alt="🤜" title=":right_facing_fist:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f91c.png"><img class="emojione" alt="🤞" title=":fingers_crossed:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f91e.png"><img class="emojione" alt="🤘" title=":metal:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f918.png"><img class="emojione" alt="👌" title=":ok_hand:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f44c.png"><img class="emojione" alt="👈" title=":point_left:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f448.png"><img class="emojione" alt="👉" title=":point_right:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f449.png"><img class="emojione" alt="👆" title=":point_up_2:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f446.png"><img class="emojione" alt="👇" title=":point_down:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f447.png"><img class="emojione" alt="✋" title=":raised_hand:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/270b.png"><img class="emojione" alt="🤚" title=":raised_back_of_hand:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f91a.png"><img class="emojione" alt="🖖" title=":vulcan:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f596.png"> <img class="emojione" alt="👋" title=":wave:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f44b.png"><img class="emojione" alt="🤙" title=":call_me:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f919.png"><img class="emojione" alt="💪" title=":muscle:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f4aa.png"><img class="emojione" alt="🖕" title=":middle_finger:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f595.png">
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
            comment:'',
            emojishow:false,
        }
    },
    props:['item','user','what'],
    mounted() {
        
        this.transform()
        this.addEmoji()
    },
    methods:{
        bigImage:function(item){
            if(this.what === 'ManData'){
                $(`    <div id="wrapper">
                    <div id="imgBox">
                        <img src="${item}" alt="" id="img">
                        </div>
                    </div>`).appendTo(".Lost")
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
            }else if(this.what === 'WomanData'){
                                $(`    <div id="wrapper">
                    <div id="imgBox">
                        <img src="${item}" alt="" id="img">
                        </div>
                    </div>`).appendTo(".Notice")
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
            }else{
                console.log('ss')
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
            
        },
        addEmoji:function(){
            $('.emoji').children().click((emoji)=> {
                this.comment = this.comment + emoji.target.alt
                this.emojishow = false
            })
        },
        addComment:function(){
            if(this.what === 'ManData'){
                this.comment = emojione.toImage(this.comment)
                this.item.comment.push(
                    {
                        username: `${this.user.username}`,
                        gender: `${this.user.gender}`,
                        userSign: `${this.user.userSign}`,
                        realName: `${this.user.realName}`,
                        major: `${this.user.major}`,
                        userImage: `${this.user.userImage}`,
                        comment: `${this.comment}`
                    }
                )
                // 第一个参数是 className，第二个参数是 objectId
                var ManData = AV.Object.createWithoutData('ManData', this.item.id);
                // 修改属性
                ManData.set('comment', this.item.comment);
                // 保存到云端
                ManData.save();
                this.comment = ''
            }else if(this.what === 'WomanData'){
                this.comment = emojione.toImage(this.comment)
                this.item.comment.push(
                    {
                        username: `${this.user.username}`,
                        gender: `${this.user.gender}`,
                        userSign: `${this.user.userSign}`,
                        realName: `${this.user.realName}`,
                        major: `${this.user.major}`,
                        userImage: `${this.user.userImage}`,
                        comment: `${this.comment}`
                    }
                )
                // 第一个参数是 className，第二个参数是 objectId
                var WomanData = AV.Object.createWithoutData('WomanData', this.item.id);
                // 修改属性
                WomanData.set('comment', this.item.comment);
                // 保存到云端
                WomanData.save();
                this.comment = '' 
            }else{
                this.comment = emojione.toImage(this.comment)
                this.item.comment.push(
                    {
                        username: `${this.user.username}`,
                        gender: `${this.user.gender}`,
                        userSign: `${this.user.userSign}`,
                        realName: `${this.user.realName}`,
                        major: `${this.user.major}`,
                        userImage: `${this.user.userImage}`,
                        comment: `${this.comment}`
                    }
                )
                // 第一个参数是 className，第二个参数是 objectId
                var ConfessionData = AV.Object.createWithoutData('ConfessionData', this.item.id);
                // 修改属性
                ConfessionData.set('comment', this.item.comment);
                // 保存到云端
                ConfessionData.save();
                this.comment = '' 
            }
           
        },
        good:function(){
            for(let i = 0;i<=this.item.goodUser.length;i++){
                if(this.item.goodUser[i] === this.user.username){
                    return
                }          
            }
            
            this.item.goodUser.push(this.user.username)
            var ConfessionData = AV.Object.createWithoutData('ConfessionData', this.item.id);
            // 修改属性
            ConfessionData.set('good', this.item.good);
            ConfessionData.set('goodUser', this.item.goodUser);
            // 保存到云端
            ConfessionData.save();
        },
        handleComment:function(){
            for(let i = 0;i<item.comment.length;i ++){
                item.comment[i].comment = emojione.toImage(item.comment[i].comment)
                document.getElementById('outputText').innerHTML = item.comment[i].comment;
            }
        },
        transform:function(){
            $(document).ready(function() {
                $(".convert-emoji").each(function() {
                    var original = $(this).html();
                    // use .shortnameToImage if only converting shortnames (for slightly better performance)
                    var converted = emojione.toImage(original);
                    $(this).html(converted);
                });
            });
        },
        good:function(){
            for(let i = 0;i<=this.item.goodUser.length;i++){
                if(this.item.goodUser[i] === this.user.username){
                    return
                }          
            }
            this.item.good = 1
            this.item.goodUser.push(this.user.username)
            var ConfessionData = AV.Object.createWithoutData('ConfessionData', this.item.id);
            // 修改属性
            ConfessionData.set('good', this.item.good);
            ConfessionData.set('goodUser', this.item.goodUser);
            // 保存到云端
            ConfessionData.save();
            
        },
        hidden:function(){
            console.log('sss')
            $('.window').css('display','none')
        }
    }
}
</script>

<style>

</style>
