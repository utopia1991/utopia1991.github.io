webpackJsonp([12],{"2NXm":function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={name:"index",components:{TabBar:s("ldOZ").a},data:function(){return{value:"",activeKey:0,error:!1,loading:!1,spreadArray:[],sideBars:[{name:"新品",id:0},{name:"快销推荐",id:1},{name:"商超购物",id:2},{name:"影视下载",id:3},{name:"游戏点卡",id:4},{name:"甜品饮品",id:5},{name:"生活服务",id:6},{name:"美食生鲜",id:7},{name:"运动出行",id:8},{name:"音乐读书",id:9},{name:"我的收藏",id:10}],leftSection:[{name:"爱奇艺视频",id:1,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"票神",id:2,url:"http://image.99shou.cn/self/coupons/logos/票神.png!img"},{name:"腾讯视频",id:3,url:"http://image.99shou.cn/self/coupons/logos/腾讯.png!img"},{name:"百度网盘",id:4,url:"http://image.99shou.cn/self/coupons/logos/百度网盘.png!img"},{name:"咪咕阅读",id:5,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"芒果视频",id:6,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:7,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"查看更多",id:8,url:"http://quanma51.com/wap/dist/images/7d71a329.more.png"}],list:[]}},computed:{},created:function(){this.initList()},methods:{initList:function(){var e=[{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30",id:1,price:25,star:!0,sell:0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN",price:25,id:2},{title:"25收百果园30代金券",desc:"银联*平安*光大",price:25,id:3,sell:0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:4},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:5}];this.list=e;for(var a=0;a<e.length;a++){e[a].desc.length>=20?this.spreadArray[a]=!0:this.spreadArray[a]=!1}},onSearch:function(e){this.$toast(e)},onCancel:function(){this.$toast("取消")},spreadDesc:function(e){this.spreadArray[e]=!1,console.log(this.spreadArray)}}},n={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"index-wrap"},[s("form",{attrs:{action:"/"}},[s("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:e.onSearch,cancel:e.onCancel},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),e._v(" "),s("van-row",[s("van-col",{attrs:{span:"5"}},[s("van-sidebar",{model:{value:e.activeKey,callback:function(a){e.activeKey=a},expression:"activeKey"}},e._l(e.sideBars,function(e,a){return s("van-sidebar-item",{key:a,attrs:{title:e.name}})}),1)],1),e._v(" "),s("van-col",{attrs:{span:"19"}},[s("van-grid",{attrs:{gutter:8}},e._l(e.leftSection,function(e,a){return s("van-grid-item",{key:a,attrs:{text:e.name}},[s("van-image",{attrs:{src:e.url}})],1)}),1),e._v(" "),s("van-divider"),e._v(" "),s("van-list",e._l(e.list,function(a,t){return s("van-cell",{key:t,staticClass:"list",class:0===a.sell?"disabled":""},[s("div",{staticClass:"title"},[e._v(e._s(a.title))]),e._v(" "),s("div",{staticClass:"desc"},[s("span",{class:["words",!1===e.spreadArray[t]?"more":""]},[e._v("\n              "+e._s(a.desc)+"\n            ")]),e._v(" "),!0===e.spreadArray[t]?s("van-icon",{staticClass:"spread",attrs:{name:"ellipsis",size:"20"},on:{click:function(a){return e.spreadDesc(t)}}}):e._e()],1),e._v(" "),s("div",[s("span",{staticClass:"fl price"},[e._v("¥"+e._s(a.price))]),e._v(" "),!0===a.star?s("van-icon",{staticClass:"fr",attrs:{name:"star-o",color:"#07c160",size:"20"}}):s("van-icon",{staticClass:"fr",attrs:{name:"star",color:"#07c160",size:"20"}})],1)])}),1)],1)],1),e._v(" "),s("TabBar")],1)},staticRenderFns:[]},i=s("VU/8")(t,n,!1,null,null,null);a.default=i.exports}});
//# sourceMappingURL=12.c310b90a2d3f0c29a624.js.map