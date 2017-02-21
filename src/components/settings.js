/*jshint esversion: 6 */
import template from '../templates/settings.html';
import {Dialog} from '../widgets/dialog';

const componentSettings = {
	template: template,
	data: function () {
		return {
			settingsImageUrl: 'images/demo-settings.jpg'
		};
	},
	methods: {
    },
	created: function(){
		
	},
	mounted: function(){
		Dialog.show();
	}
};

export {componentSettings};