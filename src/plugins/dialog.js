/*jshint esversion: 6 */
import template from './templates/dialog.html';
let Dialog = {};

Vue.component('m-dialog', {
	props: ['title', 'body'],
	template: template,
	data: function () {
		return {
			showDialog: false
		};
	},
	methods: {
		close: function(){
			this.$data.showDialog = false;
		}
	},
	created: function(){
		
	},
	mounted: function(){
		Dialog.show = () => {
			this.$data.showDialog = true;
		};
		
		Dialog.hide = () => {
			this.$data.showDialog = false;
		};
	}
});

export {Dialog};