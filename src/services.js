/*jshint esversion: 6 */
// Github - vue-resource: https://github.com/pagekit/vue-resource

let services = {};

services.getUser = () => {
	console.info('Get user info service');
	Vue.http.get('/getUser').then(response => {
		this.someData = response.body;
	}, response => {
		console.warn('Get user info service: ['+ response.status +'] ' + response.statusText);
	});
};

export {services};