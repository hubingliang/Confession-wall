<template>
    <div class="Confession">
        <div class="view">
            <div class="Confession-box" id="box">
                <div class="items" >
                    <div class="item" @click="Windowshow = true,getIndex(index)" v-for="(item,index) in ConfessionData" v-bind:key="item.username">
                        <div class="user">
                            <img src="https://i.loli.net/2017/08/19/5997affaf2cda.jpg"/>
                            <div class="username">
                                <h4>{{item.username}}</h4>
                                <span>用无限适用于未来的方法，置换体内星辰河流。</span>
                            </div>
                        </div>
                        <div class="content">
                            <div class="imgBox">
                                <img class="img" v-bind:src="item.imageUrl[0]"/>
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
                                <span>{{item.commentNumber}} 条评论</span>
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
                        <img src="https://i.loli.net/2017/08/19/5997affaf2cda.jpg"/>
                        <div class="username">
                            <h4>{{user.username}}</h4>
                            <p>用无限适用于未来的方法，置换体内星辰河流。</p>
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

    </div>
</template>


<script>
import Window from './Window'

export default {
    components:{Window},
    props:['user'],
    data(){
        return{
            Windowshow: false,
            editorshow: false,
            page: 0,
            textarea: '',
            index: 0,
            ConfessionData:[],
            item:{},
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
            var username = this.user.username;
            
            var usersign = '';
            var content = this.textarea;
            var good = 0;
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
            ConfessionData.set('usersign', usersign);
            ConfessionData.set('content', content);
            ConfessionData.set('good', good);
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
            var query = new AV.Query('ConfessionData');
            query.find().then((ConfessionData)=> {  
                ConfessionData.reverse()
                for(let i=0;i<ConfessionData.length;i++){
                    this.ConfessionData[i] = {
                        username : ConfessionData[i].attributes.username,
                        content : ConfessionData[i].attributes.content,
                        good : ConfessionData[i].attributes.good,
                        comment : ConfessionData[i].attributes.comment,
                        commentNumber : ConfessionData[i].attributes.commentNumber,
                        imageUrl : ConfessionData[i].attributes.imageUrl
                    }
                }
            }, function(error){
                console.error(error) 
            })
            console.log(this.ConfessionData)
        },
        getIndex:function(index){
            this.item = this.ConfessionData[index]
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
        }
    }
}
</script>
