webpackJsonp([1],{25:function(t,s){},26:function(t,s){},27:function(t,s){},28:function(t,s,e){function n(t){e(80)}var i=e(6)(e(51),e(91),n,null,null);t.exports=i.exports},51:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(82),i=e.n(n);s.default={data:function(){return{}},created:function(){this.AV()},name:"app",components:{Home:i.a},methods:{AV:function(t){function s(){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}(function(){AV.init({appId:"OoX8WgmB6rTjRX9Pg40MBscc-gzGzoHsz",appKey:"Xxmm6i1SEsVIEDLt4xTKOiXW"})})}}},52:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(85),i=e.n(n);s.default={components:{Window:i.a},props:["user"],data:function(){return{Windowshow:!1,editorshow:!1,page:0,textarea:"",index:0,ConfessionData:[],item:{}}},mounted:function(){this.read(),this.showImage()},methods:{leftmove:function(){if(0!==this.page)if(1===this.page){$(".items").width();$("#box").css({transform:"translateX(0px)"}),this.page=this.page-1}else{var t=$(".items").width(),s=-t*(this.page-1);$("#box").css({transform:"translateX("+s+"px)"}),this.page=this.page-1}},rightmove:function(){var t=$(".items").width(),s=this.page+1,e=-t*s;$("#box").css({transform:"translateX("+e+"px)"}),this.page=this.page+1},save:function(){var t=this,s=AV.Object.extend("ConfessionData"),e=this.user.username,n=this.textarea,i=[],a=new Date,o=[];$(".image-item").children().each(function(){var t=this.src;o.push(t)});var s=new s;s.set("username",e),s.set("usersign",""),s.set("content",n),s.set("good",0),s.set("commentNumber",0),s.set("comment",i),s.set("time",a),s.set("imageUrl",o),s.save().then(function(s){t.editorshow=!1,$("#imageBox").empty(),t.textarea="",t.read()},function(t){})},read:function(){var t=this;new AV.Query("ConfessionData").find().then(function(s){s.reverse();for(var e=0;e<s.length;e++)t.ConfessionData[e]={username:s[e].attributes.username,content:s[e].attributes.content,good:s[e].attributes.good,comment:s[e].attributes.comment,commentNumber:s[e].attributes.commentNumber,imageUrl:s[e].attributes.imageUrl}},function(t){console.error(t)})},getIndex:function(t){this.item=this.ConfessionData[t]},saveImage:function(){if(!($("#imageBox").children().length>=9)){var t=$("#photoFileUpload")[0];if(t.files.length>0){var s=t.files[0];new AV.File("avatar.jpg",s).save().then(function(t){var s=t.url(),e=$('<div class="image-item">\n                                        <img src="'+s+'" alt="">\n                                        </div>');e.appendTo("#imageBox"),setTimeout(function(){e.children().width()<e.children().height()?e.children().css("width","185px"):e.children().css("height","185px")},1e3)},function(t){console.error(t)})}}},showImage:function(){var t=this;$("#photoFileUpload").change(function(){t.saveImage()})}}}},53:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(58),i=e.n(n),a=e(81),o=e.n(a),r=e(83),c=e.n(r),l=e(84),u=e.n(l);s.default={components:{Confession:o.a,Lost:c.a,Notice:u.a},data:function(){return{Confessionshow:!1,Lostshow:!1,Noticeshow:!1,startshow:!0,homeshow:!1,Windowshow:!1,formshow:!1,user:{username:""},slidermove:0}},mounted:function(){this.showImage(),this.currentUser()},methods:{Confession:function(){$("#home").css("background","rgb(0, 50, 203)"),$("#icon").css("background","rgb(0, 50, 203)"),$("#link").css("color","rgb(0, 50, 203)").css("border","1px solid rgb(0, 50, 203)"),$("#nav-icon").children().css("fill","rgb(0, 50, 203)").css("border","1px solid rgb(0, 50, 203)"),$("#back").css("color","rgb(0, 50, 203)")},back:function(){$("#home").css("background","rgb(0, 50, 203)"),$("#icon").css("background","rgb(0, 50, 203)"),$("#link").css("color","white").css("border","1px solid white"),$("#nav-icon").children().css("fill","white").css("border","1px solid white"),$("#back").css("color","white")},Lost:function(){$("#home").css("background","rgb(244, 49, 49)"),$("#icon").css("background","rgb(244, 49, 49)"),$("#link").css("color","rgb(244, 49, 49)").css("border","1px solid rgb(244, 49, 49)"),$("#nav-icon").children().css("fill","rgb(244, 49, 49)").css("border","1px solid rgb(244, 49, 49)"),$("#back").css("color","rgb(244, 49, 49)")},Notice:function(){$("#home").css("background","rgb(123, 57, 163)"),$("#icon").css("background","rgb(123, 57, 163)"),$("#link").css("color","rgb(123, 57, 163)").css("border","1px solid rgb(123, 57, 163)"),$("#nav-icon").children().css("fill","rgb(123, 57, 163)").css("border","1px solid rgb(123, 57, 163)"),$("#back").css("color","rgb(123, 57, 163)")},register:function(){var t=$("#inputUsername").val(),s=$("#inputPassword").val(),e=$("inputEmail").val(),n=new AV.User;n.setUsername(t),n.setPassword(s),n.setEmail(e),n.signUp().then(function(t){var s=400;setInterval(function(){s>=0&&($("#slider").css("transform","translateX("+s+"px)"),s-=10)},15)},function(t){alert(i()(t))})},login:function(){var t=this,s=$("#signinUsername").val(),e=$("#signinPassword").val();AV.User.logIn(s,e).then(function(s){$("#start").css("display","none"),$("#home").css("display","flex"),$("#username").html(s.attributes.username),t.user.username=s.attributes.username},function(t){alert(i()(t))})},userImage:function(){var t=this,s=$("#userImage")[0];if(s.files.length>0){var e=s.files[0];new AV.File("avatar.jpg",e).save().then(function(s){t.user.userImage=s.url();var e=s.url();$(".userImage").attr("src",""+e)},function(t){console.error(t)})}},move:function(){$("#slider").css("transform","translateX(400px)")},showImage:function(){var t=this;$("#userImage").change(function(){t.userImage()})},save:function(){var t=AV.Object.extend("userInformation"),t=new t,s=this.user.username,e=this.user.userImage;t.set("username",s),t.set("userImage",e),t.save().then(function(t){console.log("objectId is "+t.id)},function(t){console.error(t)})},currentUser:function(){var t=AV.User.current();t&&(console.log(t),$("#start").css("display","none"),$("#home").css("display","flex"),$("#username").html(t.attributes.username))},logOut:function(){AV.User.logOut(),$("#start").css("display","flex"),$("#home").css("display","none");AV.User.current()}}}},54:function(t,s){},55:function(t,s){},56:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},props:["item"],mounted:function(){this.read()},methods:{read:function(){console.log(this.item)},bigImage:function(t){$('    <div id="wrapper">\n        <div id="imgBox">\n            <img src="'+t+'" alt="" id="img">\n        </div>\n    </div>').appendTo(".Confession");var s=$("#imgBox")[0],e=$("#img")[0],n=$("#wrapper");s.addEventListener("mousemove",function(t){var n=s.getBoundingClientRect().width,i=s.getBoundingClientRect().height,a=s.offsetLeft+n/2,o=s.offsetTop+i/2,r=t.clientX-a,c=t.clientY-o,l=r/n/2,u=c/i/2,d=50*l,v=50*u;e.style.transform="translateZ(-100px) rotateX("+-v+"deg) rotateY("+d+"deg)"}),n.bind("click",function(){n.remove()})}}}},57:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(2),i=e(28),a=e.n(i),o=e(24),r=e.n(o),c=e(25),l=(e.n(c),e(27)),u=(e.n(l),e(26));e.n(u);n.default.config.productionTip=!1,n.default.use(r.a),new n.default({el:"#app",template:"<App/>",components:{App:a.a}})},79:function(t,s){},80:function(t,s){},81:function(t,s,e){var n=e(6)(e(52),e(90),null,null,null);t.exports=n.exports},82:function(t,s,e){var n=e(6)(e(53),e(89),null,null,null);t.exports=n.exports},83:function(t,s,e){var n=e(6)(e(54),e(87),null,null,null);t.exports=n.exports},84:function(t,s,e){var n=e(6)(e(55),e(88),null,null,null);t.exports=n.exports},85:function(t,s,e){function n(t){e(79)}var i=e(6)(e(56),e(86),n,null,null);t.exports=i.exports},86:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dialog"},[e("div",{staticClass:"bigItem"},[e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://i.loli.net/2017/08/19/5997affaf2cda.jpg"}}),t._v(" "),e("div",{staticClass:"username"},[e("h4",[t._v(t._s(t.item.username))]),t._v(" "),e("span",[t._v("用无限适用于未来的方法，置换体内星辰河流。")])])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"imgBox"},t._l(t.item.imageUrl,function(s){return e("img",{key:s,staticClass:"img",attrs:{src:s},on:{click:function(e){t.bigImage(s)}}})})),t._v(" "),e("p",[t._v(t._s(t.item.content))])]),t._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"good"},[e("svg",{staticClass:"items-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-dianzan2"}})]),t._v(" "),e("span",{staticClass:"number"},[t._v(t._s(t.item.good))])]),t._v(" "),e("div",{staticClass:"comment-icon"},[e("svg",{staticClass:"items-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-pinglun"}})]),t._v(" "),e("span",{staticClass:"comment"},[t._v(t._s(t.item.commentNumber)+" 条评论")])])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("img",{attrs:{src:"https://i.loli.net/2017/08/19/5997affaf2cda.jpg"}}),t._v(" "),e("span",[t._v("Brown")]),t._v(" "),e("span",[t._v(":")]),t._v(" "),e("p",[t._v("我能吞下玻璃而不伤身体，The quick brown fox jumps over the lazy dog.")])])}]}},87:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Lost"},[e("div")])}]}},88:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Notice"},[e("div")])}]}},89:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.startshow,expression:"startshow"}],staticClass:"start",attrs:{id:"start"},on:{click:function(s){t.startshow=t.startshow,t.homeshow=t.homeshow}}},[e("div",{staticClass:"icon-box"},[e("svg",{staticClass:"icon animated bounce",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-xin"}})]),t._v(" "),e("p",{staticClass:"animated bounce"},[t._v("Confession Wall")])]),t._v(" "),e("div",{staticClass:"main-button"},[e("el-button",{staticClass:"Confessionshow animated bounce",on:{click:function(s){t.formshow=!t.formshow}}},[t._v("登 录")]),t._v(" "),e("el-button",{staticClass:"Confessionshow animated bounce",on:{click:function(s){t.formshow=!t.formshow,t.move()}}},[t._v("注 册")])],1),t._v(" "),e("transition",{attrs:{name:"el-fade-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.formshow,expression:"formshow"}],staticClass:"form"},[e("div",{staticClass:"register"},[e("h1",[t._v("注册")]),t._v(" "),e("p",[t._v("在墙上闲扯")]),t._v(" "),e("form",{staticClass:"register-form",attrs:{autocomplete:"off"}},[e("input",{attrs:{type:"text",placeholder:"用户名",id:"inputUsername"}}),t._v(" "),e("input",{attrs:{type:"password",placeholder:"密码",id:"inputPassword"}}),t._v(" "),e("input",{attrs:{type:"text",placeholder:"邮箱",id:"inputEmail"}}),t._v(" "),e("el-button",{staticClass:"el-register",attrs:{type:"primary"},on:{click:function(s){t.register()}}},[t._v("注册")])],1)]),t._v(" "),e("div",{staticClass:"login"},[e("h1",[t._v("登录")]),t._v(" "),e("p",[t._v("在墙上分享你的")]),t._v(" "),e("form",{staticClass:"login-form",attrs:{autocomplete:"off"}},[e("input",{attrs:{type:"text",placeholder:"Username",id:"signinUsername"}}),t._v(" "),e("input",{attrs:{type:"password",placeholder:"password",id:"signinPassword"}}),t._v(" "),e("el-button",{staticClass:"el-signin",attrs:{type:"primary"},on:{click:function(s){t.login()}}},[t._v("登 录")])],1)]),t._v(" "),e("div",{staticClass:"slider",attrs:{id:"slider"}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-xin"}})]),t._v(" "),e("h1",[t._v("W a l l")]),t._v(" "),e("p",[t._v("Just say ! Just now !")])])])])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.homeshow,expression:"homeshow"}],staticClass:"home",attrs:{id:"home"}},[e("div",{staticClass:"topbar"},[e("div",{staticClass:"logo"},[e("svg",{staticClass:"icon animated fadeInDown",attrs:{id:"icon","aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-xin"}})]),t._v(" "),e("h3",{staticClass:"animated fadeInDown"},[t._v("Confession Wall")])]),t._v(" "),e("div",{staticClass:"nav animated fadeInDown"},[e("el-button",{staticClass:"nav-item",attrs:{type:"text"},on:{click:[function(s){t.Confession()},function(s){t.Confessionshow=!0}]}},[t._v("表 白 墙")]),t._v(" "),e("el-button",{staticClass:"nav-item",attrs:{type:"text"},on:{click:[function(s){t.Lost()},function(s){t.Lostshow=!t.Lostshow}]}},[t._v("失 物 招 领")]),t._v(" "),e("el-button",{staticClass:"nav-item",attrs:{type:"text"},on:{click:[function(s){t.Notice()},function(s){t.Noticeshow=!0}]}},[t._v("各 类 通 知")])],1),t._v(" "),e("div",{staticClass:"link-box"},[e("button",{staticClass:"xx animated fadeInDown",attrs:{id:"link"},on:{click:function(s){t.logOut()}}},[t._v("登 出")])])]),t._v(" "),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"userForm"},[e("form",{staticClass:"user-form",attrs:{action:""}},[e("input",{staticClass:"upImage",attrs:{type:"file",id:"userImage"}}),t._v(" "),e("img",{staticClass:"userImage",attrs:{src:"https://i.loli.net/2017/08/19/5997affaf2cda.jpg",alt:""}}),t._v(" "),e("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(s){t.save()}}},[t._v("确认修改")])],1)])]),t._v(" "),e("div",{staticClass:"main animated fadeIn"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-xin"}})]),t._v(" "),e("h1",[t._v("天农，表白，墙")]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),e("transition",{attrs:{name:"el-zoom-in-bottom"}},[e("Confession",{directives:[{name:"show",rawName:"v-show",value:t.Confessionshow,expression:"Confessionshow"}],attrs:{user:t.user}})],1),t._v(" "),e("transition",{attrs:{name:"el-zoom-in-bottom"}},[e("Lost",{directives:[{name:"show",rawName:"v-show",value:t.Lostshow,expression:"Lostshow"}]})],1),t._v(" "),e("transition",{attrs:{name:"el-zoom-in-bottom"}},[e("Lost",{directives:[{name:"show",rawName:"v-show",value:t.Noticeshow,expression:"Noticeshow"}]})],1),t._v(" "),e("div",{staticClass:"nav-icon",attrs:{id:"nav-icon"}},[e("svg",{staticClass:"icon animated fadeInRight",attrs:{"aria-hidden":"true"},on:{click:[function(s){t.Confession()},function(s){t.Confessionshow=!0,t.Lostshow=!1,t.Noticeshow=!1}]}},[e("use",{attrs:{"xlink:href":"#icon-xin1"}})]),t._v(" "),e("svg",{staticClass:"icon animated fadeInRight",attrs:{"aria-hidden":"true"},on:{click:[function(s){t.Lost()},function(s){t.Confessionshow=!0,t.Lostshow=!0}]}},[e("use",{attrs:{"xlink:href":"#icon-wenhao"}})]),t._v(" "),e("svg",{staticClass:"icon animated fadeInRight",attrs:{"aria-hidden":"true"},on:{click:[function(s){t.Notice()},function(s){t.Noticeshow=!0}]}},[e("use",{attrs:{"xlink:href":"#icon-tongzhi"}})])]),t._v(" "),e("div",{staticClass:"back-button animated fadeInLeft"},[e("button",{staticClass:"back",attrs:{type:"text",id:"back"},on:{click:[function(s){t.back()},function(s){t.Confessionshow=!1,t.Lostshow=!1,t.Noticeshow=!1}]}},[e("p",[t._v("回")]),t._v(" "),e("p",[t._v("到")]),t._v(" "),e("p",[t._v("首")]),t._v(" "),e("p",[t._v("页")])])])],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"greet"},[e("p",[t._v("你好 ")]),e("p",{attrs:{id:"username"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer animated fadeInUp"},[e("p",[t._v("设计参考于-Jared Granger")])])}]}},90:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Confession"},[e("div",{staticClass:"view"},[e("div",{staticClass:"Confession-box",attrs:{id:"box"}},[e("div",{staticClass:"items"},t._l(t.ConfessionData,function(s,n){return e("div",{key:s.username,staticClass:"item",on:{click:function(s){t.Windowshow=!0,t.getIndex(n)}}},[e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://i.loli.net/2017/08/19/5997affaf2cda.jpg"}}),t._v(" "),e("div",{staticClass:"username"},[e("h4",[t._v(t._s(s.username))]),t._v(" "),e("span",[t._v("用无限适用于未来的方法，置换体内星辰河流。")])])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"imgBox"},[e("img",{staticClass:"img",attrs:{src:s.imageUrl[0]}})]),t._v(" "),e("p",[t._v(t._s(s.content))])]),t._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"good"},[e("svg",{staticClass:"items-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-dianzan2"}})]),t._v(" "),e("span",{staticClass:"number"},[t._v(t._s(s.good))])]),t._v(" "),e("div",{staticClass:"comment-icon"},[e("svg",{staticClass:"items-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-pinglun"}})]),t._v(" "),e("span",[t._v(t._s(s.commentNumber)+" 条评论")])])])])}))])]),t._v(" "),e("el-button",{staticClass:"icon",on:{click:function(s){t.editorshow=!0}}},[e("i",{staticClass:"el-icon-plus"})]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right",on:{click:function(s){t.rightmove()}}}),t._v(" "),e("i",{staticClass:"el-icon-arrow-left",on:{click:function(s){t.leftmove()}}}),t._v(" "),e("transition",{attrs:{name:"el-fade-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.Windowshow,expression:"Windowshow"}]},[e("el-button",{staticClass:"dialog-close",attrs:{type:"text"}},[e("i",{staticClass:"el-icon-close",on:{click:function(s){t.Windowshow=!1}}})]),t._v(" "),e("Window",{attrs:{user:t.user,ConfessionData:t.ConfessionData,item:t.item}})],1)]),t._v(" "),e("transition",{attrs:{name:"el-fade-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editorshow,expression:"editorshow"}],staticClass:"wrapper"},[e("div",{staticClass:"editor"},[e("el-button",{staticClass:"editor-close",attrs:{type:"text"}},[e("i",{staticClass:"el-icon-close",on:{click:function(s){t.editorshow=!1}}})]),t._v(" "),e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://i.loli.net/2017/08/19/5997affaf2cda.jpg"}}),t._v(" "),e("div",{staticClass:"username"},[e("h4",[t._v(t._s(t.user.username))]),t._v(" "),e("p",[t._v("用无限适用于未来的方法，置换体内星辰河流。")])])]),t._v(" "),e("div",{staticClass:"editable"},[e("svg",{staticClass:"editable-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zhaoxiang"}})]),t._v(" "),e("input",{staticClass:"upImage",attrs:{type:"file",id:"photoFileUpload"}})]),t._v(" "),e("el-input",{staticClass:"textArea",attrs:{type:"textarea",rows:5,placeholder:"写什么都行..."},model:{value:t.textarea,callback:function(s){t.textarea=s},expression:"textarea"}}),t._v(" "),e("div",{staticClass:"imageBox",attrs:{id:"imageBox"}}),t._v(" "),e("div",{staticClass:"submit"},[e("el-button",{attrs:{type:"primary"},on:{click:function(s){t.save()}}},[t._v("提交发表")])],1)],1)])])],1)},staticRenderFns:[]}},91:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("Home")],1)},staticRenderFns:[]}}},[57]);
//# sourceMappingURL=app.ffc5ffb3ce382de409b6.js.map