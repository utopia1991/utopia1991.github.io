webpackJsonp([8],{gWnf:function(s,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={name:"refund",components:{TabBar:a("ldOZ").a},data:function(){return{value:"",activeKey:0,activeClass:0,error:!1,show:!1,loading:!1,spreadArray:[],moreImg:a("Idy3"),sideBars:[{name:"收藏",id:10},{name:"热门",id:0},{name:"新品",id:1},{name:"商超购物",id:2},{name:"影视下载",id:3},{name:"游戏点卡",id:4},{name:"甜品饮品",id:5},{name:"生活服务",id:6},{name:"美食生鲜",id:7},{name:"运动出行",id:8},{name:"音乐读书",id:9}],leftSection:[{name:"美食视频通兑券鲜",id:0,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"爱奇艺视频",id:1,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"票神",id:2,url:"http://image.99shou.cn/self/coupons/logos/票神.png!img"},{name:"腾讯视频",id:3,url:"http://image.99shou.cn/self/coupons/logos/腾讯.png!img"},{name:"百度网盘",id:4,url:"http://image.99shou.cn/self/coupons/logos/百度网盘.png!img"},{name:"咪咕阅读",id:5,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"芒果视频",id:6,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:7,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:8,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:9,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:10,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"},{name:"美食视频通兑券鲜",id:11,url:"http://image.99shou.cn/self/coupons/logos/爱奇艺.png!img"}],list:[]}},computed:{},created:function(){this.initList()},methods:{showClass:function(s){this.activeClass=s.id},showPopup:function(){this.show=!0},searchAndHidePopup:function(s){this.activeClass=s.id,this.show=!1},initList:function(){var s=[{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30平安RUN、每日10点光大银行15买30",id:1,price:25,star:!0,sell:0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN",price:25,id:2},{title:"25收百果园30代金券",desc:"银联*平安*光大",price:25,id:3,sell:0},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:4},{title:"25收百果园30代金券",desc:"银联*平安*光大*平安RUN、每日10点光大银行15买30",price:25,id:5}];this.list=s;for(var e=0;e<s.length;e++){s[e].desc.length>=20?this.spreadArray[e]=!0:this.spreadArray[e]=!1}},goParchase:function(s){this.$router.push({path:"/parchase",query:{id:s.id}})},onSearch:function(s){this.$toast(s)},onCancel:function(){this.$toast("取消")},spreadDesc:function(s){this.spreadArray[s]=!1}}},i={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"index-wrap"},[a("form",{attrs:{action:"/"}},[a("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:s.onSearch,cancel:s.onCancel},model:{value:s.value,callback:function(e){s.value=e},expression:"value"}})],1),s._v(" "),a("van-row",[a("van-col",{attrs:{span:"5"}},[a("van-sidebar",{model:{value:s.activeKey,callback:function(e){s.activeKey=e},expression:"activeKey"}},s._l(s.sideBars,function(s,e){return a("van-sidebar-item",{key:e,attrs:{title:s.name}})}),1)],1),s._v(" "),a("van-col",{attrs:{span:"19"}},[a("van-grid",[s._l(s.leftSection.slice(0,7),function(e,t){return a("van-grid-item",{key:t,class:e.id===s.activeClass?"activeClass":"",attrs:{text:e.name}},[a("van-image",{attrs:{src:e.url},on:{click:function(a){return s.showClass(e)}}})],1)}),s._v(" "),a("van-grid-item",[a("van-image",{attrs:{src:s.moreImg},on:{click:s.showPopup}})],1)],2),s._v(" "),a("van-divider",[s._v("券列表")]),s._v(" "),a("van-list",s._l(s.list,function(e,t){return a("van-cell",{key:t,staticClass:"list",class:0===e.sell?"disabled":"",on:{click:function(a){return s.goParchase(e)}}},[a("div",{staticClass:"title"},[s._v(s._s(e.title))]),s._v(" "),a("div",{staticClass:"desc"},[a("span",{class:["words",!1===s.spreadArray[t]?"more":""]},[s._v("\n              "+s._s(e.desc)+"\n            ")]),s._v(" "),!0===s.spreadArray[t]?a("van-icon",{staticClass:"spread",attrs:{name:"ellipsis",size:"20"},on:{click:function(e){return s.spreadDesc(t)}}}):s._e()],1),s._v(" "),a("div",[a("span",{staticClass:"fl price"},[s._v("¥"+s._s(e.price))]),s._v(" "),!0===e.star?a("van-icon",{staticClass:"fr",attrs:{name:"star-o",color:"#07c160",size:"20"}}):a("van-icon",{staticClass:"fr",attrs:{name:"star",color:"#07c160",size:"20"}})],1)])}),1)],1)],1),s._v(" "),a("van-popup",{style:{height:"70%"},attrs:{closeable:"","close-icon":"close","close-icon-position":"bottom-right",position:"top"},model:{value:s.show,callback:function(e){s.show=e},expression:"show"}},[a("van-grid",s._l(s.leftSection,function(e,t){return a("van-grid-item",{key:t,class:e.id===s.activeClass?"activeClass":"",attrs:{text:e.name},on:{click:function(a){return s.searchAndHidePopup(e)}}},[a("van-image",{attrs:{src:e.url}})],1)}),1)],1),s._v(" "),a("TabBar")],1)},staticRenderFns:[]},n=a("VU/8")(t,i,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=8.63ca280d34ad8d804074.js.map