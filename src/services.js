/*jshint esversion: 6 */
// Github - vue-resource: https://github.com/pagekit/vue-resource

let services = {};

services.getUser = (success, fail) => {
	console.info('Get user info service');
	Vue.http.get(
		'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/').then(
		response => {
			console.log(response.body);
			success();
		}, response => {
			console.warn('Get user info service: [' + response.status + '] ' +
				response.statusText);
			fail();
		});
};


export {
	services
};
