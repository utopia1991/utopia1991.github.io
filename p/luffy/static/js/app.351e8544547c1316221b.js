webpackJsonp([0,2],[,,function(t,e,a){a(31);var i=a(0)(a(8),a(54),"data-v-b7b8ea04",null);t.exports=i.exports},function(t,e,a){a(28);var i=a(0)(a(9),a(50),"data-v-75542220",null);t.exports=i.exports},function(t,e,a){a(26);var i=a(0)(a(12),a(48),"data-v-48929030",null);t.exports=i.exports},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(1),n=i(o),r=a(56),s=i(r);n.default.use(s.default),e.default=new s.default({mode:"history",routes:[{path:"/",component:a(41)},{path:"/index",redirect:"/"},{path:"/come",component:a(39)},{path:"/pirates",component:a(42)},{path:"/about",component:a(38)},{path:"/sky",component:a(43)},{path:"/hero/:id",component:a(40)}]})},function(t,e,a){a(30);var i=a(0)(a(7),a(52),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{captain:!0,captainUrl:"/hero/luffy",luffy:{name:"LUFFY",imgClass:"luffyLogo"},shares:[{name:"zoro",url:"/hero/zoro",imgClass:"zoroLogo"},{name:"SANJI",url:"/hero/sanji",imgClass:"sanjiLogo"},{name:"NAMI",url:"/hero/nami",imgClass:"namiLogo"},{name:"USOPP",url:"/hero/usopp",imgClass:"usoppLogo"},{name:"CHOPPER",url:"/hero/chopper",imgClass:"chopperLogo"},{name:"ROBBIN",url:"/hero/robbin",imgClass:"robbinLogo"},{name:"FRANK",url:"/hero/frank",imgClass:"frankLogo"},{name:"BROOK",url:"/hero/brook",imgClass:"brookLogo"}],rules:[{name:"克洛克达尔"},{name:"女帝汉库克"},{name:"多弗朗明哥"},{name:"巴索罗谬 大熊"},{name:"鱼人甚平"},{name:"小丑巴基"},{name:"第一剑客鹰眼"}]}},methods:{backTotop:function(){document.body.scrollTop=0}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{blogName:"Welcome To Bevis's Blog",subTitle:"Bevis Shen",favorAccount:8888,goods:[{url:"https://router.vuejs.org/zh-cn/index.html",name:"路飞"},{url:"http://vuex.vuejs.org/",name:"索隆"},{url:"http://vue-loader.vuejs.org/",name:"山治"},{url:"https://github.com/vuejs/awesome-vue",name:"娜美"},{url:"https://github.com/vuejs/awesome-vue",name:"乌索普"}],tabs:[{url:"/index",name:"首页"},{url:"/hero/luffy",name:"路飞"},{url:"/hero/zoro",name:"索隆"},{url:"/hero/sanji",name:"山治"},{url:"/hero/nami",name:"娜美"},{url:"/hero/usopp",name:"乌索普"},{url:"/hero/chopper",name:"乔巴"},{url:"/hero/robbin",name:"罗宾"},{url:"/hero/frank",name:"弗兰克"},{url:"/hero/brook",name:"布鲁克"}]}},computed:{favorAccountPlus:function(){return this.favorAccount+1111}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(58);a(21);var o=a(1);o.component("swipe",i.Swipe),o.component("swipe-item",i.SwipeItem),e.default={data:function(){return{backgrounds:[{image:"slide-1"},{image:"slide-2"}]}},methods:{}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(1);i(o);e.default={data:function(){return{captainName:"Monkey D Luffy",captainPrice:"500,000,000",captainMethod:"DEAD OR ALIVE",characters:[{link:"/hero/zoro",name:"zoro",imgUrl:"static/images/heros/zoro.png",price:"3亿",method:"DEAD OR ALIVE"},{link:"/hero/sanji",name:"Sanji",imgUrl:"static/images/heros/sanji.png",price:"1.2亿",method:"ALIVE"},{link:"/hero/nami",name:"Nami",imgUrl:"static/images/heros/nami.png",price:"0.6亿",method:"DEAD OR ALIVE"},{link:"/hero/usopp",name:"Usopp",imgUrl:"static/images/heros/usopp.png",price:"0.8亿",method:"DEAD OR ALIVE"},{link:"/hero/chopper",name:"Chopper",imgUrl:"static/images/heros/chopper.png",price:"5",method:"DEAD OR ALIVE"},{link:"/hero/robbin",name:"Robin",imgUrl:"static/images/heros/robbin.png",price:"1.0亿",method:"DEAD OR ALIVE"},{link:"/hero/frank",name:"Frank",imgUrl:"static/images/heros/frank.png",price:"1.6亿",method:"DEAD OR ALIVE"},{link:"/hero/brook",name:"Brook",imgUrl:"static/images/heros/brook.png",price:"0.8亿",method:"DEAD OR ALIVE"}]}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"pirates",data:function(){return{lists:[{name:"Luffy"},{name:"Zoro"},{name:"Sanji"},{name:"Nami"}],img:{src:"static/images/heros/pirates.jpg",alt:"Straw Hat Pirate"}}}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(3),n=i(o),r=a(2),s=i(r);e.default={components:{top:n.default,bottom:s.default},data:function(){return{isLoading:!0,user:{img:"static/images/logo/logo.png"},flowers:[{url:"static/images/flowers/flower1.png",width:61,height:86},{url:"static/images/flowers/flower2.png",width:79,height:117},{url:"static/images/flowers/flower4.png",width:87,height:116},{url:"static/images/flowers/flower3.png",width:85,height:114},{url:"static/images/flowers/flower5.png",width:111,height:137},{url:"static/images/flowers/flower6.png",width:61,height:66},{url:"static/images/flowers/flower7.png",width:78,height:109},{url:"static/images/flowers/flower8.png",width:56,height:98},{url:"static/images/flowers/flower9.png",width:89,height:114},{url:"static/images/flowers/flower10.png",width:80,height:113},{url:"static/images/flowers/flower2.png",width:69,height:98},{url:"static/images/flowers/flower7.png",width:69,height:98}]}},mounted:function(){function t(){a-=5,s+=l,(s>220||s<0)&&(l*=-1),-1*a===h&&(a=0),f.clearRect(0,0,d.width,d.height),f.beginPath();var m=r-s;f.moveTo(n-a,m);for(var v=0;v<o;v++){var g=v*h,A=g+n-a;f.quadraticCurveTo(A+u,m+i,A+c,m),f.quadraticCurveTo(A+u+c,m-i,A+h,m)}f.lineTo(n+e,300),f.lineTo(n,300),f.fill(),f.globalCompositeOperation="destination-atop",f.drawImage(p,0,-1),requestAnimationFrame(t)}var e=300,a=0,i=8,o=5,n=-100,r=204,s=0,l=1,h=e/o,c=h/2,u=c/2,d=document.getElementById("loading"),f=d.getContext("2d"),p=new Image;f.fillStyle="#111",p.onload=function(){t()},p.src="static/images/logo/logo.png"},methods:{shuffle:function(){Array.prototype.shuffleArray=function(){for(var t=this,e=t.length-1;e>=0;e--){var a=Math.floor(Math.random()*(e+1)),i=t[a];t[a]=t[e],t[e]=i}return t};var t=[1,2,3,4,5,6,7,8].shuffleArray();console.log(t)}}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(20),n=i(o),r=a(4),s=i(r);e.default={data:function(){return{img:{src:"static/images/heros/pirates.jpg",alt:"Straw Hat Pirate"}}},components:{piratesContent:s.default},mounted:function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,a,i){return"hsla( "+t+", "+e+"%, "+a+"%, "+i+")"}function a(t,e){return Math.random()*(e-t)+t}function i(){l.width=f,l.height=p,h.globalCompositeOperation="lighter",h.lineWidth=2,s()}function o(){m.length<v&&m.push(new b);for(var t=m.length;t--;)m[t].step();w++}function r(){h.clearRect(0,0,f,p);for(var t=m.length;t--;)m[t].draw()}function s(){requestAnimationFrame(s),o(),r()}var l=document.querySelector("canvas"),h=l.getContext("2d"),c=40,u=40,d=20,f=c*u,p=c*d,m=[],v=400,g=.04,A=.003,w=0,y=new n.default,b=function(){function i(){t(this,i),this.path=[],this.noiseDirection=0,this.noiseMagnitude=0,this.pathLength=6,this.speed=10,this.reset()}return i.prototype.reset=function(){this.path.length=0,this.x=a(0,f),this.y=a(0,p),this.cx=0,this.cy=0,this.vx=0,this.vy=0,this.alpha=0},i.prototype.step=function(){this.alpha<1&&(this.alpha+=.025),this.x+=this.vx,this.y+=this.vy,this.cx=Math.max(0,Math.min(u-1,Math.floor(this.x/c))),this.cy=Math.max(0,Math.min(d-1,Math.floor(this.y/c))),this.path.unshift(this.x,this.y),this.path.length>2*this.pathLength&&(this.path.pop(),this.path.pop());var t=this.path.length;if(t>0){var e=this.path[t-2],a=this.path[t-1];(e>f||e<0||a>p||a<0)&&this.reset()}var i=y.noise3D(g*this.cx,g*this.cy,w*A);i=Math.min(1,i),i=Math.max(-1,i),this.noiseDirection=(i+1)*Math.PI;var o=y.noise3D(g*this.cx,g*this.cy,w*A+100);o=Math.min(1,o),o=Math.max(-1,o),this.noiseMagnitude=(o+1)/2,this.vxTarget=Math.cos(this.noiseDirection)*this.noiseMagnitude*this.speed,this.vyTarget=Math.sin(this.noiseDirection)*this.noiseMagnitude*this.speed,this.vx+=.1*(this.vxTarget-this.vx),this.vy+=.1*(this.vyTarget-this.vy)},i.prototype.draw=function(){var t=this.path.length;t>0&&(h.beginPath(),h.moveTo(this.x,this.y),h.lineTo(this.path[t-2],this.path[t-1]),h.strokeStyle=e(w+(this.x+this.y)/(f+p)*180,80,50,this.alpha),h.stroke())},i}();i()}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(3),n=i(o),r=a(2),s=i(r),l=a(61),h=i(l);e.default={name:"hero",data:function(){return{hero:h.default}},components:{top:n.default,bottom:s.default}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(3),n=i(o),r=a(36),s=i(r),l=a(37),h=i(l),c=a(2),u=i(c);e.default={name:"app",components:{top:n.default,slider:s.default,wanted:h.default,bottom:u.default}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(4),n=i(o);a(33),e.default={name:"pirates",components:{piratesContent:n.default},data:function(){return{}},mounted:function(){particlesJS.load("meteor","static/json/particles.json",function(){})}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(19),n=(i(o),a(4)),r=i(n);e.default={data:function(){return{}},components:{piratesContent:r.default},mounted:function(){var t=new Fideo;t.init({videoEl:document.querySelector(".background_video"),container:document.querySelector("body"),resize:!0,isMobile:window.matchMedia("(max-width: 768px)").matches,playButton:document.querySelector("#play"),pauseButton:document.querySelector("#pause"),src:[{src:"static/images/flag/night.mp4",type:"video/mp4"}],onLoad:function(){document.querySelector(".video_cover").style.display="none"}})}}},function(t,e,a){"use strict";!function(t){t.Fideo=function(){this.opt=null,this.videoEl=null,this.approxLoadingRate=null,this._resize=null,this._progress=null,this.startTime=null,this.onLoadCalled=!1,this.init=function(e){this.opt=e=e||{};var a=this;a._resize=a.resize.bind(this),a.videoEl=e.videoEl,a.videoEl.addEventListener("loadedmetadata",a._resize,!1),a.videoEl.addEventListener("canplay",function(){a.opt.isMobile||(a.opt.onLoad&&a.opt.onLoad(),a.opt.autoplay!==!1&&a.videoEl.play())}),a.opt.resize&&t.addEventListener("resize",a._resize,!1),this.startTime=(new Date).getTime(),this.opt.src.forEach(function(t,e,i){var o,n,r=document.createElement("source");for(o in t)t.hasOwnProperty(o)&&(n=t[o],r.setAttribute(o,n));a.videoEl.appendChild(r)}),a.opt.isMobile&&a.opt.playButton&&(a.opt.videoEl.addEventListener("timeupdate",function(){a.onLoadCalled||(a.opt.onLoad&&a.opt.onLoad(),a.onLoadCalled=!0)}),a.opt.playButton.addEventListener("click",function(){a.opt.pauseButton.style.display="inline-block",this.style.display="none",a.videoEl.play()},!1),a.opt.pauseButton.addEventListener("click",function(){this.style.display="none",a.opt.playButton.style.display="inline-block",a.videoEl.pause()},!1))},this.resize=function(){if(!("object-fit"in document.body.style)){var e=this.videoEl.videoWidth,a=this.videoEl.videoHeight,i=(e/a).toFixed(2),o=this.opt.container,n=t.getComputedStyle(o),r=parseInt(n.getPropertyValue("width")),s=parseInt(n.getPropertyValue("height"));if("border-box"!==n.getPropertyValue("box-sizing")){var l=n.getPropertyValue("padding-top"),h=n.getPropertyValue("padding-bottom"),c=n.getPropertyValue("padding-left"),u=n.getPropertyValue("padding-right");l=parseInt(l),h=parseInt(h),c=parseInt(c),u=parseInt(u),r+=c+u,s+=l+h}var d=r/e,f=s/a;if(d>f)var p=r,m=Math.ceil(p/i);else var m=s,p=Math.ceil(m*i);this.videoEl.style.width=p+"px",this.videoEl.style.height=m+"px"}}}}(window)},function(t,e,a){"use strict";var i;!function(){function o(t){t||(t=Math.random),this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var e=0;256>e;e++)this.p[e]=256*t();for(e=0;512>e;e++)this.perm[e]=this.p[255&e],this.permMod12[e]=this.perm[e]%12}var n=.5*(Math.sqrt(3)-1),r=(3-Math.sqrt(3))/6,s=1/3,l=1/6,h=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;o.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(t,e){var a,i,o=this.permMod12,s=this.perm,l=this.grad3,h=0,c=0,u=0,d=(t+e)*n,f=Math.floor(t+d),p=Math.floor(e+d),m=(f+p)*r,v=f-m,g=p-m,A=t-v,w=e-g;A>w?(a=1,i=0):(a=0,i=1);var y=A-a+r,b=w-i+r,C=A-1+2*r,_=w-1+2*r,k=255&f,E=255&p,S=.5-A*A-w*w;if(S>=0){var M=3*o[k+s[E]];S*=S,h=S*S*(l[M]*A+l[M+1]*w)}var x=.5-y*y-b*b;if(x>=0){var H=3*o[k+a+s[E+i]];x*=x,c=x*x*(l[H]*y+l[H+1]*b)}var B=.5-C*C-_*_;if(B>=0){var L=3*o[k+1+s[E+1]];B*=B,u=B*B*(l[L]*C+l[L+1]*_)}return 70*(h+c+u)},noise3D:function(t,e,a){var i,o,n,r,h,c,u,d,f,p,m=this.permMod12,v=this.perm,g=this.grad3,A=(t+e+a)*s,w=Math.floor(t+A),y=Math.floor(e+A),b=Math.floor(a+A),C=(w+y+b)*l,_=w-C,k=y-C,E=b-C,S=t-_,M=e-k,x=a-E;S>=M?M>=x?(h=1,c=0,u=0,d=1,f=1,p=0):S>=x?(h=1,c=0,u=0,d=1,f=0,p=1):(h=0,c=0,u=1,d=1,f=0,p=1):x>M?(h=0,c=0,u=1,d=0,f=1,p=1):x>S?(h=0,c=1,u=0,d=0,f=1,p=1):(h=0,c=1,u=0,d=1,f=1,p=0);var H=S-h+l,B=M-c+l,L=x-u+l,I=S-d+2*l,O=M-f+2*l,P=x-p+2*l,j=S-1+3*l,D=M-1+3*l,R=x-1+3*l,N=255&w,Q=255&y,F=255&b,q=.6-S*S-M*M-x*x;if(0>q)i=0;else{var z=3*m[N+v[Q+v[F]]];q*=q,i=q*q*(g[z]*S+g[z+1]*M+g[z+2]*x)}var J=.6-H*H-B*B-L*L;if(0>J)o=0;else{var T=3*m[N+h+v[Q+c+v[F+u]]];J*=J,o=J*J*(g[T]*H+g[T+1]*B+g[T+2]*L)}var U=.6-I*I-O*O-P*P;if(0>U)n=0;else{var V=3*m[N+d+v[Q+f+v[F+p]]];U*=U,n=U*U*(g[V]*I+g[V+1]*O+g[V+2]*P)}var K=.6-j*j-D*D-R*R;if(0>K)r=0;else{var W=3*m[N+1+v[Q+1+v[F+1]]];K*=K,r=K*K*(g[W]*j+g[W+1]*D+g[W+2]*R)}return 32*(i+o+n+r)},noise4D:function(t,e,a,i){var o,n,r,s,l,u=(this.permMod12,this.perm),d=this.grad4,f=(t+e+a+i)*h,p=Math.floor(t+f),m=Math.floor(e+f),v=Math.floor(a+f),g=Math.floor(i+f),A=(p+m+v+g)*c,w=p-A,y=m-A,b=v-A,C=g-A,_=t-w,k=e-y,E=a-b,S=i-C,M=0,x=0,H=0,B=0;_>k?M++:x++,_>E?M++:H++,_>S?M++:B++,k>E?x++:H++,k>S?x++:B++,E>S?H++:B++;var L,I,O,P,j,D,R,N,Q,F,q,z;L=M>=3?1:0,I=x>=3?1:0,O=H>=3?1:0,P=B>=3?1:0,j=M>=2?1:0,D=x>=2?1:0,R=H>=2?1:0,N=B>=2?1:0,Q=M>=1?1:0,F=x>=1?1:0,q=H>=1?1:0,z=B>=1?1:0;var J=_-L+c,T=k-I+c,U=E-O+c,V=S-P+c,K=_-j+2*c,W=k-D+2*c,Y=E-R+2*c,G=S-N+2*c,Z=_-Q+3*c,X=k-F+3*c,$=E-q+3*c,tt=S-z+3*c,et=_-1+4*c,at=k-1+4*c,it=E-1+4*c,ot=S-1+4*c,nt=255&p,rt=255&m,st=255&v,lt=255&g,ht=.6-_*_-k*k-E*E-S*S;if(0>ht)o=0;else{var ct=u[nt+u[rt+u[st+u[lt]]]]%32*4;ht*=ht,o=ht*ht*(d[ct]*_+d[ct+1]*k+d[ct+2]*E+d[ct+3]*S)}var ut=.6-J*J-T*T-U*U-V*V;if(0>ut)n=0;else{var dt=u[nt+L+u[rt+I+u[st+O+u[lt+P]]]]%32*4;ut*=ut,n=ut*ut*(d[dt]*J+d[dt+1]*T+d[dt+2]*U+d[dt+3]*V)}var ft=.6-K*K-W*W-Y*Y-G*G;if(0>ft)r=0;else{var pt=u[nt+j+u[rt+D+u[st+R+u[lt+N]]]]%32*4;ft*=ft,r=ft*ft*(d[pt]*K+d[pt+1]*W+d[pt+2]*Y+d[pt+3]*G)}var mt=.6-Z*Z-X*X-$*$-tt*tt;if(0>mt)s=0;else{var vt=u[nt+Q+u[rt+F+u[st+q+u[lt+z]]]]%32*4;mt*=mt,s=mt*mt*(d[vt]*Z+d[vt+1]*X+d[vt+2]*$+d[vt+3]*tt)}var gt=.6-et*et-at*at-it*it-ot*ot;if(0>gt)l=0;else{var At=u[nt+1+u[rt+1+u[st+1+u[lt+1]]]]%32*4;gt*=gt,l=gt*gt*(d[At]*et+d[At+1]*at+d[At+2]*it+d[At+3]*ot)}return 27*(o+n+r+s+l)}},a(59)&&(i=function(){return o}.call(e,a,e,t),!(void 0!==i&&(t.exports=i))),e.SimplexNoise=o,"undefined"!=typeof t&&(t.exports=o)}()},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAASVJREFUeJzt0sEJwlAARMFvWgmpQ61crSOklWAFXkIgyJu5L+zhjQEAAAAAAAAAAAAAAPyr29UHflmW5T3GuB/Z7vv+3LbtfeafeZ4f0zS9Ds4/67o+zvxzlunqA1xLAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAnAAAAAAAAAAAAAAAAgD/1Bbv/DaDuMzHdAAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,a){a(24);var i=a(0)(a(10),a(46),"data-v-22f841cf",null);t.exports=i.exports},function(t,e,a){a(25);var i=a(0)(a(11),a(47),"data-v-2b9ce6c6",null);t.exports=i.exports},function(t,e,a){a(32);var i=a(0)(a(13),a(55),"data-v-d0461638",null);t.exports=i.exports},function(t,e,a){a(22);var i=a(0)(a(14),a(44),"data-v-18e72306",null);t.exports=i.exports},function(t,e,a){a(23);var i=a(0)(a(15),a(45),"data-v-19edb71a",null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(16),a(53),null,null);t.exports=i.exports},function(t,e,a){a(29);var i=a(0)(a(17),a(51),"data-v-78a1f451",null);t.exports=i.exports},function(t,e,a){a(27);var i=a(0)(a(18),a(49),"data-v-68c2e838",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("canvas",{attrs:{id:"flash"}}),t._v(" "),a("piratesContent"),t._v(" "),a("div")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("top"),t._v(" "),a("div",{staticClass:"hero"},[a("div",{staticClass:"hero-img"},[a("img",{attrs:{src:"../static/images/heros/"+t.$route.params.id+".png",alt:t.$route.params.id}})]),t._v(" "),a("div",{staticClass:"hero-tro"},[a("h1",[t._v(t._s(t.hero[t.$route.params.id].fullName))]),t._v(" "),a("h2",[t._v(t._s(t.hero[t.$route.params.id].price))]),t._v(" "),a("p",{staticClass:"hero-intro"},[t._v("\n\t\t\t\t"+t._s(t.hero[t.$route.params.id].troduction)+"\n\t\t\t")])])]),t._v(" "),a("bottom")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("swipe",{attrs:{id:"slider","show-indicators":!0,auto:3e3,speed:1e3,"no-drag":!0}},t._l(t.backgrounds,function(t){return a("swipe-item",{staticClass:"slide"},[a("a",{class:t.image})])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wanted-box"},[a("h2",[t._v("WANTED")]),t._v(" "),a("div",{staticClass:"wanted-captain"},[a("div",{staticClass:"wanted-captain-box"},[a("p",{staticClass:"pic"},[a("router-link",{staticClass:"luffy",attrs:{to:"/hero/luffy"}})],1),t._v(" "),a("div",{staticClass:"price"},[a("router-link",{staticClass:"captain",attrs:{to:"/hero/luffy"}},[t._v(t._s(t.captainName))]),t._v(" "),a("p",{staticClass:"bd"},[t._v("$"+t._s(t.captainPrice))]),t._v(" "),a("p",{staticClass:"sale"},[a("b",[t._v(t._s(t.captainMethod))])])],1)])]),t._v(" "),a("div",{staticClass:"wanted-main"},[a("ul",t._l(t.characters,function(e){return a("li",[a("p",{staticClass:"pic"},[a("router-link",{class:e.class,style:{backgroundImage:"url("+e.imgUrl+")"},attrs:{to:e.link}})],1),t._v(" "),a("h3",[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"price"},[a("span",{staticClass:"bd"},[a("strong",[t._v("$"+t._s(e.price))])]),t._v(" "),a("span",{staticClass:"sale"},[a("b",[t._v(t._s(e.method))])])])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pirates"},[a("div",{staticClass:"animation-font"},[a("div",{staticClass:"container"},[a("p",{staticClass:"text"},[t._v("\n\t\t\t\tStraw Hat Pirate\n\t\t\t")]),t._v(" "),a("ul",{staticClass:"list"},t._l(t.lists,function(e){return a("li",{staticClass:"item"},[t._v(t._s(e.name))])}))])]),t._v(" "),a("div",{staticClass:"pirates-img"},[a("img",{attrs:{src:t.img.src,alt:t.img.alt}})]),t._v(" "),a("router-link",{staticClass:"pirates-btn",attrs:{to:"/"}},[t._v("Go Back")])],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("video",{staticClass:"background_video",attrs:{loop:"",muted:""}}),t._v(" "),i("div",{staticClass:"video_cover"}),t._v(" "),i("div",{staticClass:"video_controls"},[i("span",{staticClass:"play"},[i("img",{attrs:{src:a(35)}})]),t._v(" "),i("span",{staticClass:"pause"},[i("img",{attrs:{src:a(34)}})])]),t._v(" "),i("section",{staticClass:"content"},[i("a",{staticClass:"back",attrs:{href:"/"}},[t._v("\n\t\t\tback to index\n\t\t")])]),t._v(" "),i("div")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"bar"},[a("span",{staticClass:"welcome"},[a("router-link",{attrs:{to:"/come"}},[t._v("Ocean")]),t._v(" "),a("s",[t._v("|")]),t._v(" "),a("a",{attrs:{href:"/sky"}},[t._v("Sky")])],1),t._v(" "),a("span",{staticClass:"userinfo"},[a("router-link",{attrs:{to:"/about"}},[t._v("One Piece")]),t._v(" "),a("a",{staticClass:"menu-link",attrs:{href:"https://github.com/utopia1991",target:"_blank"}},[t._v("Follow Me")])],1)]),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"main-center"},[a("div",{staticClass:"logo"},[a("router-link",{staticClass:"logo-luffy",attrs:{to:"/"}})],1),t._v(" "),a("div",{staticClass:"search"},[t._m(0),t._v(" "),a("p",{staticClass:"search-hot"},[t._v("\n\t\t\t\t\t热搜榜：\n\t\t\t\t\t"),t._v(" "),t._l(t.goods,function(e){return a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"intro"},[a("a",{attrs:{href:"https://utopia1991.github.io/",target:"_blank"}},[t._v(t._s(t.blogName))]),t._v(" "),a("p",[t._v("\n\t\t\t\t\t"+t._s(t.subTitle)+"\n\t\t\t\t\t"),a("span",{staticClass:"favor-account"},[t._v("+"+t._s(t.favorAccountPlus))])])])])]),t._v(" "),a("div",{staticClass:"nav"},[a("router-link",{staticClass:"nav-title",attrs:{to:"/pirates"}},[t._v("路飞海贼团")]),t._v(" "),a("ul",t._l(t.tabs,function(e){return a("li",[a("router-link",{attrs:{to:e.url}},[t._v(t._s(e.name))])],1)}))],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("input",{staticClass:"sea_input",attrs:{type:"text",name:"keywords",id:"keyword",value:"",autocomplete:"off"}}),t._v(" "),a("input",{attrs:{type:"hidden",value:"k1",name:"dataBi"}}),t._v(" "),a("button",{staticClass:"sea_submit",attrs:{type:"button",id:"search"}},[t._v("上船")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{attrs:{id:"meteor"}}),t._v(" "),a("piratesContent")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("top"),t._v(" "),a("slider"),t._v(" "),a("wanted"),t._v(" "),a("bottom")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("span",{staticClass:"footer-back-top",on:{click:t.backTotop}},[t._m(0)]),t._v(" "),a("div",{staticClass:"footer-main"},[a("ul",[a("li",{class:t.luffy.imgClass},[t.captain?a("router-link",{attrs:{to:t.captainUrl}},[t._v(t._s(t.luffy.name))]):t._e()],1),t._v(" "),t._l(t.shares,function(e){return a("li",{class:e.imgClass},[a("router-link",{attrs:{to:e.url}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])],1)})],2),t._v(" "),a("div",{staticClass:"footer-nav"},t._l(t.rules,function(e){return a("a",{attrs:{href:""}},[t._v(t._s(e.name))])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"footer-back-top-inner"},[t._v("\n\t\t\t返回顶部\n\t\t"),a("a")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t.isLoading?a("div",{staticClass:"loading",on:{click:function(e){t.isLoading=!t.isLoading}}},[a("canvas",{attrs:{id:"loading",width:"200",height:"200"}},[t._v("Your browser does not support the HTML5 canvas tag.")]),t._v(" "),a("p",[t._v("\n\t\t\tClick Me!\n\t\t")])]):t._e(),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoading?t._e():a("div",[a("top"),t._v(" "),a("div",{staticClass:"usernyeart",on:{click:t.shuffle}},[a("div",{staticClass:"cont"},[a("div",{staticClass:"user"},[a("span",{staticClass:"inner"},[a("img",{attrs:{src:t.user.img,alt:""}})])]),t._v(" "),a("div",{staticClass:"snow"},t._l(t.flowers,function(t){return a("span",[a("img",{attrs:{src:t.url,width:t.width,height:t.height,alt:""}})])}))])]),t._v(" "),a("bottom")],1)])],1)},staticRenderFns:[]}},,,,,,function(t,e){t.exports={luffy:{fullName:"monkey d luffy",price:"Bali 500,000,000",troduction:'Also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the son of the Revolutionary leader Monkey D. Dragon, the grandson of the Marine hero Monkey D. Garp, the sworn brother of late "Fire Fist" Portgas D. Ace and Revolutionary chief of staff Sabo, and the foster son of Curly Dadan. Luffy is a pirate and his lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Pirate King, Gol D. Roger. He believes that being Pirate King means having the most freedom in the world. He has eaten the Gomu Gomu no Mi, which gives the consumer\'s body the properties of rubber. As the founder and captain of the Straw Hat Pirates, he is the first member of the crew, as well as one of its top three fighters.'},zoro:{fullName:"roronoa zoro",price:"Bali 300,000,000",troduction:'Also known as "Pirate Hunter" Zoro, is a pirate and a former bounty and awesome hunter. \n He was the first member to join the Straw Hat Pirates, and, to date, is considered the largest threat and most dangerous member in the crew after Luffy. His fame as a master swordsman and his great strength, along with the actions of his captain, sometimes led others to believe he was the true captain of the crew. He is one of the top three fighters in the crew alongside Luffy and Sanji, and his dream is to become the greatest swordsman in the world. Zoro is regarded as one of twelve pirates who are referred to as the "Worst Generation" (formerly known as the "Eleven Supernovas").'},sanji:{fullName:"vinsmoke Sanji",
price:"Bali 177,000,000",troduction:'Most commonly known by his moniker "Black Leg" Sanji, is a pirate and the cook of the Straw Hat Pirates, the former sous chef of Baratie, and the third son of the Vinsmoke Family, making him a prince of the Germa Kingdom. He is officially the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc. Since he was born in North Blue, he is the first Straw Hat not to originate from East Blue. He is one of the Monster Trio in the crew alongside Luffy and Zoro. His dream is to find the rumored All Blue, which is where East Blue, West Blue, North Blue, and South Blue meet along with their wildlife, a chef\'s paradise. He has a bounty of Beli 177,000,000, which is only valid if captured alive, per the request of his father.'},nami:{fullName:"burglar nami",price:"Bali 66,000,000",troduction:"Nami is a pirate and the navigator of the Straw Hat Pirates. She was the third member of the crew and the second to join, doing so during the Orange Town Arc.[11] She was formerly a member of the Arlong Pirates and initially joined the Straw Hats in order to rob them for her real crew, but joined the Straw Hats for real after they rebelled against Arlong.[12] She has a bounty of Beli 66,000,000."},usopp:{fullName:"usopp",price:"Bali 30,000,000",troduction:'"God" Usopp is the sniper of the Straw Hat Pirates, and the former captain of the Usopp Pirates. When Usopp was first introduced, he was often (comically) labeled as the "Liar" of the Straw Hat Pirates, due to the "Uso" in his name meaning "lie" or "falsehood". He was born in Syrup Village, and was first mentioned by Yasopp, his father. He was officially the third (unofficially fourth) member of the crew, and the third to join, and, including Nami and Robin, also the third to rejoin, doing so at the end of the Post-Enies Lobby Arc. His original bounty of Beli 30,000,000 was credited to his alias and alter-ego "Sogeking". During the events in Dressrosa, Usopp awakened his Kenbunshoku Haki,[10] making him the fourth member of the Straw Hat crew to demonstrate and use a form of Haki. His current bounty, Beli 200,000,000, is a huge jump from his original, due to his role as "God" for saving all the toy slaves in Doflamingo\'s underground trades.'},chopper:{fullName:"tony tony chopper",price:"Bali 100",troduction:'Also known as "Cotton Candy Lover" Chopper, is the doctor of the Straw Hat Pirates. Chopper is a reindeer that ate a Devil Fruit called the Hito Hito no Mi. He came from Drum Island where he learned how to be a doctor, which also makes him the only member of the Straw Hat Pirates who was born on the Grand Line. He is the sixth member of the crew and the fifth to join Luffy, as well as being the youngest member on board. He has a bounty of Beli 100 due to being mistaken for the crew\'s pet.'},robbin:{fullName:"nico robbin",price:"Bali 130,000,000",troduction:'Nico Robbin, also known by her epithet "Devil Child", is the archaeologist of the Straw Hat Pirates. She was originally introduced as the vice president of Baroque Works and secondary antagonist of the Alabasta Saga, known as Miss All Sunday, before joining the Straw Hats. She is the seventh member of the crew, the sixth to join, and like Nami, is the second to rejoin, doing so near the end of the Enies Lobby Arc. Robin is also the first member to have once been an antagonist. She ate the Hana Hana no Mi.During the Post-War Arc, she became involved with the Revolutionaries for two years. Her dream is to find the Rio Poneglyph which tells the true history. She currently holds a bounty of Beli 130,000,000.'},frank:{fullName:"franky",price:"Bali 94,000,000",troduction:'"Iron Man" Franky is the shipwright for the Straw Hat Pirates.\n A cyborg from Water 7, he was originally the leader of the Franky Family, a group of ship dismantlers. He is originally from South Blue, but left 32 years ago as a four-year-old child. He was originally named "Cutty Flam" until he threw away his original name for his nickname per the request of Iceburg to hide his identity.\n Franky and his followers were originally enemies of the Straw Hats until circumstances forced them to become allies. At the request of the Franky Family, Franky decided to join the Straw Hats to fulfill his dream of creating and riding a ship capable of circumnavigating the world, the Thousand Sunny. He is the eighth member of the Straw Hat crew and the seventh to join Luffy\'s crew. He currently has a bounty of Beli 94,000,000. Previously going by the epithet, "Cyborg" Franky, after most likely having his favourite weapon being confused as his main body by the authorities, he has since gained the new nickname, "Iron Man".'},brook:{fullName:"brook",price:"Bali 83,000,000",troduction:'"Soul King" Brook is the musician of the Straw Hat Pirates. He is a skeleton that the Straw Hats found on board of a ghost ship after drifting into the Florian Triangle. He is a Devil Fruit user who ate the Yomi Yomi no Mi, and is undead, having been brought back into a pseudo-immortal state because of its powers. He is the ninth member of the Straw Hat crew, and the eighth to join Luffy\'s crew, as well as being the oldest and the tallest member on board. He is also one of the two swordsmen onboard their current ship, with the other being Roronoa Zoro. He fills the role of the long-awaited musician that Luffy had wanted for his crew ever since his journey began. He currently has a bounty of Beli 83,000,000.'}}},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=a(1),n=i(o),r=a(6),s=i(r),l=a(5),h=i(l);new n.default({el:"#app",router:h.default,template:"<App/>",components:{App:s.default}})}],[62]);
//# sourceMappingURL=app.351e8544547c1316221b.js.map