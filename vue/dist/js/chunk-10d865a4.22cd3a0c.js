(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d865a4"],{"8f1f":function(a,t,o){a.exports=o.p+"img/logo1.63c8135f.png"},"94bf":function(a,t,o){},a55b:function(a,t,o){"use strict";o.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-bar"},[s("van-nav-bar",{attrs:{"left-text":"返回","right-text":"关闭"},on:{"click-right":a.toHome},scopedSlots:a._u([{key:"left",fn:function(){return[s("div",{staticClass:"logo fl"},[s("img",{attrs:{src:o("8f1f"),alt:""}})])]},proxy:!0}])})],1),s("div",{staticClass:"login-form"},[a._m(0),s("van-form",[s("van-field",{attrs:{name:"手机号",placeholder:"手机号"},model:{value:a.loginData.phone,callback:function(t){a.$set(a.loginData,"phone",t)},expression:"loginData.phone"}}),s("van-field",{attrs:{type:a.isPasswordShow?"text":"password",name:"密码",placeholder:"密码","right-icon":a.isPasswordShow?"eye-o":"closed-eye"},on:{"click-right-icon":a.showPassword},model:{value:a.loginData.password,callback:function(t){a.$set(a.loginData,"password",t)},expression:"loginData.password"}}),s("div",{staticClass:"btn"},[s("div",{staticClass:"forgot fr",on:{click:a.forgot}},[a._v("忘记密码？")]),s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#0b34ba"},on:{click:a.login}},[a._v("登录")]),s("div",{staticClass:"signup"},[s("span",{on:{click:a.showPopup}},[a._v("注册")])]),s("van-popup",{style:{height:"55%"},attrs:{round:"",closeable:"",position:"bottom","overlay-class":"popup-mask"},model:{value:a.show,callback:function(t){a.show=t},expression:"show"}},[s("div",{staticClass:"signup-form"},[s("h1",[a._v("注册")]),s("van-form",[s("van-field",{attrs:{type:"tel",placeholder:"手机号 中国（+86）"},model:{value:a.signupData.phone,callback:function(t){a.$set(a.signupData,"phone",t)},expression:"signupData.phone"}}),s("van-field",{attrs:{type:"text",name:"昵称",placeholder:"昵称"},model:{value:a.signupData.nickName,callback:function(t){a.$set(a.signupData,"nickName",t)},expression:"signupData.nickName"}}),s("van-field",{attrs:{type:a.isPasswordShow?"text":"password",name:"密码",placeholder:"密码","right-icon":a.isPasswordShow?"eye-o":"closed-eye"},on:{"click-right-icon":a.showPassword},model:{value:a.signupData.password,callback:function(t){a.$set(a.signupData,"password",t)},expression:"signupData.password"}}),s("div",{staticClass:"btn"},[s("van-button",{attrs:{round:"",block:"",color:"#0b34ba"},on:{click:a.signup}},[a._v("注册")])],1)],1)],1)])],1)],1)],1)])},e=[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"form-title"},[o("h3",[a._v("欢迎回来！")]),o("p",[a._v(" Please login to your accounts ")])])}],n=(o("94bf"),o("e3a8")),i=o("2f14"),r={data:function(){return{loginData:{phone:"",password:""},signupData:{phone:"",nickName:"",password:""},isPasswordShow:!1,show:!1}},methods:{toHome:function(){this.$router.push({name:"Home"})},showPassword:function(){this.isPasswordShow=!this.isPasswordShow},showPopup:function(){this.show=!0},forgot:function(){this.$router.push({name:"Forgot"})},signup:function(){var a=this,t=this.signupData,o={phone:{value:t.phone,reg:/^1[3-9]\d{9}$/,errorMsg:"手机号码格式不正确"},nickName:{value:t.nickName,reg:/^[\w\u4e00-\u9fa5]{1,10}$/,errorMsg:"昵称格式不正确"},password:{value:t.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"密码格式不正确"}};if(n["a"].valid(o)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var s=Object.assign({},t);s.appkey=this.appkey;var e=i["a"].queryString(s);this.axios({method:"POST",url:"/register",data:e}).then((function(o){if(a.$toast.clear(),100==o.data.code)for(var s in a.show=!1,t)t[s]="";else a.$notify({type:"warning",message:o.data.msg})})).catch((function(t){a.$toast.clear()}))}},login:function(){var a=this,t=this.loginData,o={phone:{value:t.phone,reg:/^1[3-9]\d{9}$/,errorMsg:"手机号码格式不正确"},password:{value:t.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"密码格式不正确"}};if(n["a"].valid(o)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var s=Object.assign({},t);s.appkey=this.appkey;var e=i["a"].queryString(s);this.axios({method:"POST",url:"/login",data:e}).then((function(t){a.$toast.clear(),200==t.data.code?(localStorage.setItem("YXCFTK",t.data.token),a.$router.push({name:"Home"})):a.$notify({type:"warning",message:t.data.msg})})).catch((function(t){a.$toast.clear()}))}}}},l=r,c=o("2877"),p=Object(c["a"])(l,s,e,!1,null,null,null);t["default"]=p.exports},e3a8:function(a,t,o){"use strict";o.d(t,"a",(function(){return l}));var s=o("d4ec"),e=o("bee2"),n=(o("9a83"),o("f564")),i=o("2b0e");i["a"].use(n["a"]);var r=function(){function a(){Object(s["a"])(this,a)}return Object(e["a"])(a,[{key:"valid",value:function(a){for(var t in a)if(!a[t].reg.test(a[t].value))return Object(n["a"])({type:"warning",message:a[t].errorMsg}),!1;return!0}}]),a}(),l=new r}}]);
//# sourceMappingURL=chunk-10d865a4.22cd3a0c.js.map