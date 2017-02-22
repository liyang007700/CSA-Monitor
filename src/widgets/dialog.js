/*jshint esversion: 6 */
import template from './templates/dialog.html';
let Dialog = {};

Vue.component('m-dialog', {
	props: [],
	template: template,
	data: function () {
		return {
			showDialog: false,
			title: 'DIALOG TITLE',
			body: 'BODY CONTENTS'
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
		Dialog.init = (conf) => {
			this.$data.title = conf.title;
			this.$data.body = conf.body;
			return Dialog;
		};
		
		Dialog.show = () => {
			this.$data.showDialog = true;
		};
		
		Dialog.hide = () => {
			this.$data.showDialog = false;
		};
		
		(() => {
			/**
			 * Summary: Make dynamic update dialog title, body, etc.
			 * Usage: Dialog.title = 'Dynamic title';
			 */
			
			let _set = (prop) => {
				return (val) => {
					this.$data[prop] = val;
				};
			};
			
			for(let prop in this.$data){
				Object.defineProperty(Dialog, prop, {
					set: _set(prop)
				});
			}
		})();
	}
});

export {Dialog};