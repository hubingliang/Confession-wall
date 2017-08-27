<template>
    <div class="Confession">
        <div class="view">
            <div class="Confession-box" id="box">
                <div class="items" >
                    <div class="item" @click="Windowshow = true" v-for="(item,index) in ConfessionData" v-bind:key="item.username">
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
                <Window v-bind:user="user" v-bind:ConfessionData="ConfessionData"></Window>
            </div>
        </transition>

        <transition name="el-fade-in">
            <div class="wrapper" v-show="editorshow">
                <div class="editor">
                    <el-button class="editor-close" type="text"><i class="el-icon-close" @click="editorshow = false"></i></el-button>
                    <div class="user">
                        <img src="https://i.loli.net/2017/08/19/5997affaf2cda.jpg"/>
                        <div class="username">
                            <h4>胡秉亮</h4>
                            <p>用无限适用于未来的方法，置换体内星辰河流。</p>
                        </div>
                    </div>
                    <div class="editable">
                        <svg class="editable-icon" aria-hidden="true">
                            <use xlink:href="#icon-zhaoxiang"></use>
                        </svg>
                    </div>
                    <el-input
                    class="textArea"
                    type="textarea"
                    :rows="5"
                    placeholder="写什么都行..."
                    v-model="textarea">
                    </el-input>
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
        }
    },
    mounted() {
        this.read()
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
                console.log(this.page)
                let width = $('.items').width()
                let number = -width * (this.page - 1)
                $('#box').css({
                    transform: `translateX(${number}px)`
                })
                this.page = this.page - 1
            }
        },
        rightmove:function(){
            console.log(this.page)
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
            console.log(this.user)
            var username = this.user.username;
            
            var usersign = '';
            var content = this.textarea;
            var good = 0;
            var comment = [];
            var commentNumber = 0
            var time = new Date()
            
            var ConfessionData = new ConfessionData();
            ConfessionData.set('username', username);
            ConfessionData.set('usersign', usersign);
            ConfessionData.set('content', content);
            ConfessionData.set('good', good);
            ConfessionData.set('commentNumber', commentNumber);
            ConfessionData.set('comment', comment);
            ConfessionData.set('time', time);
            ConfessionData.save().then( (ConfessionData)=> {
                this.editorshow = false
                this.textarea = ''
                this.read()
            }, function(error) {
                // 失败
            });
        },
        read:function(){
            var query = new AV.Query('ConfessionData');
            query.find().then((ConfessionData)=> {   
                for(let i=0;i<ConfessionData.length;i++){
                    console.log(ConfessionData[i].attributes)
                    this.ConfessionData[i] = {
                        username : ConfessionData[i].attributes.username,
                        content : ConfessionData[i].attributes.content,
                        good : ConfessionData[i].attributes.good,
                        comment : ConfessionData[i].attributes.comment,
                        commentNumber : ConfessionData[i].attributes.commentNumber,
                    }
                }
                console.log(this.ConfessionData)
            }, function(error){
                console.error(error) 
            })
        }
    }
}
</script>
