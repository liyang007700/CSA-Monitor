/*jshint esversion: 6 */
import template from './templates/dialog.html';
let Dialog = {};

Vue.component('m-dialog', {
	props: [],
	template: template,
	data: function () {
		return {
			showDialog: false,
			title: 'DIALOG TITLE'
		};
	},
	methods: {
		
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