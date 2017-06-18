/*jshint esversion: 6 */
import templateTabs from './templates/tabs.html';
import templateContent from './templates/tab.html';

let state = new Vue();

Vue.component('m-tabs', {
	props: ['tabsLabel'],
	template: templateTabs,
	data: function () {
		return {
		};
	},
	methods: {
		changeTab: function(e){
			state.$emit('change', this.$props.tabsLabel.indexOf(e.target.innerHTML.trim()), e.target.parentNode.parentNode);
			e.target.parentNode.childNodes.forEach(function(el){
				el.setAttribute('class', '');
			});
			e.target.setAttribute('class', 'active');
		}
	},
	created: function(){
	},
	mounted: function(){
	}
});

Vue.component('m-tab', {
	template: templateContent,
	data: function () {
		return {
		};
	},
	methods: {
		
	},
	created: function(){
	},
	mounted: function(){
		this.$el.parentNode.querySelectorAll('.m-tab-content')[0].style.display = 'block';
		state.$on('change', (idx, rootNode) => {
			rootNode.querySelectorAll('.m-tab-content').forEach(function(e){
				e.style.display = 'none';
			});
			rootNode.querySelectorAll('.m-tab-content')[idx].style.display = 'block';
		});
	}
});