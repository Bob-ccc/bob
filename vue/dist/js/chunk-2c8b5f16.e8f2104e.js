(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c8b5f16"],{"64c7":function(s,t,e){},"76a1":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"pay"},[e("van-nav-bar",{attrs:{fixed:"",title:"提交订单","left-text":"返回","left-arrow":""},on:{"click-left":s.back}}),e("div",{staticClass:"pay-box"},[e("div",{staticClass:"pay-card adress-box"},[e("div",{staticClass:"shipping-address",on:{click:s.openAddressBox}},[e("span",[s._v("选择收货地址")]),e("van-icon",{attrs:{size:"14",name:"arrow"}})],1),e("div",{staticClass:"user-name user-info-box"},[e("span",[s._v("用户名：")]),e("span",[s._v(s._s(s.currentAddress.name))])]),e("div",{staticClass:"tel-number user-info-box"},[e("span",[s._v("电话号码：")]),e("span",[s._v(s._s(s.currentAddress.tel))])]),e("div",{staticClass:"particular-address user-info-box"},[e("span",[s._v("详细地址：")]),e("span",[s._v(s._s(s.currentAddress.address))])])]),e("div",{staticClass:"pay-card order-infor"},[e("h3",[s._v("订单信息")]),s._l(s.shopbagDataBySids,(function(t,a){return e("div",{key:a,staticClass:"pro-card clearfix"},[e("van-swipe-cell",[e("van-cell",{attrs:{border:!1}},[e("div",{staticClass:"pro-img fl"},[e("img",{staticClass:"auto-img",attrs:{src:t.small_img,alt:""}})]),e("div",{staticClass:"card-info fr"},[e("div",{staticClass:"pro-info"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"fl pro-name"},[s._v(s._s(t.name))]),e("div",{staticClass:"fl pro-rule"},[s._v(s._s(t.rule))])]),e("div",{staticClass:"pro-enname"},[s._v(s._s(t.enname))])]),e("div",{staticClass:"pro-price"},[e("div",{staticClass:"pro-price-text"},[s._v("￥"+s._s(t.price))]),e("div",{staticClass:"pro-price-count"},[s._v("x"+s._s(t.count))])])])])],1)],1)}))],2)]),e("van-submit-bar",{attrs:{price:s.totalPrices,"button-color":"#0C34BA","button-text":"前往结算"},on:{submit:s.pay}}),e("van-popup",{style:{height:"50%"},attrs:{closeable:"",round:"",position:"bottom"},model:{value:s.isOpen,callback:function(t){s.isOpen=t},expression:"isOpen"}},[e("div",{staticClass:"address-title-box"},[s._v("选择收货地址")]),e("van-address-list",{attrs:{"default-tag-text":"默认",list:s.list},on:{select:s.selectAddress,add:s.newAddress,edit:s.editAddress},model:{value:s.chosenAddressId,callback:function(t){s.chosenAddressId=t},expression:"chosenAddressId"}})],1)],1)},i=[],r=(e("d81d"),e("b0c0"),e("64c7"),e("2f14")),n={data:function(){return{isOpen:!1,chosenAddressId:"",totalPrices:0,shopbagDataBySids:[],sids:[],currentAddress:{},list:[]}},created:function(){this.sids=this.$route.query.sids,this.getShopbagDataBySids(),this.getShippingAddress()},methods:{getShopbagDataBySids:function(){var s=this,t=localStorage.getItem("YXCFTK");t&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:t,sids:this.sids}}).then((function(t){s.$toast.clear(),5e4==t.data.code&&(s.shopbagDataBySids=t.data.result,s.allPrice())})).catch((function(t){s.$toast.clear()})))},getShippingAddress:function(){var s=this,t=localStorage.getItem("YXCFTK");t&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:t}}).then((function(t){s.$toast.clear(),2e4==t.data.code&&t.data.result.map((function(t){var e=t.province+t.city+t.county+t.addressDetail,a={id:t.aid,name:t.name,tel:t.tel,address:e,isDefault:Boolean(t.isDefault)};Boolean(t.isDefault)?(s.chosenAddressId=t.aid,s.currentAddress.name=t.name,s.currentAddress.tel=t.tel,s.currentAddress.address=e,s.list.unshift(a)):s.list.push(a)}))})))},pay:function(){var s=this;if(""!=this.chosenAddressId){var t=localStorage.getItem("YXCFTK");if(t){var e=r["a"].queryString({appkey:this.appkey,tokenString:t,sids:this.sids,phone:this.currentAddress.tel,address:this.currentAddress.address,receiver:this.currentAddress.name});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/pay",data:e}).then((function(t){s.$toast.clear(),s.$toast(t.data.msg),6e4==t.data.code&&s.$router.push({name:"Order"})})).catch((function(t){s.$toast.clear()}))}}else this.$toast("请选择收货地址")},back:function(){this.$router.go(-1)},openAddressBox:function(){this.isOpen=!0},selectAddress:function(s){this.currentAddress=s,this.isOpen=!1},newAddress:function(){this.$router.push({name:"NewAddress"})},editAddress:function(s){var t=s.id;this.$router.push({name:"NewAddress",query:{aid:t}})},allPrice:function(){var s=this;this.totalPrices=0,this.shopbagDataBySids.map((function(t){s.totalPrices+=t.count*t.price})),this.totalPrices*=100}}},d=n,o=e("2877"),c=Object(o["a"])(d,a,i,!1,null,"6138d730",null);t["default"]=c.exports},b0c0:function(s,t,e){var a=e("83ab"),i=e("9bf2").f,r=Function.prototype,n=r.toString,d=/^\s*function ([^ (]*)/,o="name";a&&!(o in r)&&i(r,o,{configurable:!0,get:function(){try{return n.call(this).match(d)[1]}catch(s){return""}}})},b727:function(s,t,e){var a=e("0366"),i=e("44ad"),r=e("7b0b"),n=e("50c4"),d=e("65f0"),o=[].push,c=function(s){var t=1==s,e=2==s,c=3==s,l=4==s,u=6==s,p=5==s||u;return function(h,f,v,m){for(var g,b,y=r(h),A=i(y),C=a(f,v,3),_=n(A.length),x=0,k=m||d,S=t?k(h,_):e?k(h,0):void 0;_>x;x++)if((p||x in A)&&(g=A[x],b=C(g,x,y),s))if(t)S[x]=b;else if(b)switch(s){case 3:return!0;case 5:return g;case 6:return x;case 2:o.call(S,g)}else if(l)return!1;return u?-1:c||l?l:S}};s.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d81d:function(s,t,e){"use strict";var a=e("23e7"),i=e("b727").map,r=e("1dde"),n=e("ae40"),d=r("map"),o=n("map");a({target:"Array",proto:!0,forced:!d||!o},{map:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2c8b5f16.e8f2104e.js.map