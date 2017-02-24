/*jshint esversion: 6 */
import template from '../templates/settings.html';
import {Dialog} from '../plugins/dialog';
import {Tooltip} from '../plugins/tooltip';
Vue.use(Tooltip);

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
		/*Dialog.init({
			title: 'TEST NOTIFICATION',
			body: '<i>GET /test-slow-crash-gateway</i>'
		}).show();*/
	}
};

export {componentSettings};