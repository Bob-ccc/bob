(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c179dbc"],{"305b":function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"secure"},[s("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),s("div",{staticClass:"secure-box"},[s("div",[s("van-cell",{attrs:{title:"修改密码",isLink:""},on:{click:t.openPasswordPopup}}),s("van-cell",{attrs:{title:"注销账号",isLink:""},on:{click:t.destroyAccount}})],1),s("div",{staticClass:"btn-box"},[s("van-button",{attrs:{round:"",block:"",color:"#0C34BA"},on:{click:t.logout}},[t._v("退出登录")])],1)]),s("van-popup",{staticClass:"popup-box",attrs:{closeable:"",position:"bottom"},model:{value:t.isOpen,callback:function(o){t.isOpen=o},expression:"isOpen"}},[s("div",{staticClass:"popup-item"},[s("div",{staticClass:"password-text"},[s("h2",[t._v("修改密码")])]),s("van-form",[t._l(t.passwords,(function(o,a){return s("van-field",{key:a,attrs:{type:o.isPassword?"password":"text",label:o.title,placeholder:"6-16位密码且以字母开头","right-icon":o.isPassword?"closed-eye":"eye-o"},on:{"click-right-icon":function(s){return t.viewPassword(o)}},model:{value:o.password,callback:function(s){t.$set(o,"password",s)},expression:"item.password"}})})),s("div",{staticClass:"login-btn"},[s("van-button",{attrs:{round:"",block:"",color:"#0C34BA","native-type":"submit"},on:{click:t.confirmPassword}},[t._v("确认修改")])],1)],2)],1)])],1)},e=[],n=(s("6d93"),s("2f14")),r=s("e3a8"),i={data:function(){return{isOpen:!1,passwords:{old:{password:"",isPassword:!0,title:"旧密码"},new:{password:"",isPassword:!0,title:"新密码"}}}},created:function(){},methods:{back:function(){this.$router.go(-1)},viewPassword:function(t){t.isPassword=!t.isPassword},openPasswordPopup:function(){this.isOpen=!0},confirmPassword:function(){var t=this,o=localStorage.getItem("YXCFTK");if(!o)return this.$router.push({name:"Login"});var s={oldPassword:{value:this.passwords.old.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"旧密码支持字母数字_组合"},password:{value:this.passwords.new.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"新密码支持字母数字_组合"}};if(r["a"].valid(s)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var a=n["a"].queryString({appkey:this.appkey,tokenString:o,oldPassword:this.passwords.old.password,password:this.passwords.new.password});this.axios({method:"POST",url:"/updatePassword",data:a}).then((function(o){t.$toast.clear(),"E001"==o.data.code?(localStorage.removeItem("YXCFTK"),t.$router.push({name:"Login"})):t.$notify({type:"warning",message:o.data.msg})})).catch((function(o){t.$toast.clear()}))}},destroyAccount:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"是否确认注销号，一旦确认无法恢复！",confirmButtonColor:"#0C34BA"}).then((function(){var o=localStorage.getItem("YXCFTK");if(!o)return t.$router.push({name:"Login"});t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var s=n["a"].queryString({appkey:t.appkey,tokenString:o});t.axios({method:"POST",url:"/destroyAccount",data:s}).then((function(o){t.$toast.clear(),t.$toast(o.data.msg),"G001"==o.data.code&&(localStorage.removeItem("YXCFTK"),setTimeout((function(){t.$router.push({name:"Login"})}),600))})).catch((function(o){t.$toast.clear()}))})).catch((function(){}))},logout:function(){var t=this;this.$dialog.confirm({title:"退出登录",message:"是否确认退出登录！",confirmButtonColor:"#0C34BA"}).then((function(){t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),localStorage.removeItem("YXCFTK"),setTimeout((function(){t.$toast.clear(),t.$router.push({name:"Login"})}),1e3)})).catch((function(t){}))}}},c=i,l=s("2877"),d=Object(l["a"])(c,a,e,!1,null,null,null);o["default"]=d.exports},"6d93":function(t,o,s){},e3a8:function(t,o,s){"use strict";s.d(o,"a",(function(){return c}));var a=s("d4ec"),e=s("bee2"),n=(s("9a83"),s("f564")),r=s("2b0e");r["a"].use(n["a"]);var i=function(){function t(){Object(a["a"])(this,t)}return Object(e["a"])(t,[{key:"valid",value:function(t){for(var o in t)if(!t[o].reg.test(t[o].value))return Object(n["a"])({type:"warning",message:t[o].errorMsg}),!1;return!0}}]),t}(),c=new i}}]);
//# sourceMappingURL=chunk-0c179dbc.81a08da3.js.map