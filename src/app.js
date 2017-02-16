/*jshint esversion: 6 */

import {routes} from './routes';

//Vue.use(VueRouter);
//Vue.config.debug = true;
//Vue.config.delimiters = ['${', '}'];
//Vue.config.devtools = true;

const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	router
}).$mount('#app');