webpackJsonp([2],{Ci4z:function(t,e){},nbMf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-wrap"},[a("van-nav-bar",{attrs:{title:"我的卖单","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("form",{attrs:{action:"/"}},[a("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),a("div",{staticClass:"more-search"},[t._v("\n    高级搜索\n    "),a("van-icon",{attrs:{name:"arrow"}})],1),t._v(" "),a("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"待审核"}}),t._v(" "),a("van-tab",{attrs:{title:"交易中"}}),t._v(" "),a("van-tab",{attrs:{title:"纠纷中"}}),t._v(" "),a("van-tab",{attrs:{title:"已关闭"}}),t._v(" "),a("van-tab",{attrs:{title:"已完成"}})],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"orders",data:function(){return{value:"",active:0,list:[]}},computed:{},created:function(){this.initList()},methods:{onClickLeft:function(){this.$router.push({path:"/user"})},initList:function(){var t=[{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30",id:1,price:25,star:!0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN",price:25,id:2},{title:"25收百果园30代金券",desc:"银联*平安*光大",price:25,id:3},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:4},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:5}];this.list=t;for(var e=0;e<t.length;e++)t[e].desc.length>=20?this.spreadArray[e]=!0:this.spreadArray[e]=!1},onSearch:function(t){this.$toast(t)},onCancel:function(){this.$toast("取消")}}},i,!1,function(t){a("Ci4z")},null,null);e.default=n.exports}});
//# sourceMappingURL=2.eb18f9dff4a4c0d1bbb4.js.map