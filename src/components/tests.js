/*jshint esversion: 6 */
import template from '../templates/tests.html';
import {Dialog} from '../plugins/dialog';
import {Tooltip} from '../plugins/tooltip';
Vue.use(Tooltip);

// 1. 使用一个空的 Vue 实例作为中央事件总线
let bus = new Vue();
// 2. 通过维护一个对象数据来管理状态
const sourceState = {};

const componentTests = {
	template: template,
	data: function () {
		return {
			todos: [
			    { text: 'Learn JavaScript', fulltext: 'Learn JavaScript - O\'relly Tom Kens' },
		        { text: 'Learn Vue', fulltext: 'Learn Vue - Gao Sheng Xi' },
		        { text: 'Build something awesome', fulltext: 'Build something awesome - 2017 3rd version' }
		    ],
		    currentView: 'home',
		    currentDialog: 'dialog1'
		};
	},
	methods: {
		newData: function(){
			this.$http.get('./files/_test.todos.json').then(response => {
				this.todos = response.body;
			}, response => {
				
			});
		},
		showDialog: function(){
			Dialog.init({
				title: 'TEST TITLE',
				body: '<i>THIS DIALOG BODY</i>'
			}).show();
		},
		closeDialog: function(){
			Dialog.hide();
		},
		updateDialog: function(){
			Dialog.title = '我是修改后是标题';
			this.currentDialog = 'dialog2';
			
			Dialog.show();
		},
		switchComponent: function(){
			this.currentView = this.currentView === 'debug' ? 'home' : 'debug';
		}
    },
	created: function(){
		
	},
	mounted: function(){
		/*Dialog.init({
			title: 'TEST NOTIFICATION',
			body: '<i>GET /test-slow-crash-gateway</i>'
		}).show();*/
		
		bus.$on('id-selected', id => {
			console.info('ID: ', id);
		});
		sourceState.name = 'wxyu';
	},
	updated: function(){
		console.info('数据有变化');
		console.info(sourceState.name);
	},
	components: {
		home: {
			template: '<b>动态组件1 {{ name }}</b>',
			data: function(){
				return sourceState;
			}
		},
		debug: {
			template: '<b>动态组件2 {{ name }}</b>',
			data: function(){
				return sourceState;
//				return {
//					name: '王小宇'
//				};
			},
			mounted: function(){
				console.info('动态组件挂载到DOM');
				
				bus.$emit('id-selected', 1001);
				this.name = 'helo';
				
				console.info(this.$data);
				setTimeout(() => {
					this.name = 'uuuuuu';
				}, 3000);
			}
		},
		dialog1: {
			template: '<b>弹窗1</b>'
		},
		dialog2: {
			template: '<b v-on:click="closeDialog">弹窗2，点击关闭</b>',
			methods: {
				closeDialog: function(){
					Dialog.hide();
				}
			}
		}
	}
};

const sourceOfTruth = {name: 100};
const vmA = new Vue({
  data: sourceOfTruth,
  updated: function(){
	  console.info('vmA data updated', this.sourceOfTruth);
  }
});
const vmB = new Vue({
  data: sourceOfTruth,
  updated: function(){
	  console.info('vmB data updated', this.sourceOfTruth);
  }
});

console.info(vmB.name, vmA.name);
setTimeout(function(){sourceOfTruth.name = 21; console.info(vmB.name, vmA.name);}, 3000);

export {componentTests};