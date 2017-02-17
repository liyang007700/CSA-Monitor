/*jshint esversion: 6 */
import headerTemplate from '../../templates/common/header.html';

Vue.component('app-header', {
	template: headerTemplate,
	data: function () {
		return {
			
		};
	},
	methods: {
	},
	created: function(){
		
	},
	mounted: function(){
		// el created and rendered to the page
		console.info('Header rendered');
	}
});