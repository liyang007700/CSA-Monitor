/*jshint esversion: 6 */
import template from '../templates/counter.html';

Vue.component('counter', {
	props: ['counterMessage'],
	template: template,
	data: function () {
		return {
			counter: this.counterMessage.length
		};
	},
	methods: {
		showAlert: function(){
			alert(100);
		},
		toParent: function(){
			this.$emit('show');
		}
	},
	created: function(){
		
	},
	mounted: function(){
		// el created and rendered to the page
		console.info('Child component `counter` rendered');
	}
});