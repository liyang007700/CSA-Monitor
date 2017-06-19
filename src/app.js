/*jshint esversion: 6 */

// import child components
//import '../libs/pure-min.css';
//import '../libs/bootstrap.css';
//import '../libs/pikaday.css';
import '../style/app.less';
import './components/common/header';
import './components/common/leftNav';
import './components/common/footer';
import appTemplate from './templates/app.html';
import {
	routes
}
from './routes';

const router = new VueRouter({
	routes: routes
});

var vm = new Vue({
	components: {
		'app': {
			template: appTemplate,
			data: function() {
				return {
					mMainClass: 'm-' + this.$route.path.substring(1)
				};
			},
			methods: {

			},
			beforeUpdate: function() {
				this.$data.mMainClass = 'm-' + this.$route.path.substring(1);
			}
		}
	},
	data: {},
	router
}).$mount('app');
