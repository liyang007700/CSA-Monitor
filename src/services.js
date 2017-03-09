/*jshint esversion: 6 */
// Github - vue-resource: https://github.com/pagekit/vue-resource

let services = {};

services.getChart = (success, fail) => {
	// http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
	// url exception
	Vue.http.get(
		'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/').then(
		response => {
			success(response.body);
		}, response => {
			console.warn('Get user info service: [' + response.status + '] ' +
				response.statusText);
			fail();
		});
};
services.getUrl = (success, fail) => {
	// http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
	// url exception
	Vue.http.get(
		'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/url_exception/').then(
		response => {
			success(response.body);
		}, response => {
			console.warn('Get user info service: [' + response.status + '] ' +
				response.statusText);
			fail();
		});
};


export {
	services
};
