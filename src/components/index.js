/*jshint esversion: 6 */
import template from '../templates/index.html';
import {services} from '../services';

// import child components
import '../components/counter';

const componentIndex = {
	template: template,
	data: function () {
		return {
			message: '你好：'
		};
	},
	methods: {
		showMsg: function () {
			alert('哈哈');
		},
		_showChild: function(){
			// 规定：以下划线(_)开始的方法，为自定义监听事件被触发时要执行的方法
			this.message = '我是子组件触发改变的，使用自定义事件';
			//alert('我是子组件触发改变的');
		}
    },
	created: function(){
		
	},
	mounted: function(){
		// el created and rendered to the page
		console.info('Index router rendered');
		services.getUser();
	}
};

export {componentIndex};