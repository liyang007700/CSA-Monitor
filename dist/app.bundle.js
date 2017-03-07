!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=33)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Dialog=void 0;var i=n(18),r=o(i),a={};Vue.component("m-dialog",{props:["title","body"],template:r.default,data:function(){return{showDialog:!1}},methods:{close:function(){this.$data.showDialog=!1}},created:function(){},mounted:function(){var t=this;a.show=function(){t.$data.showDialog=!0},a.hide=function(){t.$data.showDialog=!1}}}),e.Dialog=a},function(t,e,n){"use strict";function o(t,e,n){var o=n.value.title||"",i=n.value.position||d,r=document.querySelector(".m-tooltip")||document.createElement("div");return r.className="m-tooltip",r.innerHTML="<span>"+o+"</span>",r.style.backgroundColor=l,r.style.display="initial",t.appendChild(r),c[i](e,r,n),r}function i(t,e,n){var o=t.getBoundingClientRect();e.className="m-tooltip top",e.style.height="initial",e.style.lineHeight="initial",e.style.top=o.top-e.offsetHeight-12+"px",e.style.left=o.left+"px"}function r(t,e,n){}function a(t,e,n){var o=t.getBoundingClientRect();e.className="m-tooltip right",e.style.height=o.height+"px",e.style.lineHeight=o.height-14+"px",e.style.top=o.top+"px",e.style.left=o.left+12+t.offsetWidth+"px"}function s(t,e,n){}var l="#1c1c1c",d="top",c={top:i,left:r,right:a,bottom:s};Vue.directive("tooltip",function(t,e){var n=document.querySelector("body"),i=null;t.addEventListener("mouseenter",function(r){i=o(n,t,e),i.style.opacity=1}),t.addEventListener("mouseleave",function(t){i.style.display="none",i.style.opacity=0})})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(23),r=o(i);Vue.component("app-footer",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Footer rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(24),r=o(i);Vue.component("app-header",{template:r.default,data:function(){return{currentNav:"DASHBOARD"}},methods:{},created:function(){},mounted:function(){console.info("Header rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(25),r=o(i);n(1);Vue.component("app-left-nav",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Left navigator rendered")}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0;var o=n(11),i=n(7),r=n(13),a=n(12),s=n(10),l=n(14),d=n(15),c=[{path:"/index",component:o.componentIndex},{path:"/calendar",component:i.componentCalendar},{path:"/metrics",component:r.componentMetrics},{path:"/logs",component:a.componentLogs},{path:"/events",component:s.componentEvents},{path:"/settings",component:l.componentSettings},{path:"/tests",component:d.componentTests},{path:"/",redirect:"/index"}];e.routes=c},function(t,e){t.exports='<!-- Application root -->\r\n<div id="m-app" class="pure-g">\r\n\t<div id="m-header-wrapper" class="pure-u-1-1">\r\n\t\t<div id="m-header">\r\n\t\t\t<app-header></app-header>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id="m-left-nav" class="pure-u">\r\n\t\t<app-left-nav></app-left-nav>\r\n\t</div>\r\n\t<div id="m-main-wrapper" class="pure-u-1-1">\r\n\t\t<div id="m-main" v-bind:class="mMainClass">\r\n\t\t\t<router-view></router-view>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id="m-footer-wrapper" class="pure-u-1-1">\r\n\t\t<div id="m-footer">\r\n\t\t\t<app-footer></app-footer>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentCalendar=void 0;var i=n(21),r=o(i);n(8);var a={template:r.default,data:function(){return{weekDay:"weekDay",month:"March 2017",agenda:[{date:"2017-02-27T00:00",events:[{text:"CSA RoadShow HK",type:"demo",startTime:"2017-02-27T03:00",endTime:"2017-02-27T04:00"}]},{date:"2017-02-28T00:00",events:[{text:"Page Manager quick fix",type:"release",startTime:"2017-02-28T05:00",endTime:"2017-02-28T06:00"}]},{date:"2017-03-01T00:00",events:[{text:"CSA RoadShow Beijing",type:"demo",startTime:"2017-03-01T04:00",endTime:"2017-03-01T05:00"},{text:"SSO outage",type:"unplanned",startTime:"2017-03-01T06:00",endTime:"2017-03-01T07:00"}]},{date:"2017-03-02T00:00",events:[{text:"investor relationship",type:"demo",startTime:"2017-03-02T03:00",endTime:"2017-03-02T04:00"}]},{date:"2017-03-03T00:00",events:[{text:"Framework Release",type:"planned",startTime:"2017-03-03T03:00",endTime:"2017-03-03T04:00"},{text:"Learning Hub Release",type:"release",startTime:"2017-03-03T04:00",endTime:"2017-03-03T05:00"},{text:"OneScore Release",type:"release",startTime:"2017-03-03T05:00",endTime:"2017-03-03T06:00"}]},{date:"2017-03-04T00:00",events:[{text:"",type:"",startTime:"2017-03-04T00:00",endTime:"2017-03-04T00:00"}]},{date:"2017-03-05T00:00",events:[{text:"DB2 Data backup",type:"other",startTime:"2017-03-05T02:00",endTime:"2017-03-05T05:00"}]}]}},methods:{},created:function(){},mounted:function(){console.log("calender mounted!")},destroyed:function(){console.log("calendar destroyed!")},components:{}};e.componentCalendar=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(22),r=o(i),a=n(0);Vue.component("week-day",{props:["item"],template:r.default,data:function(){return{ifShow:!1,title:"",body:"haha",styleBlock:{position:"absolute",top:"200px",width:"96%",height:"80px",backgroundColor:"rgba(90, 170, 250, 0.5)"}}},methods:{showEvtDialog:function(t){this.$data.styleBlock.top=40*Math.floor(t.layerY/40)+"px",this.$data.ifShow=this.$data.ifShow!==!0;var e=new Date(Date.parse(this.item.date)),n=e.getTimezoneOffset(),o=new Date(Date.parse(this.item.date)+6e4*n).toString().substring(0,15),i=new Date(Date.parse(this.item.date)+18e5*(Math.floor(t.layerY/40)-1)+6e4*n).toLocaleTimeString(),r=new Date(Date.parse(this.item.date)+18e5*(Math.floor(t.layerY/40)+1)+6e4*n).toLocaleTimeString(),s="",l="";i.match("上午")?s=i.substring(2)+" AM":i.match("下午")&&(s=i.substring(2)+" PM"),r.match("上午")?l=r.substring(2)+" AM":r.match("下午")&&(l=r.substring(2)+" PM"),this.title=o+"  "+s+" - "+l,console.log(this.title),a.Dialog.show()},hideEvtDialog:function(t){this.$data.ifShow=!1,console.log("esc press")}},mounted:function(){console.log("weekDay mounted!")},components:{"m-block":{props:["showBlock"],template:'<div v-if="showBlock"></div>',data:function(){return{}}}}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(26),r=o(i);Vue.component("counter",{props:["counterMessage"],template:r.default,data:function(){return{counter:this.counterMessage.length}},methods:{showAlert:function(){alert(100)},toParent:function(){this.$emit("show")}},created:function(){},mounted:function(){console.info("Child component `counter` rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentEvents=void 0;var i=n(27),r=o(i),a={template:r.default,data:function(){return{alertingImageUrl:"images/demo-events.png"}},methods:{},created:function(){},mounted:function(){}};e.componentEvents=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentIndex=void 0;var i=n(28),r=o(i),a=n(17);n(9);var s={template:r.default,data:function(){return{message:"你好：",month:month}},methods:{showMsg:function(){alert("哈哈")},_showChild:function(){this.message="我是子组件触发改变的，使用自定义事件"},renderChart:function(){var t=document.getElementById("Dash1"),e=echarts.init(t),n=document.getElementById("Dash2"),o=echarts.init(n);e.group="group1",o.group="group1",echarts.connect("group1");var i={legend:{show:!0,left:"30%",top:"5%",data:["2XX","3XX","4XX","5XX"]},tooltip:{show:!0,trigger:"axis",alwaysShowContent:!1,axisPointer:{animation:!0,type:"line",lineStyle:{color:"rgba(0,0,0,0.2)",width:1,shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10}},padding:5,textStyle:{color:"#000"},backgroundColor:"rgba(225,232,238,1)",borderWidth:1,borderColor:"#008571"},dataZoom:[{type:"inside",realtime:!0,start:0,end:30,xAxisIndex:[0]},{type:"slider",show:!0,realtime:!0,start:0,end:30,top:"bottom",xAxisIndex:[0]}],xAxis:[{offset:0,nameLocation:"end",axisLine:{onZero:!0,lineStyle:{color:"rgba(0,0,0,1)",width:"1"}},axisTick:{length:10,lineStyle:{color:"rgba(0,0,0,.3)"}},axisLabel:{textStyle:{color:"rgba(0,0,0,1)"}},data:this.month.timepoint}],yAxis:[{offset:-5,name:"RequestCount",nameGap:20,nameTextStyle:{color:"rgba(0, 0, 0, 1)",fontSize:12},type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,formatter:"{value}rpm"},splitLine:{show:!0}}],series:[{name:"2XX",type:"line",symbol:"circle",symbolSize:5,showAllSymbol:!0,hoverAnimation:!0,data:this.month.Count_RC2,itemStyle:{normal:{color:"rgba(0, 113, 113, 1)"}},lineStyle:{normal:{color:"#008571",shadowColor:"rgba(0, 113, 113, 0.3)",shadowBlur:4}}},{name:"3XX",type:"line",symbol:"circle",symbolSize:5,showAllSymbol:!0,hoverAnimation:!0,data:this.month.Count_RC3,itemStyle:{normal:{color:"rgba(18, 18, 18, 1)"}},lineStyle:{normal:{color:"#121212",shadowColor:"rgba(18, 18, 18, 0.3)",shadowBlur:4}}},{name:"4XX",type:"line",symbol:"circle",symbolSize:5,showAllSymbol:!0,hoverAnimation:!0,data:this.month.Count_RC4,itemStyle:{normal:{color:"rgba(239, 193, 0, 1)"}},lineStyle:{normal:{color:"#EFC100",shadowColor:"rgba(239, 193, 0, 0.3)",shadowBlur:4}}},{name:"5XX",type:"line",symbol:"circle",symbolSize:5,showAllSymbol:!0,hoverAnimation:!0,data:this.month.Count_RC5,itemStyle:{normal:{color:"rgba(255, 80, 3, 1)"}},lineStyle:{normal:{color:"#FF5003",shadowColor:"rgba(255, 80, 3, 0.3)",shadowBlur:4}}}]},r={legend:{show:!0,itemGap:20,left:"25%",top:"5%",data:["AverageResponseTime","ExceptionCount"]},tooltip:{show:!0,trigger:"axis",alwaysShowContent:!1,axisPointer:{animation:!0,type:"line",lineStyle:{color:"rgba(0,0,0,0.2)",width:1,shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10}},padding:5,textStyle:{color:"#000"},backgroundColor:"rgba(225,232,238,1)",borderWidth:1,borderColor:"#008571"},dataZoom:[{type:"inside",realtime:!0,start:0,end:30,xAxisIndex:[0]},{type:"slider",show:!0,realtime:!0,start:0,end:30,top:"bottom",xAxisIndex:[0]}],visualMap:[{type:"continuous",min:0,max:500,show:!1,range:[0,500],inRange:{color:["#8CD211","#FF5003","#E71D32"]},seriesIndex:[0]}],xAxis:[{offset:0,axisLine:{onZero:!0,lineStyle:{color:"rgba(0,0,0,1)",width:"1"}},axisTick:{length:10,lineStyle:{color:"rgba(0,0,0,.3)"}},axisLabel:{textStyle:{color:"rgba(0,0,0,1)"}},data:this.month.timepoint}],yAxis:[{offset:-4,name:"RequestDelay(ms)",nameGap:20,nameTextStyle:{color:"rgba(0, 0, 0, 1)",fontSize:12},type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value} ms"},splitLine:{show:!1}},{position:"right",min:0,max:50,offset:0,name:"ExceptionCount",nameGap:20,nameTextStyle:{color:"rgba(0, 0, 0, 1)",fontSize:12},type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value} times"},splitLine:{show:!1}}],series:[{name:"AverageResponseTime",type:"line",symbol:"circle",symbolSize:5,hoverAnimation:!0,data:this.month.AverageElapsed},{name:"ExceptionCount",type:"line",symbol:"circle",symbolSize:5,hoverAnimation:!0,data:this.month.Count_OverThreshold,itemStyle:{normal:{color:"rgba(38, 74, 96, 1)"}},lineStyle:{normal:{color:"#264A60",shadowColor:"rgba(38, 74, 96, 0.3)",shadowBlur:4}}}]};e.setOption(i),o.setOption(r),console.log("charts render"),e.on("click",function(t){e=null}),o.on("click",function(t){o=null})},destroyChart:function(){console.log("charts destroy")}},created:function(){},mounted:function(){var t=this;console.info("Index router rendered"),a.services.getUser(function(e){t.month=e,t.renderChart()},function(){console.log("failed!")})},beforeDestroy:function(){this.destroyChart()},destroyed:function(){console.log("destroyed")}};e.componentIndex=s},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentLogs=void 0;var i=n(29),r=o(i),a={template:r.default,data:function(){return{errorsImageUrl:"images/demo-logs.png"}},methods:{},created:function(){},mounted:function(){}};e.componentLogs=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentMetrics=void 0;var i=n(30),r=o(i),a={template:r.default,data:function(){return{metricsImageUrl:"images/demo-metrics.png"}},methods:{},created:function(){},mounted:function(){}};e.componentMetrics=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentSettings=void 0;var i=n(31),r=o(i),a=(n(0),n(1),{template:r.default,data:function(){return{settingsImageUrl:"images/demo-settings.jpg"}},methods:{},created:function(){},mounted:function(){}});e.componentSettings=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentTests=void 0;var i=n(32),r=o(i),a=n(0);n(16);var s=(n(1),new Vue),l={},d={template:r.default,data:function(){return{todos:[{text:"Learn JavaScript",fulltext:"Learn JavaScript - O'relly Tom Kens"},{text:"Learn Vue",fulltext:"Learn Vue - Gao Sheng Xi"},{text:"Build something awesome",fulltext:"Build something awesome - 2017 3rd version"}],currentView:"home",currentDialog:"dialog1",title:"",body:"",tabsLabel:["标签一","标签二"]}},methods:{newData:function(){var t=this;this.$http.get("./files/_test.todos.json").then(function(e){t.todos=e.body},function(t){})},showDialog:function(){this.title="Dialog 1",this.currentDialog="dialog1",this.body="Turpis cursus facilisis etiam pulvinar est feugiat pulvinar, porttitor ad curabitur curae hac sit, ad aliquam etiam lorem magna vestibulum ante nunc in et nibh venenatis placerat arcu.",a.Dialog.show()},closeDialog:function(){a.Dialog.hide()},updateDialog:function(){this.title="Dialog 2",this.currentDialog="dialog2",a.Dialog.show()},switchComponent:function(){this.currentView="debug"===this.currentView?"home":"debug"}},created:function(){},mounted:function(){s.$on("id-selected",function(t){console.info("ID: ",t)}),l.name="wxyu"},updated:function(){console.info("数据有变化"),console.info(l.name)},components:{home:{template:"<b>动态组件1 {{ name }}</b>",data:function(){return l}},debug:{template:"<b>动态组件2 {{ name }}</b>",data:function(){return l},mounted:function(){var t=this;console.info("动态组件挂载到DOM"),s.$emit("id-selected",1001),this.name="helo",console.info(this.$data),setTimeout(function(){t.name="uuuuuu"},3e3)}},dialog1:{template:"<b>弹窗1</b>"},dialog2:{template:'<b v-on:click="closeDialog">弹窗2，点击关闭</b>',methods:{closeDialog:function(){a.Dialog.hide()}}}}},c={name:100},u=new Vue({data:c,updated:function(){console.info("vmA data updated",this.sourceOfTruth)}}),p=new Vue({data:c,updated:function(){console.info("vmB data updated",this.sourceOfTruth)}});console.info(p.name,u.name),setTimeout(function(){c.name=21,console.info(p.name,u.name)},3e3),e.componentTests=d},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(20),r=o(i),a=n(19),s=o(a),l=new Vue;Vue.component("m-tabs",{props:["tabsLabel"],template:r.default,data:function(){return{}},methods:{changeTab:function(t){l.$emit("change",this.$props.tabsLabel.indexOf(t.target.innerHTML.trim()),t.target.parentNode.parentNode),t.target.parentNode.childNodes.forEach(function(t){t.setAttribute("class","")}),t.target.setAttribute("class","active")}},created:function(){},mounted:function(){}}),Vue.component("m-tab",{template:s.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){this.$el.parentNode.querySelectorAll(".m-tab-content")[0].style.display="block",l.$on("change",function(t,e){e.querySelectorAll(".m-tab-content").forEach(function(t){t.style.display="none"}),e.querySelectorAll(".m-tab-content")[t].style.display="block"})}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.getUser=function(t,e){console.info("Get user info service"),Vue.http.get("http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/").then(function(e){t(e.body)},function(t){console.warn("Get user info service: ["+t.status+"] "+t.statusText),e()})},e.services=o},function(t,e){t.exports='<div class="m-dialog" v-if="showDialog">\r\n\t<div class="m-dialog-mask"></div>\r\n\t<div class="m-comtent">\r\n\t\t<div class="m-header">\r\n\t\t\t<h2>{{ title }}</h2>\r\n\t\t\t<span class="close" title="close" v-on:click="close"><i class="icon iconfont">&#xe613;</i></span>\r\n\t\t</div>\r\n\t\t<div class="m-body">\r\n\t\t\t<!--<slot name="body"><p v-html="body"></p></slot>-->\r\n\t\t\t<p v-html="body"></p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="m-tab-content">\r\n\t<slot></slot>\r\n</div>'},function(t,e){t.exports='<div class="m-tabs">\r\n\t<ul class="m-tab">\r\n\t\t<li v-for="(tab, idx) in tabsLabel" :class="idx === 0 ? \'active\' : \'\'" v-on:click="changeTab">\r\n\t\t\t{{ tab }}\r\n\t\t</li>\r\n\t</ul>\r\n\t<slot></slot>\r\n</div>'},function(t,e){t.exports='<div class="pure-u-1-1">\r\n\t<div class="m-box">\r\n\t\t<div class="u-caldr-select pure-g">\r\n\t\t\t<div class="pure-u-1-3 u-caldr-select-month">\r\n\t\t\t\t{{ month }}\r\n\t\t\t</div>\r\n\t\t\t<!--<titleMonth :month="month"></titleMonth>-->\r\n\t\t\t<div class="pure-u-1-3 u-caldr-select-day">\r\n\t\t\t\t<div class="boxCenter">\r\n\t\t\t\t\t<i class="iconfont icon">&#xe636;</i>\r\n\t\t\t\t\t<span>Wednesday,MAR 1,2017</span>\r\n\t\t\t\t\t<i class="iconfont icon">&#xe632;</i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="pure-u-1-3 u-caldr-select-button">\r\n\t\t\t\t<div class="buttonGrp clearfix">\r\n\t\t\t\t\t<button id="month">Month</button>\r\n\t\t\t\t\t<button id="week">Week</button>\r\n\t\t\t\t\t<button id="today">Today</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="u-caldr-hint">\r\n\t\t\t<div id="u-caldr-hint-red">\r\n\t\t\t\t<div class="colorBlock">.</div>\r\n\t\t\t\t<div class="u-caldr-hint-text">Planned outage</div>\r\n\t\t\t</div>\r\n\t\t\t<div id="u-caldr-hint-black">\r\n\t\t\t\t<div class="colorBlock">.</div>\r\n\t\t\t\t<div class="u-caldr-hint-text">Unplanned outage</div>\r\n\t\t\t</div>\r\n\t\t\t<div id="u-caldr-hint-green">\r\n\t\t\t\t<div class="colorBlock">.</div>\r\n\t\t\t\t<div class="u-caldr-hint-text">Module release, not all outage</div>\r\n\t\t\t</div>\r\n\t\t\t<div id="u-caldr-hint-blue">\r\n\t\t\t\t<div class="colorBlock">.</div>\r\n\t\t\t\t<div class="u-caldr-hint-text">Demo</div>\r\n\t\t\t</div>\r\n\t\t\t<div id="u-caldr-hint-yellow">\r\n\t\t\t\t<div class="colorBlock">.</div>\r\n\t\t\t\t<div class="u-caldr-hint-text">Other activities</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="u-caldr-body">\r\n\t \t\t<div class="u-caldr-body-time">\r\n\t\t\t\t<div class="u-caldr-body-title"><i class="iconfont icon">&#xe625;</i></div>\r\n\t\t   \t\t<div class="u-caldr-body-hour">0AM</div>\r\n\t\t        <div class="u-caldr-body-hour">1AM</div>\r\n\t\t        <div class="u-caldr-body-hour">2AM</div>\r\n\t\t        <div class="u-caldr-body-hour">3AM</div>\r\n\t\t        <div class="u-caldr-body-hour">4AM</div>\r\n\t\t        <div class="u-caldr-body-hour">5AM</div>\r\n\t\t        <div class="u-caldr-body-hour">6AM</div>\r\n\t\t        <div class="u-caldr-body-hour">7AM</div>\r\n\t\t        <div class="u-caldr-body-hour">8AM</div>\r\n\t\t        <div class="u-caldr-body-hour">9AM</div>\r\n\t\t        <div class="u-caldr-body-hour">10AM</div>\r\n\t\t        <div class="u-caldr-body-hour">11AM</div>\r\n\t\t        <div class="u-caldr-body-hour">0PM</div>\r\n\t\t        <div class="u-caldr-body-hour">1PM</div>\r\n\t\t        <div class="u-caldr-body-hour">2PM</div>\r\n\t\t        <div class="u-caldr-body-hour">3PM</div>\r\n\t\t        <div class="u-caldr-body-hour">4PM</div>\r\n\t\t        <div class="u-caldr-body-hour">5PM</div>\r\n\t\t        <div class="u-caldr-body-hour">6PM</div>\r\n\t\t        <div class="u-caldr-body-hour">7PM</div>\r\n\t\t        <div class="u-caldr-body-hour">8PM</div>\r\n\t\t        <div class="u-caldr-body-hour">9PM</div>\r\n\t\t        <div class="u-caldr-body-hour">10PM</div>\r\n\t\t        <div class="u-caldr-body-hour">11PM</div>\r\n\t\t    </div>\r\n\t\t\t<div class="u-caldr-body-week">\r\n\t\t\t\t<div class="pure-g">\r\n\t\t\t\t\t<week-day :item="item" v-for="item in agenda"></week-day>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="weekday">\r\n    <div class="u-caldr-weekDay-title">{{ item.date.substring(6, 10) }}</div>\r\n    <div @click="showEvtDialog" class="u-caldr-weekDay-body">\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <div class="u-caldr-weekDay-body-block"></div>\r\n        <m-block :showBlock="ifShow" :style="styleBlock"></m-block>\r\n    </div>\r\n    <m-dialog :title="title" :body="body"></m-dialog>\r\n</div>\r\n'},function(t,e){t.exports='<p class="pure-u-1-1">Copyright © 2017 – 2017</p>'},function(t,e){t.exports='<ul class="pure-u-1-1">\r\n\t<li><i style="font-size: 20px; vertical-align: -1px; color: #3e8fc6;" class="icon iconfont">&#xe64e;</i> <a>PROJECT</a> <i class="icon iconfont" style="font-size: 12px; font-weight: bold; vertical-align: 1px; color: #3e8fc6;">&#xe632;</i> </li>\r\n\t<li>{{ currentNav }}</li>\r\n</ul>'},function(t,e){t.exports='<ul>\r\n\t<li class="m-logo" title="logo"><router-link to="/"><i class="icon iconfont">&#xe72c;</i></router-link></li>\r\n\t<li v-tooltip="{title: \'In overview, you can check THROUGHPUT<br />and RESPONSE TIME.\', position: \'right\'}"><router-link to="/index"><i class="icon iconfont">&#xe7dd;</i><span>Overview</span></router-link></li>\r\n\t<li v-tooltip="{title: \'In calendar, you can add your demo date,<br /> project deployment date etc.\', position: \'right\'}"><router-link to="/calendar"><i class="icon iconfont">&#xe60f;</i><span>Calendar</span></router-link></li>\r\n\t<li><router-link to="/metrics"><i class="icon iconfont">&#xe6cc;</i><span>Metrics</span></router-link></li>\r\n\t<li><router-link to="/logs"><i class="icon iconfont">&#xe769;</i><span>Logs</span></router-link></li>\r\n\t<li><router-link to="/events"><i class="icon iconfont">&#xe6ae;</i><span>Events</span></router-link></li>\r\n\t<li><router-link to="/settings"><i class="icon iconfont">&#xe6db;</i><span>Settings</span></router-link></li>\r\n</ul>'},function(t,e){t.exports='<div style="background-color: #eeeeee; display: inline-block; padding: 2px 1em;">\r\n\t<h4>子组件</h4>\r\n\t<button v-on:click="counter += 1">{{ counter }}</button>\r\n\t<span>父组件传来的数据：{{ counterMessage }}</span>\r\n\t<p><button @click="showAlert">子组件按钮</button></p>\r\n\t<p><button @click="toParent">子组件传递数据到父组件</button></p>\r\n</div>'},function(t,e){t.exports='<div class="pure-u-1-1">\r\n\t<div class="m-box">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src="alertingImageUrl" style="width: 100%;" />\r\n\t\t</p>\r\n\t</div>\r\n</div>'},function(t,e){t.exports='<div class="pure-g">\r\n\t<div class="pure-u-1-1" >\r\n\t\t<div class="u-dashBtn">\r\n\t\t\t<form>\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<label for="state">Current Monitoring Service</label>\r\n\t        \t\t<select id="state">\r\n\t\t\t\t\t\t<option>Overview</option>\r\n\t\t\t\t\t\t<option>Opportunities</option>\r\n\t\t\t\t\t\t<option>Tech Expertise</option>\r\n\t\t\t\t\t\t<optgroup label="Territory">\r\n    \t\t\t\t\t\t<option>Clients</option>\r\n\t\t\t\t\t\t\t<option>ProspectReach</option>\r\n\t\t\t\t\t\t\t<option>Social Search</option>\r\n\t\t\t\t\t\t\t<option>Crossbrand</option>\r\n  \t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label="Digital Me">\r\n\t\t\t\t\t\t\t<option>My Rep Page</option>\r\n\t\t\t\t\t\t\t<option>IBM OneScore</option>\r\n\t\t\t\t\t\t\t<option>My Feeds</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label="Learning Hub">\r\n\t\t\t\t\t\t\t<option>Digital Mastery</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t        \t\t</select>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t\t<div class = "u-btnGroup">\r\n\t\t    \t<button class="u-btn-clicked">24 Hour</button>\r\n\t\t\t\t<button class="u-btn-unClicked">7 Day</button>\r\n\t\t\t\t<button class="u-btn-unClicked">15 Days</button>\r\n\t\t\t\t<button class="u-btn-unClicked">30 Days</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="pure-u-1-2">\r\n\t\t<div class="m-box">\r\n\t\t\t<h1>THROUGHPUT</h1>\r\n\t\t\t<p>How many requests were fulfilled per hour?</p>\r\n\t\t\t<div id="Dash1" class="chart" style="width:100%;height:400px;"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="pure-u-1-2">\r\n\t\t<div class="m-box">\r\n\t\t\t<h1>RESPONSE TIME</h1>\r\n\t\t\t<p>How long does it take for the service to respond?</p>\r\n\t\t\t<div id="Dash2" class="chart" style="width:100%;height:400px;"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="pure-u-1-1">\r\n\t<div class="m-box">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src="errorsImageUrl" style="width: 100%;" />\r\n\t\t</p>\r\n\t</div>\r\n</div>'},function(t,e){t.exports='<div class="pure-u-1-1">\r\n\t<div class="m-box">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src="metricsImageUrl" style="width: 100%;" />\r\n\t\t</p>\r\n\t</div>\r\n</div>'},function(t,e){t.exports='<div class="pure-u-1-1">\r\n\t<div class="m-box">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src="settingsImageUrl" style="width: 100%;" />\r\n\t\t</p>\r\n\t\t<p v-tooltip="{title: \'Lorem ipsum aliquam habitasse curae feugiat fames suscipit adipiscing senectus, orci non nec leo pharetra etiam metus libero lacus, taciti consequat class augue interdum aliquet integer id.\'}">Lorem ipsum venenatis praesent maecenas mattis gravida.</p>\r\n\t\t<m-dialog></m-dialog>\r\n\t</div>\r\n</div>'},function(t,e){t.exports='<div class="pure-u-1-1">\r\n\t<div class="m-box">\r\n\t\t<h1 style="font-size: 20px; font-weight: normal;">测试页面</h1>\r\n\t\t<ul>\r\n\t\t\t<li v-for="todo in todos" v-tooltip="{title: todo.fulltext}">\r\n\t\t\t\t{{ todo.text }}\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<p><button @click="newData">获取数据</button></p>\r\n\t\t<p><button @click="showDialog">弹窗</button></p>\r\n\t\t<p><button @click="updateDialog">修改弹窗内容</button></p>\r\n\t\t<p><button @click="switchComponent">切换组件</button></p>\r\n\t\t<component :is="currentView">\r\n\t\t\t<!-- 组件在 vm.currentview 变化时改变！ -->\r\n\t\t</component>\r\n\t</div>\r\n\t<m-dialog :title="title" :body="body">\r\n\t\t<component slot="body" :is="currentDialog">\r\n\t\t</component>\r\n\t</m-dialog>\r\n\r\n\t<m-tabs :tabsLabel="tabsLabel">\r\n\t\t<m-tab>\r\n\t\t\tFeugiat senectus conubia ultrices magna eu, enim primis ultricies laoreet faucibus eleifend, dapibus vulputate justo eleifend habitasse cursus tincidunt interdum potenti vitae volutpat fringilla etiam curabitur vehicula, adipiscing felis sem adipiscing ullamcorper primis augue faucibus mattis luctus vel vitae massa facilisis, neque taciti massa praesent sodales ligula, condimentum integer mollis vulputate.\r\n\t\t</m-tab>\r\n\t\t<m-tab>\r\n\t\t\t<p>Elementum massa libero convallis <i><s>congue aliquam pellentesque erat ornare</s></i> aenean velit ad cubilia, fermentum amet ullamcorper potenti euismod vel luctus id sollicitudin justo curabitur venenatis pellentesque ullamcorper proin nulla donec faucibus, cursus augue eros nisl vehicula sem, tellus risus molestie litora nibh etiam ut justo cras sociosqu curae augue nunc ad tempus per, purus auctor class porttitor tellus lobortis urna.</p>\r\n\t\t\t<p>Lobortis <u>s vestibulum dictumst rutrum velit, vitae dictum</u> velit enim taciti malesuada in egestas, a aliquam metus pulvinar aliquam molestie suspendisse habitant suspendisse ut cubilia a aliquet aenean cubilia vulputate hac sollicitudin, dictumst placerat aliquam orci est semper fames nullam porta morbi aliquam egestas nisi dictum augue ut.</p>\r\n\t\t</m-tab>\r\n\t</m-tabs>\r\n\t<p>------</p>\r\n\t<m-tabs :tabsLabel="[\'Web前端\', \'Web服务\']">\r\n\t\t<m-tab>\r\n\t\t\t<p>一段文字，<u v-tooltip="{title: \'你好啊，欢迎使用\', position: \'top\'}">鼠标滑过</u>。</p>\r\n\t\t</m-tab>\r\n\t\t<m-tab>\r\n\t\t\t<button v-on:click="showDialog">弹窗</button>\r\n\t\t</m-tab>\r\n\t</m-tabs>\r\n</div>\r\n'},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n(3),n(4),n(2);var i=n(6),r=o(i),a=n(5),s=new VueRouter({routes:a.routes});new Vue({components:{app:{template:r.default,data:function(){return{mMainClass:"m-"+this.$route.path.substring(1)}},methods:{},beforeUpdate:function(){this.$data.mMainClass="m-"+this.$route.path.substring(1)}}},data:{},router:s}).$mount("app")}]);