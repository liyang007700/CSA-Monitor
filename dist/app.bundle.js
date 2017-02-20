!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=17)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(11),r=o(i);Vue.component("app-footer",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Footer rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(12),r=o(i);Vue.component("app-header",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Header rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(13),r=o(i);Vue.component("app-left-nav",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Left navigator rendered")}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0;var o=n(7),i=n(5),r=n(8),u=[{path:"/index",component:o.componentIndex},{path:"/calendar",component:i.componentCalendar},{path:"/settings",component:r.componentSettings},{path:"/",redirect:"/index"}];e.routes=u},function(t,e){t.exports='<!-- Application root -->\n<div id="m-app" class="pure-g">\n\t<div id="m-header-wrapper" class="pure-u-1-1">\n\t\t<div id="m-header">\n\t\t\t<app-header></app-header>\n\t\t</div>\n\t</div>\n\t<div id="m-left-nav" class="pure-u">\n\t\t<app-left-nav></app-left-nav>\n\t</div>\n\t<div id="m-main-wrapper" class="pure-u-1-1">\n\t\t<div id="m-main">\n\t\t\t<router-view></router-view>\n\t\t</div>\n\t</div>\n\t<div id="m-footer-wrapper" class="pure-u-1-1">\n\t\t<div id="m-footer">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t</div>\n</div>'},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentCalendar=void 0;var i=n(10),r=o(i),u={template:r.default,data:function(){return{calImageUrl:"images/demo-calendar.jpg"}},methods:{},created:function(){},mounted:function(){}};e.componentCalendar=u},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(14),r=o(i);Vue.component("counter",{props:["counterMessage"],template:r.default,data:function(){return{counter:this.counterMessage.length}},methods:{showAlert:function(){alert(100)},toParent:function(){this.$emit("show")}},created:function(){},mounted:function(){console.info("Child component `counter` rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentIndex=void 0;var i=n(15),r=o(i),u=n(9);n(6);var c={template:r.default,data:function(){return{message:"你好："}},methods:{showMsg:function(){alert("哈哈")},_showChild:function(){this.message="我是子组件触发改变的，使用自定义事件"}},created:function(){},mounted:function(){console.info("Index router rendered"),u.services.getUser(function(){console.info("SUCCESS")},function(){console.info("FAIL")})}};e.componentIndex=c},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentSettings=void 0;var i=n(16),r=o(i),u={template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){}};e.componentSettings=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.getUser=function(t,e){console.info("Get user info service"),Vue.http.get("/getUser").then(function(e){(void 0).someData=e.body,t()},function(t){console.warn("Get user info service: ["+t.status+"] "+t.statusText),e()})},e.services=o},function(t,e){t.exports='<div class="m-box">\n\t<p>\n\t\t<img v-bind:src="calImageUrl" style="width: 100%;" />\n\t</p>\n</div>'},function(t,e){t.exports="<p>底部组件</p>"},function(t,e){t.exports='<ul>\n\t<li><i style="font-size: 20px; vertical-align: -1px; color: #3e8fc6;" class="icon iconfont">&#xe64e;</i> <a>PROJECT</a> <i class="icon iconfont" style="font-size: 12px; font-weight: bold; vertical-align: 1px; color: #3e8fc6;">&#xe632;</i> </li>\n\t<li>DASHBOARD</li>\n</ul>'},function(t,e){t.exports='<ul>\n\t<li class="m-logo" title="logo"><router-link to="/"><i class="icon iconfont">&#xe72c;</i></router-link></li>\n\t<li><router-link to="/index"><i class="icon iconfont">&#xe7dd;</i><span>Network</span></router-link></li>\n\t<li><router-link to="/calendar"><i class="icon iconfont">&#xe60f;</i><span>Calendar</span></router-link></li>\n\t<li><a href="#"><i class="icon iconfont">&#xe69d;</i><span>Server</span></a></li>\n\t<li><a href="#"><i class="icon iconfont">&#xe769;</i><span>Errors</span></a></li>\n\t<li><a href="#"><i class="icon iconfont">&#xe6ae;</i><span>Alerting</span></a></li>\n\t<li><router-link to="/settings"><i class="icon iconfont">&#xe6db;</i><span>Settings</span></router-link></li>\n</ul>'},function(t,e){t.exports='<div style="background-color: #eeeeee; display: inline-block; padding: 2px 1em;">\n\t<h4>子组件</h4>\n\t<button v-on:click="counter += 1">{{ counter }}</button>\n\t<span>父组件传来的数据：{{ counterMessage }}</span>\n\t<p><button @click="showAlert">子组件按钮</button></p>\n\t<p><button @click="toParent">子组件传递数据到父组件</button></p>\n</div>'},function(t,e){t.exports='<div class="m-box">\n\t<h1>Index</h1>\n\t<hr/>\n\t<p><input v-model="message"></p>\n\t<p>{{ message }}</p>\n\t<p><button @click="showMsg">点我</button></p>\n\t<div id="example-2">\n\t\t<!-- 子组件 -->\n\t\t<counter v-on:show="_showChild" v-bind:counterMessage="message"></counter>\n\t</div>\n</div>'},function(t,e){t.exports="<p>设置</p>"},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n(1),n(2),n(0);var i=n(4),r=o(i),u=n(3),c=new VueRouter({routes:u.routes});new Vue({components:{app:{template:r.default,data:function(){return{}},methods:{}}},router:c}).$mount("app")}]);