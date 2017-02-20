/*jshint esversion: 6 */
import leftNavTemplate from '../../templates/common/leftNav.html';

Vue.component('app-left-nav', {
	template: leftNavTemplate,
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
		console.info('Left navigator rendered');
	}
});