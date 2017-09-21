<template>
    <div class="Confession">
        <div class="view">
            <div class="Confession-box" id="box">
                <div class="items" >
                    <div class="item" v-for="(item,index) in ConfessionData" v-bind:key="item.usersign">
                        <div class="user" >
                            <img @click="userCard(item.username)" v-bind:src="item.userImage"/>
                            <div class="username" @click="userCard(item.username)" >
                                <h4>{{item.username}}</h4>
                                <span>{{item.usersign}}</span>
                            </div>
                            <div class="date">{{item.date}}</div>
                        </div>
                        <div class="content" @click="Windowshow = true,getIndex(index)">
                            <div class="imgBox">
                                <img class="img" v-bind:src="item.imageUrl[0]"/>
                            </div>
                            
                            <pre v-html="item.content"></pre>
                        </div>
                        <div class="actions">
                            <div class="good">
                                <svg class="items-icon" aria-hidden="true" @click="good(index)" v-if="item.good === 0">
                                    <use xlink:href="#icon-dianzan"></use>
                                </svg>
                                <svg class="red-icon" aria-hidden="true" @click="good(index)" v-else="item.good === 1">
                                    <use xlink:href="#icon-dianzan"></use>
                                </svg>
                                <span class="number">{{item.goodUser.length}}</span>
                            </div>
                            <div class="comment-icon">
                                <svg class="items-icon" aria-hidden="true">
                                    <use xlink:href="#icon-pinglun"></use>
                                </svg>
                                <span>{{item.comment.length}} 条评论</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-button class="icon" @click="editorshow = true"><i class="el-icon-plus"></i></el-button>

        <i class="el-icon-arrow-right" v-on:click="rightmove()"></i>

        <i class="el-icon-arrow-left" v-on:click="leftmove()"></i>



        <Window v-bind:user="user" v-bind:ConfessionData="ConfessionData" v-bind:item="item" v-bind:what="what"></Window>



        <transition name="el-fade-in">
            <div class="wrapper" v-show="editorshow">
                <div class="editor">
                    <el-button class="editor-close" type="text" @click="editorshow = false"><i class="el-icon-close" @click="editorshow = false"></i></el-button>
                    <div class="user">
                        <img v-bind:src="user.userImage"/>
                        <div class="username">
                            <h4>{{user.username}}</h4>
                            <p>{{user.userSign}}</p>
                        </div>
                    </div>
                    <div class="editable">
                        <svg class="editable-icon" aria-hidden="true">
                            <use xlink:href="#icon-zhaoxiang"></use>
                        </svg>
                        <input class="upImage" type="file" id="photoFileUpload"/>
                    </div>
                    <el-input
                    class="textArea"
                    type="textarea"
                    :rows="5"
                    placeholder="写什么都行..."
                    v-model="textarea">
                    </el-input>
                    <div class="imageBox" id="imageBox">
                    </div>
                    <div class="submit">
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
                        <el-button type="primary" @click="save()">提交发表</el-button>
                    </div>
                </div>
            </div>
        </transition>

 
        <Card v-bind:card="card"></Card>
    </div>
</template>


<script>
import Window from './Window'
import Card from './Card'

export default {
    components:{Window,Card},
    props:['user','userCardshow'],
    data(){
        return{
            Windowshow: false,
            editorshow: false,
            emojishow: false,
            page: 0,
            textarea: '',
            index: 0,
            ConfessionData:[],
            item:{},
            card:{
                username:'',
                gender:'',
                userSign:'',
                realName:'',
                userImage:'',
                major: ''
            },
            what:'ConfessionData'
        }
    },
    mounted() {
        this.read(),
        this.showImage()
        this.addEmoji()
    },
    methods:{
        leftmove:function(){
            if(this.page===0){
                return
            }else if(this.page ===1){
                let width = $('.items').width()
                $('#box').css({
                    transform: `translateX(0px)`
                })
                this.page = this.page - 1
            }else{
                let width = $('.items').width()
                let number = -width * (this.page - 1)
                $('#box').css({
                    transform: `translateX(${number}px)`
                })
                this.page = this.page - 1
            }
        },
        rightmove:function(){
            let width = $('.items').width()
            let page = this.page + 1
            let number = -width * page
            $('#box').css({
                transform: `translateX(${number}px)`
            })
            this.page = this.page + 1
        },
        save:function(){
            var ConfessionData = AV.Object.extend('ConfessionData');
            var username = this.user.username
            var userImage = this.user.userImage
            var userSign = this.user.userSign
            var content = emojione.toImage(this.textarea)
            var good = 0;
            var goodUser = [];
            var comment = [];
            var commentNumber = 0
            var time = new Date()
            var imageUrl = []
            var date = new Date().toLocaleString()

            $('.image-item').children().each(function () {
                let src = this.src
                imageUrl.push(src)
            })
            var ConfessionData = new ConfessionData();
            ConfessionData.set('username', username);
            ConfessionData.set('usersign', userSign);
            ConfessionData.set('userImage', userImage);
            ConfessionData.set('content', content);
            ConfessionData.set('good', good);
            ConfessionData.set('goodUser', goodUser);
            ConfessionData.set('commentNumber', commentNumber);
            ConfessionData.set('comment', comment);
            ConfessionData.set('time', time);
            ConfessionData.set('imageUrl', imageUrl);
            ConfessionData.set('date', date);
            ConfessionData.save().then( (ConfessionData)=> {
                this.editorshow = false
                $('#imageBox').empty()
                this.textarea = ''
                this.read()
            }, function(error) {
                // 失败
            });
        },
        read:function(){
            this.ConfessionData = []
            var query = new AV.Query('ConfessionData');
            query.find().then((ConfessionData)=> {  
                ConfessionData.reverse()
                for(let i=0;i<ConfessionData.length;i++){ 
                    this.ConfessionData.push({
                        username : ConfessionData[i].attributes.username,
                        content : ConfessionData[i].attributes.content,
                        good : ConfessionData[i].attributes.good,
                        comment : ConfessionData[i].attributes.comment,
                        commentNumber : ConfessionData[i].attributes.commentNumber,
                        imageUrl : ConfessionData[i].attributes.imageUrl,
                        usersign : ConfessionData[i].attributes.usersign,
                        userImage : ConfessionData[i].attributes.userImage,
                        id : ConfessionData[i].id,
                        goodUser :ConfessionData[i].attributes.goodUser,
                        date :ConfessionData[i].attributes.date,
                    })
                    for(let ii = 0;ii < this.ConfessionData[i].goodUser.length;ii++){
                        if(this.ConfessionData[i].goodUser[ii] === this.user.username){
                            this.ConfessionData[i].good = 1
                            break   
                        }else{
                            this.ConfessionData[i].good = 0
                        } 
                    }

                }
            }, function(error){
                console.error(error) 
            })
        },
        getIndex:function(index){
            $('#window').css('display','flex')
            this.item = this.ConfessionData[index]
            this.item.commentNumber = this.ConfessionData[index].comment.length
            this.item.goodNumber = this.ConfessionData[index].goodUser.length
        },
        saveImage:function(){
            let imageBox = $('#imageBox')
            let imageNumber = imageBox.children().length
            if(imageNumber>=9){
                return
            }else{
                var fileUploadControl = $('#photoFileUpload')[0];
                if (fileUploadControl.files.length > 0) {
                    var localFile = fileUploadControl.files[0];
                    var name = 'ConfessionImage.jpg';

                    var file = new AV.File(name, localFile);
                    file.save().then((file)=> {
                        let url = file.url()
                        let image = $(`<div class="image-item">
                                        <img src="${url}" alt="">
                                        </div>`)
                        
                        image.appendTo("#imageBox")
                        setTimeout(function() {
                            let width = image.children().width()
                            let height = image.children().height()
                            if (width<height) {
                                image.children().css('width','185px')
                            }else{
                                image.children().css('height','185px')
                            }
                        }, 1000);
                    }, function(error) {
                        // 异常处理
                        console.error(error);
                    });
                }
            }
        },
        showImage(){
            $('#photoFileUpload').change(()=> {
                this.saveImage()
            });
        },
        userCard:function(username){
            $('#userCard').css('display','flex')
            var query = new AV.Query('_User');
            query.find().then((_User)=> {  
                for(let i = 0;i<_User.length;i++){
                    if(_User[i].attributes.username === username){
                        this.card.username = _User[i].attributes.username
                        this.card.gender = _User[i].attributes.gender
                        this.card.userSign = _User[i].attributes.userSign
                        this.card.realName = _User[i].attributes.realName
                        this.card.userImage = _User[i].attributes.userImage
                        this.card.major = _User[i].attributes.major
                        this.card.callWhat = _User[i].attributes.callWhat
                        this.card.call = _User[i].attributes.call
                    }
                }
            }, function(error){
                console.error(error) 
            })
        },
        good:function(index){
            for(let i = 0;i<=this.ConfessionData[index].goodUser.length;i++){
                if(this.ConfessionData[index].goodUser[i] === this.user.username){
                    return
                }          
            }
            this.ConfessionData[index].good = 1
            this.ConfessionData[index].goodUser.push(this.user.username)
            var ConfessionData = AV.Object.createWithoutData('ConfessionData', this.ConfessionData[index].id);
            // 修改属性
            ConfessionData.set('good', this.ConfessionData[index].good);
            ConfessionData.set('goodUser', this.ConfessionData[index].goodUser);
            // 保存到云端
            ConfessionData.save();
            
        },
        addEmoji:function(){
            $('.emoji').children().click((emoji)=> {
                this.textarea = this.textarea + emoji.target.alt
                this.emojishow = false
            })
        },

    }
}
</script>
