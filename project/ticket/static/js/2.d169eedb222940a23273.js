webpackJsonp([2],{nbMf:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"index-wrap"},[e("van-nav-bar",{attrs:{title:"我的卖单","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),e("form",{attrs:{action:"/"}},[e("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),t._v(" "),e("div",{staticClass:"more-search",on:{click:function(a){return t.goPage("/highSearch")}}},[t._v("\n    高级搜索\n    "),e("van-icon",{attrs:{name:"arrow"}})],1),t._v(" "),e("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tab",{attrs:{title:"交易中",name:"a"}},[e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"交易中"}}),t._v(" "),e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"交易中"}}),t._v(" "),e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"交易中"}})],1),t._v(" "),e("van-tab",{attrs:{title:"纠纷中",name:"b"}},[e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"纠纷中"}}),t._v(" "),e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"纠纷中"}})],1),t._v(" "),e("van-tab",{attrs:{title:"已关闭",name:"c"}},[e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"已关闭"}})],1),t._v(" "),e("van-tab",{attrs:{title:"已完成",name:"d"}},[e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"已完成"}})],1),t._v(" "),e("van-tab",{attrs:{title:"提现成功",name:"e"}},[e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"提现成功"}})],1),t._v(" "),e("van-tab",{attrs:{title:"资金冻结",name:"f"}},[e("van-panel",{attrs:{title:"标题",desc:"描述信息",status:"资金冻结"}})],1)],1)],1)},staticRenderFns:[]};var s=e("VU/8")({name:"orders",data:function(){return{value:"",active:this.$route.query.type||"a"}},computed:{},created:function(){},methods:{goPage:function(t){this.$router.push({path:t})},onClickLeft:function(){this.$router.push({path:"/user"})},onSearch:function(t){this.$toast(t)},onCancel:function(){this.$toast("取消")}}},n,!1,function(t){e("wwuR")},null,null);a.default=s.exports},wwuR:function(t,a){}});
//# sourceMappingURL=2.d169eedb222940a23273.js.map