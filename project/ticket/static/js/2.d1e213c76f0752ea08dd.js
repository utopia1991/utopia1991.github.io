webpackJsonp([2],{"5U5x":function(o,n){},K9Id:function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={name:"parchase",components:{},data:function(){return{type1:"",type2:"",type3:"",price:"¥2131",canSell:32,active:0,showPicker1:!1,showPicker2:!1,showPicker3:!1,columns1:["1a","1b","1c","1d","1e"],columns2:["2a","2b","2c","2d","2e"],columns3:["3a","3b","3c","3d","3e"],quanma:"",uploader:[]}},computed:{},mounted:function(){},methods:{onConfirm1:function(o){this.type1=o,this.showPicker1=!1},onConfirm2:function(o){this.type2=o,this.showPicker2=!1},onConfirm3:function(o){this.type3=o,this.showPicker3=!1},onClickLeft:function(){this.$router.go(-1)},onSubmit:function(){console.log("submit")},goPage:function(o,n){this.$router.push({path:o,query:{type:n}})}}},c={render:function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",{staticClass:"user-wrap"},[e("van-nav-bar",{attrs:{title:"寄售","left-text":"返回","left-arrow":""},on:{"click-left":o.onClickLeft}}),o._v(" "),e("van-field",{attrs:{readonly:"",clickable:"",label:"第一类别",value:o.type1,placeholder:"选择第一类别"},on:{click:function(n){o.showPicker1=!0}}}),o._v(" "),e("van-field",{attrs:{readonly:"",clickable:"",label:"第二类别",value:o.type2,placeholder:"选择第二类别"},on:{click:function(n){o.showPicker2=!0}}}),o._v(" "),e("van-field",{attrs:{readonly:"",clickable:"",label:"第三类别",value:o.type3,placeholder:"选择第三类别"},on:{click:function(n){o.showPicker3=!0}}}),o._v(" "),e("van-field",{attrs:{label:"转让单价",disabled:""},model:{value:o.price,callback:function(n){o.price=n},expression:"price"}}),o._v(" "),e("van-notice-bar",{attrs:{scrollable:!1}},[o._v("\n    当前可寄售 "+o._s(o.canSell)+" 张\n  ")]),o._v(" "),e("van-divider",[o._v("上传券码")]),o._v(" "),e("div",{staticClass:"quan-contain"},[e("van-cell-group",[e("van-field",{attrs:{placeholder:"请输入券码"},model:{value:o.quanma,callback:function(n){o.quanma=n},expression:"quanma"}})],1),o._v(" "),e("van-field",{attrs:{name:"uploader",label:"上传附件"},scopedSlots:o._u([{key:"input",fn:function(){return[e("van-uploader",{model:{value:o.uploader,callback:function(n){o.uploader=n},expression:"uploader"}})]},proxy:!0}])})],1),o._v(" "),e("van-notice-bar",{attrs:{scrollable:!1}},[o._v("\n    备注：可以上传压缩包或者图片\n  ")]),o._v(" "),e("van-goods-action",[e("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:function(n){return o.goPage("/qscode",1)}}}),o._v(" "),e("van-goods-action-icon",{attrs:{icon:"star-o",text:"收藏"}}),o._v(" "),e("van-goods-action-button",{attrs:{type:"danger",text:"提交",color:"#07c160"},on:{click:o.onSubmit}})],1),o._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:o.showPicker1,callback:function(n){o.showPicker1=n},expression:"showPicker1"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:o.columns1},on:{cancel:function(n){o.showPicker1=!1},confirm:o.onConfirm1}})],1),o._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:o.showPicker2,callback:function(n){o.showPicker2=n},expression:"showPicker2"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:o.columns2},on:{cancel:function(n){o.showPicker2=!1},confirm:o.onConfirm2}})],1),o._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:o.showPicker3,callback:function(n){o.showPicker3=n},expression:"showPicker3"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:o.columns3},on:{cancel:function(n){o.showPicker3=!1},confirm:o.onConfirm3}})],1)],1)},staticRenderFns:[]};var a=e("VU/8")(t,c,!1,function(o){e("5U5x")},"data-v-c18bdf0e",null);n.default=a.exports}});
//# sourceMappingURL=2.d1e213c76f0752ea08dd.js.map