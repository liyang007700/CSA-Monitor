/*jshint esversion: 6 */
// Github - vue-resource: https://github.com/pagekit/vue-resource

let services = {};

services.getUser = (success, fail) => {
	console.info('Get user info service');
	Vue.http.get('/getUser').then(response => {
		this.someData = response.body;
		success();
	}, response => {
		console.warn('Get user info service: ['+ response.status +'] ' + response.statusText);
		fail();
	});
};

export {services};