<template>
    <div class="Confession">
        <div class="view">
            <div class="Confession-box" id="box">
                <div class="items" >
                    <div class="item" v-for="(item,index) in ConfessionData" v-bind:key="item.usersign">
                        <div class="user" @click="userCard(item.username)">
                            <img v-bind:src="item.userImage"/>
                            <div class="username">
                                <h4>{{item.username}}</h4>
                                <span>{{item.usersign}}</span>
                            </div>
                        </div>
                        <div class="content" @click="Windowshow = true,getIndex(index)">
                            <div class="imgBox">
                                <img class="img" v-bind:src="item.imageUrl[0]"/>
                            </div>
                            
                            <p>{{item.content}}</p>
                        </div>
                        <div class="actions">
                            <div class="good">
                                <svg class="items-icon" aria-hidden="true" @click="good(index)" v-if="item.good === 0">
                                    <use xlink:href="#icon-dianzan2"></use>
                                </svg>
                                <svg class="red-icon" aria-hidden="true" @click="good(index)" v-else="item.good === 1">
                                    <use xlink:href="#icon-dianzan2"></use>
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

        <transition name="el-fade-in">
            <div v-show="Windowshow">
                <el-button class="dialog-close" type="text"><i class="el-icon-close" @click="Windowshow = false"></i></el-button>
                <Window v-bind:user="user" v-bind:ConfessionData="ConfessionData" v-bind:item="item"></Window>
            </div>
        </transition>

        <transition name="el-fade-in">
            <div class="wrapper" v-show="editorshow">
                <div class="editor">
                    <el-button class="editor-close" type="text"><i class="el-icon-close" @click="editorshow = false"></i></el-button>
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
            }
        }
    },
    mounted() {
        this.read(),
        this.showImage()
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
            var content = this.textarea;
            var good = 0;
            var goodUser = [];
            var comment = [];
            var commentNumber = 0
            var time = new Date()
            var imageUrl = []
   
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
                    var name = 'avatar.jpg';

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
            
        }
    }
}
</script>
