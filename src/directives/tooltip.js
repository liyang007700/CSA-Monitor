/*jshint esversion: 6 */
const install = function (Vue) {
	if (this.installed) {
		return;
	}
	this.installed = true;
	Vue.directive('tooltip', {
		inserted: function(){
			console.info(100, '---');
		}
	});
};

const Tooltip = {
	install
};

export { Tooltip };