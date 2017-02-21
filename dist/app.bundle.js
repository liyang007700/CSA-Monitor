!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=25)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(16),r=o(i);Vue.component("app-footer",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Footer rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(17),r=o(i);Vue.component("app-header",{template:r.default,data:function(){return{currentNav:"DASHBOARD"}},methods:{},created:function(){},mounted:function(){console.info("Header rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(18),r=o(i);Vue.component("app-left-nav",{template:r.default,data:function(){return{}},methods:{},created:function(){},mounted:function(){console.info("Left navigator rendered")}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0;var o=n(9),i=n(6),r=n(10),a=n(8),s=n(5),l=n(11),c=[{path:"/index",component:o.componentIndex},{path:"/calendar",component:i.componentCalendar},{path:"/metrics",component:r.componentMetrics},{path:"/errors",component:a.componentErrors},{path:"/alerting",component:s.componentAlerting},{path:"/settings",component:l.componentSettings},{path:"/",redirect:"/index"}];e.routes=c},function(t,e){t.exports='<!-- Application root -->\n<div id="m-app" class="pure-g">\n\t<div id="m-header-wrapper" class="pure-u-1-1">\n\t\t<div id="m-header">\n\t\t\t<app-header></app-header>\n\t\t</div>\n\t</div>\n\t<div id="m-left-nav" class="pure-u">\n\t\t<app-left-nav></app-left-nav>\n\t</div>\n\t<div id="m-main-wrapper" class="pure-u-1-1">\n\t\t<div id="m-main" v-bind:class="mMainClass">\n\t\t\t<router-view></router-view>\n\t\t</div>\n\t</div>\n\t<div id="m-footer-wrapper" class="pure-u-1-1">\n\t\t<div id="m-footer">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t</div>\n</div>\n'},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentAlerting=void 0;var i=n(14),r=o(i),a={template:r.default,data:function(){return{alertingImageUrl:"images/demo-alerting.png"}},methods:{},created:function(){},mounted:function(){}};e.componentAlerting=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentCalendar=void 0;var i=n(15),r=o(i),a={template:r.default,data:function(){return{calImageUrl:"images/demo-calendar.jpg"}},methods:{},created:function(){},mounted:function(){}};e.componentCalendar=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(19),r=o(i);Vue.component("counter",{props:["counterMessage"],template:r.default,data:function(){return{counter:this.counterMessage.length}},methods:{showAlert:function(){alert(100)},toParent:function(){this.$emit("show")}},created:function(){},mounted:function(){console.info("Child component `counter` rendered")}})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentErrors=void 0;var i=n(20),r=o(i),a={template:r.default,data:function(){return{errorsImageUrl:"images/demo-errors.png"}},methods:{},created:function(){},mounted:function(){}};e.componentErrors=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentIndex=void 0;var i=n(21),r=o(i);n(12);n(7);var a={template:r.default,data:function(){return{message:"你好："}},methods:{showMsg:function(){alert("哈哈")},_showChild:function(){this.message="我是子组件触发改变的，使用自定义事件"},formatData:function(t,e){for(var n=[],o=0;o<t.length;o++)n[o]=[t[o],e[o]];return n},renderChart:function(){var t=echarts.init(document.getElementById("Dash1")),e=echarts.init(document.getElementById("Dash2")),n={time:["2017-01-10 0:00:00","2017-01-10 1:00:00","2017-01-10 2:00:00","2017-01-10 3:00:00","2017-01-10 4:00:00","2017-01-10 5:00:00","2017-01-10 6:00:00","2017-01-10 7:00:00","2017-01-10 8:00:00","2017-01-10 9:00:00","2017-01-10 0:00:00","2017-01-10 1:00:00","2017-01-10 2:00:00","2017-01-10 3:00:00","2017-01-10 4:00:00","2017-01-10 5:00:00","2017-01-10 6:00:00","2017-01-10 7:00:00","2017-01-10 8:00:00","2017-01-10 9:00:00","2017-01-10 0:00:00","2017-01-10 1:00:00","2017-01-10 2:00:00","2017-01-10 3:00:00","2017-01-11 0:00:00","2017-01-11 1:00:00","2017-01-11 2:00:00","2017-01-11 3:00:00","2017-01-11 4:00:00","2017-01-11 5:00:00","2017-01-11 6:00:00","2017-01-11 7:00:00","2017-01-11 8:00:00","2017-01-11 9:00:00","2017-01-11 0:00:00","2017-01-11 1:00:00","2017-01-11 2:00:00","2017-01-11 3:00:00","2017-01-11 4:00:00","2017-01-11 5:00:00","2017-01-11 6:00:00","2017-01-11 7:00:00","2017-01-11 8:00:00","2017-01-11 9:00:00","2017-01-11 0:00:00","2017-01-11 1:00:00","2017-01-11 2:00:00","2017-01-11 3:00:00","2017-01-12 0:00:00","2017-01-12 1:00:00","2017-01-12 2:00:00","2017-01-12 3:00:00","2017-01-12 4:00:00","2017-01-12 5:00:00","2017-01-12 6:00:00","2017-01-12 7:00:00","2017-01-12 8:00:00","2017-01-12 9:00:00","2017-01-12 0:00:00","2017-01-12 1:00:00","2017-01-12 2:00:00","2017-01-12 3:00:00","2017-01-12 4:00:00","2017-01-12 5:00:00","2017-01-12 6:00:00","2017-01-12 7:00:00","2017-01-12 8:00:00","2017-01-12 9:00:00","2017-01-12 0:00:00","2017-01-12 1:00:00","2017-01-12 2:00:00","2017-01-12 3:00:00","2017-01-13 0:00:00","2017-01-13 1:00:00","2017-01-13 2:00:00","2017-01-13 3:00:00","2017-01-13 4:00:00","2017-01-13 5:00:00","2017-01-13 6:00:00","2017-01-13 7:00:00","2017-01-13 8:00:00","2017-01-13 9:00:00","2017-01-13 0:00:00","2017-01-13 1:00:00","2017-01-13 2:00:00","2017-01-13 3:00:00","2017-01-13 4:00:00","2017-01-13 5:00:00","2017-01-13 6:00:00","2017-01-13 7:00:00","2017-01-13 8:00:00","2017-01-13 9:00:00","2017-01-13 0:00:00","2017-01-13 1:00:00","2017-01-13 2:00:00","2017-01-13 3:00:00","2017-01-14 0:00:00","2017-01-14 1:00:00","2017-01-14 2:00:00","2017-01-14 3:00:00","2017-01-14 4:00:00","2017-01-14 5:00:00","2017-01-14 6:00:00","2017-01-14 7:00:00","2017-01-14 8:00:00","2017-01-14 9:00:00","2017-01-14 0:00:00","2017-01-14 1:00:00","2017-01-14 2:00:00","2017-01-14 3:00:00","2017-01-14 4:00:00","2017-01-14 5:00:00","2017-01-14 6:00:00","2017-01-14 7:00:00","2017-01-14 8:00:00","2017-01-14 9:00:00","2017-01-14 0:00:00","2017-01-14 1:00:00","2017-01-14 2:00:00","2017-01-14 3:00:00","2017-01-15 0:00:00","2017-01-15 1:00:00","2017-01-15 2:00:00","2017-01-15 3:00:00","2017-01-15 4:00:00","2017-01-15 5:00:00","2017-01-15 6:00:00","2017-01-15 7:00:00","2017-01-15 8:00:00","2017-01-15 9:00:00","2017-01-15 0:00:00","2017-01-15 1:00:00","2017-01-15 2:00:00","2017-01-15 3:00:00","2017-01-15 4:00:00","2017-01-15 5:00:00","2017-01-15 6:00:00","2017-01-15 7:00:00","2017-01-15 8:00:00","2017-01-15 9:00:00","2017-01-15 0:00:00","2017-01-15 1:00:00","2017-01-15 2:00:00","2017-01-15 3:00:00","2017-01-16 0:00:00","2017-01-16 1:00:00","2017-01-16 2:00:00","2017-01-16 3:00:00","2017-01-16 4:00:00","2017-01-16 5:00:00","2017-01-16 6:00:00","2017-01-16 7:00:00","2017-01-16 8:00:00","2017-01-16 9:00:00","2017-01-16 0:00:00","2017-01-16 1:00:00","2017-01-16 2:00:00","2017-01-16 3:00:00","2017-01-16 4:00:00","2017-01-16 5:00:00","2017-01-16 6:00:00","2017-01-16 7:00:00","2017-01-16 8:00:00","2017-01-16 9:00:00","2017-01-16 0:00:00","2017-01-16 1:00:00","2017-01-16 2:00:00","2017-01-16 3:00:00","2017-01-17 0:00:00","2017-01-17 1:00:00","2017-01-17 2:00:00","2017-01-17 3:00:00","2017-01-17 4:00:00","2017-01-17 5:00:00","2017-01-17 6:00:00","2017-01-17 7:00:00","2017-01-17 8:00:00","2017-01-17 9:00:00","2017-01-17 0:00:00","2017-01-17 1:00:00","2017-01-17 2:00:00","2017-01-17 3:00:00","2017-01-17 4:00:00","2017-01-17 5:00:00","2017-01-17 6:00:00","2017-01-17 7:00:00","2017-01-17 8:00:00","2017-01-17 9:00:00","2017-01-17 0:00:00","2017-01-17 1:00:00","2017-01-17 2:00:00","2017-01-17 3:00:00","2017-01-18 0:00:00","2017-01-18 1:00:00","2017-01-18 2:00:00","2017-01-18 3:00:00","2017-01-18 4:00:00","2017-01-18 5:00:00","2017-01-18 6:00:00","2017-01-18 7:00:00","2017-01-18 8:00:00","2017-01-18 9:00:00","2017-01-18 0:00:00","2017-01-18 1:00:00","2017-01-18 2:00:00","2017-01-18 3:00:00","2017-01-18 4:00:00","2017-01-18 5:00:00","2017-01-18 6:00:00","2017-01-18 7:00:00","2017-01-18 8:00:00","2017-01-18 9:00:00","2017-01-18 0:00:00","2017-01-18 1:00:00","2017-01-18 2:00:00","2017-01-18 3:00:00","2017-01-19 0:00:00","2017-01-19 1:00:00","2017-01-19 2:00:00","2017-01-19 3:00:00","2017-01-19 4:00:00","2017-01-19 5:00:00","2017-01-19 6:00:00","2017-01-19 7:00:00","2017-01-19 8:00:00","2017-01-19 9:00:00","2017-01-19 0:00:00","2017-01-19 1:00:00","2017-01-19 2:00:00","2017-01-19 3:00:00","2017-01-19 4:00:00","2017-01-19 5:00:00","2017-01-19 6:00:00","2017-01-19 7:00:00","2017-01-19 8:00:00","2017-01-19 9:00:00","2017-01-19 0:00:00","2017-01-19 1:00:00","2017-01-19 2:00:00","2017-01-19 3:00:00","2017-01-20 0:00:00","2017-01-20 1:00:00","2017-01-20 2:00:00","2017-01-20 3:00:00","2017-01-20 4:00:00","2017-01-20 5:00:00","2017-01-20 6:00:00","2017-01-20 7:00:00","2017-01-20 8:00:00","2017-01-20 9:00:00","2017-01-20 0:00:00","2017-01-20 1:00:00","2017-01-20 2:00:00","2017-01-20 3:00:00","2017-01-20 4:00:00","2017-01-20 5:00:00","2017-01-20 6:00:00","2017-01-20 7:00:00","2017-01-20 8:00:00","2017-01-20 9:00:00","2017-01-20 0:00:00","2017-01-20 1:00:00","2017-01-20 2:00:00","2017-01-20 3:00:00","2017-01-21 0:00:00","2017-01-21 1:00:00","2017-01-21 2:00:00","2017-01-21 3:00:00","2017-01-21 4:00:00","2017-01-21 5:00:00","2017-01-21 6:00:00","2017-01-21 7:00:00","2017-01-21 8:00:00","2017-01-21 9:00:00","2017-01-21 0:00:00","2017-01-21 1:00:00","2017-01-21 2:00:00","2017-01-21 3:00:00","2017-01-21 4:00:00","2017-01-21 5:00:00","2017-01-21 6:00:00","2017-01-21 7:00:00","2017-01-21 8:00:00","2017-01-21 9:00:00","2017-01-21 0:00:00","2017-01-21 1:00:00","2017-01-21 2:00:00","2017-01-21 3:00:00","2017-01-22 0:00:00","2017-01-22 1:00:00","2017-01-22 2:00:00","2017-01-22 3:00:00","2017-01-22 4:00:00","2017-01-22 5:00:00","2017-01-22 6:00:00","2017-01-22 7:00:00","2017-01-22 8:00:00","2017-01-22 9:00:00","2017-01-22 0:00:00","2017-01-22 1:00:00","2017-01-22 2:00:00","2017-01-22 3:00:00","2017-01-22 4:00:00","2017-01-22 5:00:00","2017-01-22 6:00:00","2017-01-22 7:00:00","2017-01-22 8:00:00","2017-01-22 9:00:00","2017-01-22 0:00:00","2017-01-22 1:00:00","2017-01-22 2:00:00","2017-01-22 3:00:00","2017-01-23 0:00:00","2017-01-23 1:00:00","2017-01-23 2:00:00","2017-01-23 3:00:00","2017-01-23 4:00:00","2017-01-23 5:00:00","2017-01-23 6:00:00","2017-01-23 7:00:00","2017-01-23 8:00:00","2017-01-23 9:00:00","2017-01-23 0:00:00","2017-01-23 1:00:00","2017-01-23 2:00:00","2017-01-23 3:00:00","2017-01-23 4:00:00","2017-01-23 5:00:00","2017-01-23 6:00:00","2017-01-23 7:00:00","2017-01-23 8:00:00","2017-01-23 9:00:00","2017-01-23 0:00:00","2017-01-23 1:00:00","2017-01-23 2:00:00","2017-01-23 3:00:00","2017-01-24 0:00:00","2017-01-24 1:00:00","2017-01-24 2:00:00","2017-01-24 3:00:00","2017-01-24 4:00:00","2017-01-24 5:00:00","2017-01-24 6:00:00","2017-01-24 7:00:00","2017-01-24 8:00:00","2017-01-24 9:00:00","2017-01-24 0:00:00","2017-01-24 1:00:00","2017-01-24 2:00:00","2017-01-24 3:00:00","2017-01-24 4:00:00","2017-01-24 5:00:00","2017-01-24 6:00:00","2017-01-24 7:00:00","2017-01-24 8:00:00","2017-01-24 9:00:00","2017-01-24 0:00:00","2017-01-24 1:00:00","2017-01-24 2:00:00","2017-01-24 3:00:00","2017-01-25 0:00:00","2017-01-25 1:00:00","2017-01-25 2:00:00","2017-01-25 3:00:00","2017-01-25 4:00:00","2017-01-25 5:00:00","2017-01-25 6:00:00","2017-01-25 7:00:00","2017-01-25 8:00:00","2017-01-25 9:00:00","2017-01-25 0:00:00","2017-01-25 1:00:00","2017-01-25 2:00:00","2017-01-25 3:00:00","2017-01-25 4:00:00","2017-01-25 5:00:00","2017-01-25 6:00:00","2017-01-25 7:00:00","2017-01-25 8:00:00","2017-01-25 9:00:00","2017-01-25 0:00:00","2017-01-25 1:00:00","2017-01-25 2:00:00","2017-01-25 3:00:00","2017-01-26 0:00:00","2017-01-26 1:00:00","2017-01-26 2:00:00","2017-01-26 3:00:00","2017-01-26 4:00:00","2017-01-26 5:00:00","2017-01-26 6:00:00","2017-01-26 7:00:00","2017-01-26 8:00:00","2017-01-26 9:00:00","2017-01-26 0:00:00","2017-01-26 1:00:00","2017-01-26 2:00:00","2017-01-26 3:00:00","2017-01-26 4:00:00","2017-01-26 5:00:00","2017-01-26 6:00:00","2017-01-26 7:00:00","2017-01-26 8:00:00","2017-01-26 9:00:00","2017-01-26 0:00:00","2017-01-26 1:00:00","2017-01-26 2:00:00","2017-01-26 3:00:00","2017-01-27 0:00:00","2017-01-27 1:00:00","2017-01-27 2:00:00","2017-01-27 3:00:00","2017-01-27 4:00:00","2017-01-27 5:00:00","2017-01-27 6:00:00","2017-01-27 7:00:00","2017-01-27 8:00:00","2017-01-27 9:00:00","2017-01-27 0:00:00","2017-01-27 1:00:00","2017-01-27 2:00:00","2017-01-27 3:00:00","2017-01-27 4:00:00","2017-01-27 5:00:00","2017-01-27 6:00:00","2017-01-27 7:00:00","2017-01-27 8:00:00","2017-01-27 9:00:00","2017-01-27 0:00:00","2017-01-27 1:00:00","2017-01-27 2:00:00","2017-01-27 3:00:00","2017-01-28 0:00:00","2017-01-28 1:00:00","2017-01-28 2:00:00","2017-01-28 3:00:00","2017-01-28 4:00:00","2017-01-28 5:00:00","2017-01-28 6:00:00","2017-01-28 7:00:00","2017-01-28 8:00:00","2017-01-28 9:00:00","2017-01-28 0:00:00","2017-01-28 1:00:00","2017-01-28 2:00:00","2017-01-28 3:00:00","2017-01-28 4:00:00","2017-01-28 5:00:00","2017-01-28 6:00:00","2017-01-28 7:00:00","2017-01-28 8:00:00","2017-01-28 9:00:00","2017-01-28 0:00:00","2017-01-28 1:00:00","2017-01-28 2:00:00","2017-01-28 3:00:00","2017-01-29 0:00:00","2017-01-29 1:00:00","2017-01-29 2:00:00","2017-01-29 3:00:00","2017-01-29 4:00:00","2017-01-29 5:00:00","2017-01-29 6:00:00","2017-01-29 7:00:00","2017-01-29 8:00:00","2017-01-29 9:00:00","2017-01-29 0:00:00","2017-01-29 1:00:00","2017-01-29 2:00:00","2017-01-29 3:00:00","2017-01-29 4:00:00","2017-01-29 5:00:00","2017-01-29 6:00:00","2017-01-29 7:00:00","2017-01-29 8:00:00","2017-01-29 9:00:00","2017-01-29 0:00:00","2017-01-29 1:00:00","2017-01-29 2:00:00","2017-01-29 3:00:00","2017-01-30 0:00:00","2017-01-30 1:00:00","2017-01-30 2:00:00","2017-01-30 3:00:00","2017-01-30 4:00:00","2017-01-30 5:00:00","2017-01-30 6:00:00","2017-01-30 7:00:00","2017-01-30 8:00:00","2017-01-30 9:00:00","2017-01-30 0:00:00","2017-01-30 1:00:00","2017-01-30 2:00:00","2017-01-30 3:00:00","2017-01-30 4:00:00","2017-01-30 5:00:00","2017-01-30 6:00:00","2017-01-30 7:00:00","2017-01-30 8:00:00","2017-01-30 9:00:00","2017-01-30 0:00:00","2017-01-30 1:00:00","2017-01-30 2:00:00","2017-01-30 3:00:00","2017-01-31 0:00:00","2017-01-31 1:00:00","2017-01-31 2:00:00","2017-01-31 3:00:00","2017-01-31 4:00:00","2017-01-31 5:00:00","2017-01-31 6:00:00","2017-01-31 7:00:00","2017-01-31 8:00:00","2017-01-31 9:00:00","2017-01-31 0:00:00","2017-01-31 1:00:00","2017-01-31 2:00:00","2017-01-31 3:00:00","2017-01-31 4:00:00","2017-01-31 5:00:00","2017-01-31 6:00:00","2017-01-31 7:00:00","2017-01-31 8:00:00","2017-01-31 9:00:00","2017-01-31 0:00:00","2017-01-31 1:00:00","2017-01-31 2:00:00","2017-01-31 3:00:00","2017-02-01 0:00:00","2017-02-01 1:00:00","2017-02-01 2:00:00","2017-02-01 3:00:00","2017-02-01 4:00:00","2017-02-01 5:00:00","2017-02-01 6:00:00","2017-02-01 7:00:00","2017-02-01 8:00:00","2017-02-01 9:00:00","2017-02-01 0:00:00","2017-02-01 1:00:00","2017-02-01 2:00:00","2017-02-01 3:00:00","2017-02-01 4:00:00","2017-02-01 5:00:00","2017-02-01 6:00:00","2017-02-01 7:00:00","2017-02-01 8:00:00","2017-02-01 9:00:00","2017-02-01 0:00:00","2017-02-01 1:00:00","2017-02-01 2:00:00","2017-02-01 3:00:00","2017-02-02 0:00:00","2017-02-02 1:00:00","2017-02-02 2:00:00","2017-02-02 3:00:00","2017-02-02 4:00:00","2017-02-02 5:00:00","2017-02-02 6:00:00","2017-02-02 7:00:00","2017-02-02 8:00:00","2017-02-02 9:00:00","2017-02-02 0:00:00","2017-02-02 1:00:00","2017-02-02 2:00:00","2017-02-02 3:00:00","2017-02-02 4:00:00","2017-02-02 5:00:00","2017-02-02 6:00:00","2017-02-02 7:00:00","2017-02-02 8:00:00","2017-02-02 9:00:00","2017-02-02 0:00:00","2017-02-02 1:00:00","2017-02-02 2:00:00","2017-02-02 3:00:00","2017-02-03 0:00:00","2017-02-03 1:00:00","2017-02-03 2:00:00","2017-02-03 3:00:00","2017-02-03 4:00:00","2017-02-03 5:00:00","2017-02-03 6:00:00","2017-02-03 7:00:00","2017-02-03 8:00:00","2017-02-03 9:00:00","2017-02-03 0:00:00","2017-02-03 1:00:00","2017-02-03 2:00:00","2017-02-03 3:00:00","2017-02-03 4:00:00","2017-02-03 5:00:00","2017-02-03 6:00:00","2017-02-03 7:00:00","2017-02-03 8:00:00","2017-02-03 9:00:00","2017-02-03 0:00:00","2017-02-03 1:00:00","2017-02-03 2:00:00","2017-02-03 3:00:00","2017-02-04 0:00:00","2017-02-04 1:00:00","2017-02-04 2:00:00","2017-02-04 3:00:00","2017-02-04 4:00:00","2017-02-04 5:00:00","2017-02-04 6:00:00","2017-02-04 7:00:00","2017-02-04 8:00:00","2017-02-04 9:00:00","2017-02-04 0:00:00","2017-02-04 1:00:00","2017-02-04 2:00:00","2017-02-04 3:00:00","2017-02-04 4:00:00","2017-02-04 5:00:00","2017-02-04 6:00:00","2017-02-04 7:00:00","2017-02-04 8:00:00","2017-02-04 9:00:00","2017-02-04 0:00:00","2017-02-04 1:00:00","2017-02-04 2:00:00","2017-02-04 3:00:00","2017-02-05 0:00:00","2017-02-05 1:00:00","2017-02-05 2:00:00","2017-02-05 3:00:00","2017-02-05 4:00:00","2017-02-05 5:00:00","2017-02-05 6:00:00","2017-02-05 7:00:00","2017-02-05 8:00:00","2017-02-05 9:00:00","2017-02-05 0:00:00","2017-02-05 1:00:00","2017-02-05 2:00:00","2017-02-05 3:00:00","2017-02-05 4:00:00","2017-02-05 5:00:00","2017-02-05 6:00:00","2017-02-05 7:00:00","2017-02-05 8:00:00","2017-02-05 9:00:00","2017-02-05 0:00:00","2017-02-05 1:00:00","2017-02-05 2:00:00","2017-02-05 3:00:00","2017-02-06 0:00:00","2017-02-06 1:00:00","2017-02-06 2:00:00","2017-02-06 3:00:00","2017-02-06 4:00:00","2017-02-06 5:00:00","2017-02-06 6:00:00","2017-02-06 7:00:00","2017-02-06 8:00:00","2017-02-06 9:00:00","2017-02-06 0:00:00","2017-02-06 1:00:00","2017-02-06 2:00:00","2017-02-06 3:00:00","2017-02-06 4:00:00","2017-02-06 5:00:00","2017-02-06 6:00:00","2017-02-06 7:00:00","2017-02-06 8:00:00","2017-02-06 9:00:00","2017-02-06 0:00:00","2017-02-06 1:00:00","2017-02-06 2:00:00","2017-02-06 3:00:00","2017-02-07 0:00:00","2017-02-07 1:00:00","2017-02-07 2:00:00","2017-02-07 3:00:00","2017-02-07 4:00:00","2017-02-07 5:00:00","2017-02-07 6:00:00","2017-02-07 7:00:00","2017-02-07 8:00:00","2017-02-07 9:00:00","2017-02-07 0:00:00","2017-02-07 1:00:00","2017-02-07 2:00:00","2017-02-07 3:00:00","2017-02-07 4:00:00","2017-02-07 5:00:00","2017-02-07 6:00:00","2017-02-07 7:00:00","2017-02-07 8:00:00","2017-02-07 9:00:00","2017-02-07 0:00:00","2017-02-07 1:00:00","2017-02-07 2:00:00","2017-02-07 3:00:00","2017-02-08 0:00:00","2017-02-08 1:00:00","2017-02-08 2:00:00","2017-02-08 3:00:00","2017-02-08 4:00:00","2017-02-08 5:00:00","2017-02-08 6:00:00","2017-02-08 7:00:00","2017-02-08 8:00:00","2017-02-08 9:00:00","2017-02-08 0:00:00","2017-02-08 1:00:00","2017-02-08 2:00:00","2017-02-08 3:00:00","2017-02-08 4:00:00","2017-02-08 5:00:00","2017-02-08 6:00:00","2017-02-08 7:00:00","2017-02-08 8:00:00","2017-02-08 9:00:00","2017-02-08 0:00:00","2017-02-08 1:00:00","2017-02-08 2:00:00","2017-02-08 3:00:00"],dataRequest:[213,90,180,159,79,215,219,86,224,116,213,212,138,133,170,162,154,181,76,79,159,123,233,227,82,219,227,207,209,107,142,134,208,159,202,200,99,206,157,92,51,168,79,187,154,223,197,121,78,139,108,151,92,112,175,135,84,230,215,104,60,244,241,67,172,119,187,133,132,122,174,129,124,85,72,51,200,649,124,238,189,223,146,66,50,207,97,71,232,194,111,87,160,228,126,60,61,52,71,60,178,210,90,84,199,250,242,205,246,166,230,151,171,171,123,190,206,207,128,137,161,76,147,211,187,110,214,214,180,99,198,247,170,109,177,156,82,562,159,126,80,202,86,126,75,196,132,79,128,147,83,70,84,124,59,104,228,248,239,61,130,165,87,244,74,69,53,247,92,118,78,243,164,181,216,242,197,116,159,200,104,237,200,144,115,61,64,150,57,136,177,136,210,88,157,146,105,61,208,144,72,214,208,189,231,222,125,162,121,156,111,92,245,59,154,168,161,63,193,162,125,74,107,239,137,131,92,133,108,890,214,158,243,101,148,235,174,136,249,161,193,186,64,119,189,107,122,99,131,237,87,105,191,108,210,71,193,130,196,54,61,122,88,141,245,186,124,149,170,121,100,207,430,59,137,229,191,136,193,199,59,71,142,103,233,111,100,220,900,92,221,245,198,83,170,79,205,214,237,421,96,231,248,138,104,112,241,152,108,65,244,151,146,72,71,230,98,186,202,566,125,239,242,104,196,75,160,211,214,224,201,231,590,168,114,74,110,141,102,222,86,141,57,178,155,111,100,120,155,129,232,243,153,86,151,108,216,131,120,74,232,789,460,113,210,188,163,140,129,231,53,198,54,58,120,87,193,147,246,114,136,52,243,157,158,215,177,467,121,753,247,218,110,142,225,187,91,54,204,210,66,165,211,140,241,142,124,168,81,114,181,72,132,246,166,172,232,563,219,59,140,148,62,58,236,140,146,206,190,67,209,121,108,178,197,171,233,135,194,103,112,148,230,98,134,193,245,63,79,379,197,113,233,176,56,208,97,74,113,118,82,61,172,171,178,112,219,122,52,133,187,70,153,220,98,201,91,157,220,681,138,140,195,230,196,146,66,85,193,62,222,114,171,228,181,161,147,238,245,199,201,165,176,190,212,104,246,168,361,69,145,180,138,65,220,126,208,190,104,78,94,84,191,120,161,78,96,227,99,159,161,164,105,177,120,64,212,890,221,203,207,177,210,116,224,249,151,110,172,172,53,148,146,230,67,130,153,81,230,212,238,67,138,149,61,192,461,135,163,221,242,131,130,221,96,201,120,200,208,81,163,113,62,223,131,151,116,97,161,215,84,111,163,190,193,751,204,108,186,101,56,162,56,138,246,92,179,247,141,75,177,233,116,216,158,156,119,239,70,228,56,224,72,128,691,123,161,187,248,163,187,188,126,181,153,92,191,202,86,102,81,173,203,143,136,159,110,221,68,155,182,90,79,401,61,88,140,130,181,149,159,104,109,165,246,64,211,214,245,235,185,198,116,205,126,56,78,142,126,192,145,221,53,491,197,225,168,131,131,158,170,57,232,176,152,80,195,225,94,182,129,174,130,53,142,69,123,176,89,73,224,793,244,117,97,116,71,192,86,115],dataTime:[565,480,441,439,433,498,427,487,1468,577,523,571,512,502,510,416,245,446,592,508,455,411,423,408,447,503,441,547,549,527,445,429,3498,468,418,518,406,486,477,516,419,539,440,532,458,467,411,578,504,100,494,449,516,412,448,482,573,583,560,300,465,524,491,490,455,464,465,504,521,554,534,452,430,1809,541,433,547,575,401,448,405,425,509,478,545,477,445,597,432,1e3,512,543,462,488,548,564,505,468,474,488,308,410,596,402,465,481,567,475,533,441,414,594,529,425,586,455,545,1970,415,409,575,522,518,414,411,415,510,593,504,572,3970,567,455,575,563,473,441,437,599,516,508,410,578,503,474,414,214,467,416,507,417,461,577,544,548,596,462,596,500,1308,556,418,504,467,464,600,577,1430,514,542,430,492,480,585,481,491,484,542,546,491,523,600,154,458,492,470,578,439,524,478,541,576,434,462,588,503,551,578,1675,525,400,472,411,437,463,433,538,410,548,462,447,590,444,412,902,471,445,587,455,428,412,518,538,596,542,597,421,886,427,543,474,500,543,413,526,461,579,426,524,595,462,321,559,538,479,474,580,535,495,558,521,517,458,456,581,583,419,430,104,528,448,576,541,541,487,582,428,563,436,552,405,592,1903,526,576,449,415,482,497,455,434,548,567,2008,406,464,567,447,405,561,419,558,530,441,446,515,1567,461,477,591,415,446,562,409,473,516,404,571,584,409,524,521,407,513,426,1265,444,429,482,544,596,493,599,516,1477,435,448,415,478,460,418,568,572,546,550,424,477,426,439,508,521,457,267,597,562,458,402,547,528,492,496,460,864,559,444,421,477,425,452,510,418,508,579,401,585,889,575,515,442,464,593,515,417,534,434,459,527,469,494,485,435,554,411,430,213,554,538,455,486,489,460,514,440,441,552,331,494,585,590,440,590,464,547,581,584,464,542,446,593,428,444,511,1649,472,478,505,404,558,468,546,455,587,548,164,412,481,428,481,481,400,471,462,450,593,542,509,573,467,563,578,125,527,429,433,521,408,501,498,594,543,573,417,522,561,1664,588,434,485,523,534,475,485,539,412,1503,495,553,583,413,593,517,404,493,403,494,533,954,512,403,455,551,595,434,409,590,477,404,484,530,566,556,537,409,411,1536,510,594,512,490,482,581,453,596,569,441,404,533,428,492,1165,447,463,576,429,571,431,403,402,566,556,449,463,538,2963,493,434,489,567,585,431,441,542,405,202,486,480,521,559,444,440,432,404,490,440,495,503,426,536,514,481,400,517,1637,566,438,511,406,470,412,460,437,458,532,497,423,493,524,402,422,554,546,454,561,480,559,545,443,456,533,576,1259,533,549,476,585,570,528,510,555,594,429,434,515,336,573,497,479,517,533,536,437,494,547,459,1765,410,509,522,408,585,433,473,492,502,542,513,558,509,470,441,446,566,454,444,235,572,587,526,538,493,556,438,415,437,448,1415,473,567,583,464,593,461,532,437,553,579,424,541,540,581,530,596,404,438,516,475,565,527,481,444,418,568,490,519,593,1411,504,497,427,459,413,595,506,477,451,475,552,546,488,495,451,468,426,547,557,419,502,493,535,535,428,500,2547,502,560,422,403,516,431,574,454,573,554,542,483,1452,472,411,569,585,532,548,476,562,460,500,531,557,504,1452]},o={tooltip:{show:!0,trigger:"axis",alwaysShowContent:!0,axisPointer:{animation:!0,type:"line",lineStyle:{color:"rgba(153,0,204,1)",width:2}},padding:10,textStyle:{color:"#fff",fontStyle:"oblique"},position:["40%","0%"],backgroundColor:"rgba(153,0,204,1)"},dataZoom:[{type:"inside",realtime:!0,start:0,end:30,xAxisIndex:[0]},{type:"slider",show:!0,realtime:!0,start:0,end:30,top:"bottom",xAxisIndex:[0]}],visualMap:[{type:"continuous",min:0,max:1e3,show:!1,range:[0,800],inRange:{color:["#33cc33","#ff6600","#800000"]}}],xAxis:[{offset:0,nameLocation:"end",axisLine:{onZero:!0,lineStyle:{color:"rgba(255,153,0,1)",width:"2"}},axisTick:{length:10,lineStyle:{color:"rgba(0,0,0,.3)"}},axisLabel:{textStyle:{color:"rgba(0,0,0,1)"}},data:n.time}],yAxis:[{offset:0,min:0,max:800,name:"RequestCount",nameGap:20,nameTextStyle:{color:"rgba(204, 0, 0, 1)"},type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value} rpm"},splitLine:{show:!1}}],series:[{name:"ServiceRequestCount",type:"line",symbolSize:4,hoverAnimation:!1,data:n.dataRequest,markLine:{silent:!1,data:[{yAxis:400},{yAxis:800}]}}]},i={tooltip:{show:!0,trigger:"axis",alwaysShowContent:!0,axisPointer:{animation:!0,type:"line",lineStyle:{color:"rgba(153,0,204,1)",width:2}},padding:10,textStyle:{color:"#fff",fontStyle:"oblique"},position:["40%","0%"],backgroundColor:"rgba(153,0,204,1)"},dataZoom:[{type:"inside",realtime:!0,start:0,end:30,xAxisIndex:[0]},{type:"slider",show:!0,realtime:!0,start:0,end:30,top:"bottom",xAxisIndex:[0]}],visualMap:[{type:"continuous",min:0,max:2e3,show:!1,range:[0,2e3],inRange:{color:["#33cc33","#ff6600","#800000"]}}],xAxis:[{offset:0,axisLine:{onZero:!0,lineStyle:{color:"rgba(255,153,0,1)",width:"2"}},axisTick:{length:10,lineStyle:{color:"rgba(0,0,0,.3)"}},axisLabel:{textStyle:{color:"rgba(0,0,0,1)"}},data:n.time}],yAxis:[{offset:0,min:0,max:2e3,name:"RequestDelay(ms)",nameGap:20,nameTextStyle:{color:"rgba(204, 0, 0, 1)"},type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value} ms"},splitLine:{show:!1}}],series:[{name:"ServiceRequestDelay",type:"line",symbolSize:4,hoverAnimation:!1,data:n.dataTime,markLine:{silent:!1,data:[{yAxis:1e3},{yAxis:2e3}]}}]};t.setOption(o),e.setOption(i)}},created:function(){},mounted:function(){console.info("Index router rendered"),this.renderChart()}};e.componentIndex=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentMetrics=void 0;var i=n(22),r=o(i),a={template:r.default,data:function(){return{metricsImageUrl:"images/demo-metrics.png"}},methods:{},created:function(){},mounted:function(){}};e.componentMetrics=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.componentSettings=void 0;var i=n(23),r=o(i),a=n(13),s={template:r.default,data:function(){return{settingsImageUrl:"images/demo-settings.jpg"}},methods:{},created:function(){},mounted:function(){a.Dialog.show()}};e.componentSettings=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.getUser=function(t,e){console.info("Get user info service"),Vue.http.get("/server/day.json").then(function(e){console.log(e.body),(void 0).someData=e.body,t()},function(t){console.warn("Get user info service: ["+t.status+"] "+t.statusText),e()})},e.services=o},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Dialog=void 0;var i=n(24),r=o(i),a={};Vue.component("m-dialog",{props:[],template:r.default,data:function(){return{showDialog:!1,title:"DIALOG TITLE"}},methods:{},created:function(){},mounted:function(){var t=this;a.show=function(){t.$data.showDialog=!0},a.hide=function(){t.$data.showDialog=!1}}}),e.Dialog=a},function(t,e){t.exports='<div class="m-box">\n\t<p>\n\t\t<img v-bind:src="alertingImageUrl" style="width: 100%;" />\n\t</p>\n</div>'},function(t,e){t.exports='<div class="m-box">\n\t<p>\n\t\t<img v-bind:src="calImageUrl" style="width: 100%;" />\n\t</p>\n</div>'},function(t,e){t.exports="<p>Copyright © 2017 – 2017</p>"},function(t,e){t.exports='<ul>\n\t<li><i style="font-size: 20px; vertical-align: -1px; color: #3e8fc6;" class="icon iconfont">&#xe64e;</i> <a>PROJECT</a> <i class="icon iconfont" style="font-size: 12px; font-weight: bold; vertical-align: 1px; color: #3e8fc6;">&#xe632;</i> </li>\n\t<li>{{ currentNav }}</li>\n</ul>'},function(t,e){t.exports='<ul>\n\t<li class="m-logo" title="logo"><router-link to="/"><i class="icon iconfont">&#xe72c;</i></router-link></li>\n\t<li><router-link to="/index"><i class="icon iconfont">&#xe7dd;</i><span>Network</span></router-link></li>\n\t<li><router-link to="/calendar"><i class="icon iconfont">&#xe60f;</i><span>Calendar</span></router-link></li>\n\t<li><router-link to="/metrics"><i class="icon iconfont">&#xe6cc;</i><span>Metrics</span></router-link></li>\n\t<li><router-link to="/errors"><i class="icon iconfont">&#xe769;</i><span>Errors</span></router-link></li>\n\t<li><router-link to="/alerting"><i class="icon iconfont">&#xe6ae;</i><span>Alerting</span></router-link></li>\n\t<li><router-link to="/settings"><i class="icon iconfont">&#xe6db;</i><span>Settings</span></router-link></li>\n</ul>'},function(t,e){t.exports='<div style="background-color: #eeeeee; display: inline-block; padding: 2px 1em;">\n\t<h4>子组件</h4>\n\t<button v-on:click="counter += 1">{{ counter }}</button>\n\t<span>父组件传来的数据：{{ counterMessage }}</span>\n\t<p><button @click="showAlert">子组件按钮</button></p>\n\t<p><button @click="toParent">子组件传递数据到父组件</button></p>\n</div>'},function(t,e){t.exports='<div class="m-box">\n\t<p>\n\t\t<img v-bind:src="errorsImageUrl" style="width: 100%;" />\n\t</p>\n</div>'},function(t,e){t.exports='<div class="m-box pure-g">\n\t<div class = "pure-u-1-2">\n\t\t<h1 style = "margin:10px 0px;">THROUGHPUT</h1>\n\t\t<p style = "font-size: 16px; font-family: Sans-serif; font-weight: bold; font-style: italic; color: rgba(0,0,0,.4);">How many requests were fulfilled per hour?</p>\n\t\t<!--\n\t\t<p><input v-model="message"></p>\n\t\t<p>{{ message }}</p>\n\t\t<p><button @click="showMsg">点我</button></p>\n\t\t<div id="example-2">\n\t\t\t<counter v-on:show="_showChild" v-bind:counterMessage="message"></counter>\n\t\t</div>-->\n\t\t<div id = "Dash1" style = "height:300px; backgroundColor: "></div>\n\t</div>\n\t<div class = "pure-u-1-2">\n\t\t<h1 style = "margin:10px 0px;">RESPONSE TIME</h1>\n\t\t<p style = "font-size: 16px; font-family: Sans-serif; font-weight: bold; font-style: italic; color: rgba(0,0,0,.4);">How long does it take for the service to respond?</p>\n\t\t<!--\n\t\t<p><input v-model="message"></p>\n\t\t<p>{{ message }}</p>\n\t\t<p><button @click="showMsg">点我</button></p>\n\t\t<div id="example-2">\n\t\t\t<counter v-on:show="_showChild" v-bind:counterMessage="message"></counter>\n\t\t</div>-->\n\t\t<div id = "Dash2" style = "height:300px; backgroundColor: "></div>\n\t</div>\n\n</div>\n';
},function(t,e){t.exports='<div class="m-box">\n\t<p>\n\t\t<img v-bind:src="metricsImageUrl" style="width: 100%;" />\n\t</p>\n</div>'},function(t,e){t.exports='<div class="m-box">\n\t<p>\n\t\t<img v-bind:src="settingsImageUrl" style="width: 100%;" />\n\t</p>\n\t<m-dialog></m-dialog>\n</div>'},function(t,e){t.exports='<div class="m-dialog" v-if="showDialog">\n\t<div class="m-comtent">\n\t\t<div class="m-header">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<span class="close"><i class="icon iconfont">&#xe613;</i></span>\n\t\t</div>\n\t\t<div class="m-body">\n\t\t</div>\n\t</div>\n</div>'},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n(1),n(2),n(0);var i=n(4),r=o(i),a=n(3),s=new VueRouter({routes:a.routes});new Vue({components:{app:{template:r.default,data:function(){return{mMainClass:"m-"+this.$route.path.substring(1)}},methods:{},beforeUpdate:function(){this.$data.mMainClass="m-"+this.$route.path.substring(1)}}},data:{},router:s}).$mount("app")}]);