/*jshint esversion: 6 */

import {routes} from './routes';
const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	router
}).$mount('#app');