/*jshint esversion: 6 */
import headerTemplate from '../../templates/common/header.html';

Vue.component('app-header', {
	template: headerTemplate,
	data: function() {
		return {
			currentNav: 'DASHBOARD'
		};
	},
	methods: {},
	created: function() {

	},
	mounted: function() {}
});
