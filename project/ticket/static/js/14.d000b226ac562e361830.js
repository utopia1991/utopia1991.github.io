webpackJsonp([14],{"2NXm":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"index",components:{TabBar:t("ldOZ").a},data:function(){return{value:"",activeKey:0,error:!1,show:!1,loading:!1,spreadArray:[],moreImg:t("Idy3"),sideBars:[{name:"收藏",id:10},{name:"热门",id:0},{name:"新品",id:1},{name:"商超购物",id:2},{name:"影视下载",id:3},{name:"游戏点卡",id:4},{name:"甜品饮品",id:5},{name:"生活服务",id:6},{name:"美食生鲜",id:7},{name:"运动出行",id:8},{name:"音乐读书",id:9}],leftSection:[{name:"爱奇艺视频",id:1,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"票神",id:2,url:"http://image.99shou.cn/self/coupons/logos/票神.png!img"},{name:"腾讯视频",id:3,url:"http://image.99shou.cn/self/coupons/logos/腾讯.png!img"},{name:"百度网盘",id:4,url:"http://image.99shou.cn/self/coupons/logos/百度网盘.png!img"},{name:"咪咕阅读",id:5,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"芒果视频",id:6,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:7,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:8,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:9,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:10,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:11,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:2,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"}],list:[]}},computed:{},created:function(){this.initList()},methods:{showPopup:function(){this.show=!0},searchAndHidePopup:function(){this.show=!1},initList:function(){var e=[{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30",id:1,price:25,star:!0,sell:0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN",price:25,id:2},{title:"25收百果园30代金券",desc:"银联*平安*光大",price:25,id:3,sell:0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:4},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:5}];this.list=e;for(var s=0;s<e.length;s++){e[s].desc.length>=20?this.spreadArray[s]=!0:this.spreadArray[s]=!1}},goParchase:function(e){this.$router.push({path:"/parchase",query:{id:e.id}})},onSearch:function(e){this.$toast(e)},onCancel:function(){this.$toast("取消")},spreadDesc:function(e){this.spreadArray[e]=!1}}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"index-wrap"},[t("form",{attrs:{action:"/"}},[t("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:e.onSearch,cancel:e.onCancel},model:{value:e.value,callback:function(s){e.value=s},expression:"value"}})],1),e._v(" "),t("van-row",[t("van-col",{attrs:{span:"5"}},[t("van-sidebar",{model:{value:e.activeKey,callback:function(s){e.activeKey=s},expression:"activeKey"}},e._l(e.sideBars,function(e,s){return t("van-sidebar-item",{key:s,attrs:{title:e.name}})}),1)],1),e._v(" "),t("van-col",{attrs:{span:"19"}},[t("van-grid",{attrs:{gutter:8}},[e._l(e.leftSection.slice(0,7),function(e,s){return t("van-grid-item",{key:s,attrs:{text:e.name}},[t("van-image",{attrs:{src:e.url}})],1)}),e._v(" "),t("van-grid-item",[t("van-image",{attrs:{src:e.moreImg},on:{click:e.showPopup}})],1)],2),e._v(" "),t("van-divider"),e._v(" "),t("van-list",e._l(e.list,function(s,n){return t("van-cell",{key:n,staticClass:"list",class:0===s.sell?"disabled":"",on:{click:function(t){return e.goParchase(s)}}},[t("div",{staticClass:"title"},[e._v(e._s(s.title))]),e._v(" "),t("div",{staticClass:"desc"},[t("span",{class:["words",!1===e.spreadArray[n]?"more":""]},[e._v("\n              "+e._s(s.desc)+"\n            ")]),e._v(" "),!0===e.spreadArray[n]?t("van-icon",{staticClass:"spread",attrs:{name:"ellipsis",size:"20"},on:{click:function(s){return e.spreadDesc(n)}}}):e._e()],1),e._v(" "),t("div",[t("span",{staticClass:"fl price"},[e._v("¥"+e._s(s.price))]),e._v(" "),!0===s.star?t("van-icon",{staticClass:"fr",attrs:{name:"star-o",color:"#07c160",size:"20"}}):t("van-icon",{staticClass:"fr",attrs:{name:"star",color:"#07c160",size:"20"}})],1)])}),1)],1)],1),e._v(" "),t("van-popup",{style:{height:"70%"},attrs:{closeable:"","close-icon":"close","close-icon-position":"bottom-right",position:"top"},model:{value:e.show,callback:function(s){e.show=s},expression:"show"}},[t("van-grid",{attrs:{gutter:8}},e._l(e.leftSection,function(s,n){return t("van-grid-item",{key:n,attrs:{text:s.name},on:{click:e.searchAndHidePopup}},[t("van-image",{attrs:{src:s.url}})],1)}),1)],1),e._v(" "),t("TabBar")],1)},staticRenderFns:[]},i=t("VU/8")(n,a,!1,null,null,null);s.default=i.exports}});
//# sourceMappingURL=14.d000b226ac562e361830.js.map