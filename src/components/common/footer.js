/*jshint esversion: 6 */
import footerTemplate from '../../templates/common/footer.html';

Vue.component('app-footer', {
	template: footerTemplate,
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
		console.info('Footer rendered');
	}
});