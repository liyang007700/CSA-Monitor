/*jshint esversion: 6 */
import template from '../templates/index.html';

const componentIndex = {
	template: template,
	data: function () {
		return {
			message: '你好：'
		};
	},
	methods: {
		showMsg: function(){
			alert('哈哈');
		}
    }
};

export {componentIndex};