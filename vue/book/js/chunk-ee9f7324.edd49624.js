(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee9f7324"],{"3a60":function(t,e,s){},"857a":function(t,e,s){var o=s("1d80"),r=/"/g;t.exports=function(t,e,s,i){var a=String(o(t)),n="<"+e;return""!==s&&(n+=" "+s+'="'+String(i).replace(r,"&quot;")+'"'),n+">"+a+"</"+e+">"}},9911:function(t,e,s){"use strict";var o=s("23e7"),r=s("857a"),i=s("af03");o({target:"String",proto:!0,forced:i("link")},{link:function(t){return r(this,"a","href",t)}})},af03:function(t,e,s){var o=s("d039");t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b125:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chapters"},[s("van-nav-bar",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{"left-arrow":"",title:t.chapterText.title,fixed:""},on:{"click-left":t.back}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSideMole,expression:"!isSideMole"}],staticClass:"showTool",on:{click:t.showTool}}),s("div",{staticClass:"chapters-title"},[s("p",[t._v(t._s(t.chapterText.title))])]),s("div",{ref:"viewBox",staticClass:"view-box",on:{click:t.showTool}},[s("div",{staticClass:"chapters-text"},t._l(t.chapterTextList,(function(e,o){return s("div",{key:o,staticClass:"chapters-item"},[s("h2",[t._v(t._s(e.title))]),t._l(e.cpContent,(function(e,o){return s("div",{key:o,staticClass:"book-chapTexts"},[t._v(t._s(e))])}))],2)})),0)])],1)},r=[],i=(s("9911"),s("3a60"),{data:function(){return{chapterTextList:[],isShow:!1}},created:function(){this.chapterTextList.push(this.chapterText),console.log("chapterText==>",this.chapterText),console.log("chaptersList==>",this.chaptersList),console.log("chapterHistory==>",this.chapterHistory)},computed:{isSideMole:function(){return this.$store.state.chaptersStore.isSideMole},chapterText:function(){return this.$store.state.chaptersStore.chapterText},chaptersList:function(){return this.$store.state.chaptersStore.chaptersList},chapterHistory:function(){return this.$store.state.chaptersStore.chapterHistory}},mounted:function(){var t=this;this.$refs.viewBox.addEventListener("scroll",(function(){var e=t.$refs["viewBox"];e.scrollHeight==e.scrollTop+e.offsetHeight&&(console.log("到底了"),t.getNextChapters())}),!0)},methods:{back:function(){this.$router.go(-1)},showTool:function(){this.isShow=!this.isShow},getNextChapters:function(){var t=this;if(this.chapterHistory>=this.$store.state.directoryList.length)this.$toast("没有下一章了");else{var e=this.$store.state.directoryList[this.chapterHistory].link;console.log(e),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/chapters/"+encodeURIComponent(e)}).then((function(e){t.$toast.clear(),console.log(e),t.$store.dispatch("chaptersStore/setChapterText",e.data.chapter).then((function(e){t.chapterTextList.push(e),console.log(t.chapterTextList);var s=t.chapterHistory;s++,s<=t.$store.state.directoryList.length&&t.$store.dispatch("chaptersStore/setChapterHistory",s)}))}))}}}}),a=i,n=s("2877"),c=Object(n["a"])(a,o,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-ee9f7324.edd49624.js.map