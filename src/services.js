/*jshint esversion: 6 */
// Github - vue-resource: https://github.com/pagekit/vue-resource

let services = {};

services.getOneHour = (success, fail) => {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get(
        'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1hour'
    ).then(
        response => {
            success(response.body);
        }, response => {
            console.warn('Get user info service: [' + response.status +
                '] ' +
                response.statusText);
            fail();
        });
};
services.getOneDay = (success, fail) => {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get(
        'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1day'
    ).then(
        response => {
            success(response.body);
        }, response => {
            console.warn('Get user info service: [' + response.status +
                '] ' +
                response.statusText);
            fail();
        });
};
services.getOneWeek = (success, fail) => {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get(
        'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1week'
    ).then(
        response => {
            success(response.body);
        }, response => {
            console.warn('Get user info service: [' + response.status +
                '] ' +
                response.statusText);
            fail();
        });
};
services.getOneMonth = (success, fail) => {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get(
        'http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1month'
    ).then(
        response => {
            success(response.body);
        }, response => {
            console.warn('Get user info service: [' + response.status +
                '] ' +
                response.statusText);
            fail();
        });
};


export {
    services
};
