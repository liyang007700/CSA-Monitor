/*jshint esversion: 6 */
import template from '../templates/index.html';
// async data request api based on vue-source
import {
	services
}
from '../services';
// local components in this page
import {
	widgetIndex
}
from './index/indexWidget';
// hover info widget
import {
	Tooltip
}
from '../plugins/tooltip';
import {
	echartConfig
}
from "./index/echartConfig";

const componentIndex = {
	template: template,
	data: function() {
		return {
			events: [{
				url: "https://csa.dst.ibm.com/sales/console/DM",
				startTime: "2017-02-26T00:33:07",
				courses: [{
					name: "HTTP",
					time: "2017-02-26T00:33:09",
					duration: 2
				}, {
					name: "Was",
					time: "2017-02-26T00:34:15",
					duration: 66
				}, {
					name: "DB2",
					time: "2017-02-26T00:34:45",
					duration: 30
				}, {
					name: "Was",
					time: "2017-02-26T00:35:35",
					duration: 50
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:40",
					duration: 5
				}],
				totalTime: 153,
				count: [{
					name: "HTTP",
					time: 7
				}, {
					name: "Was",
					time: 116
				}, {
					name: "DB2",
					time: 30
				}]
			}, {
				url: "https://csa.dst.ibm.com/sales/console/PR",
				startTime: "2017-02-26T00:33:15",
				courses: [{
					name: "HTTP",
					time: "2017-02-26T00:33:28",
					duration: 13
				}, {
					name: "Cloudant",
					time: "2017-02-26T00:35:05",
					duration: 97
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:09",
					duration: 4
				}],
				totalTime: 114,
				count: [{
					name: "HTTP",
					time: 17
				}, {
					name: "Cloudant",
					time: 97
				}]
			}, {
				url: "https://csa.dst.ibm.com/sales/console/OneScore",
				startTime: "2017-02-26T00:33:29",
				courses: [{
					name: "HTTP",
					time: "2017-02-26T00:33:32",
					duration: 3
				}, {
					name: "Was",
					time: "2017-02-26T00:33:44",
					duration: 12
				}, {
					name: "DB2",
					time: "2017-02-26T00:35:04",
					duration: 80
				}, {
					name: "Was",
					time: "2017-02-26T00:35:20",
					duration: 16
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:28",
					duration: 8
				}],
				totalTime: 119,
				count: [{
					name: "HTTP",
					time: 11
				}, {
					name: "Was",
					time: 28
				}, {
					name: "DB2",
					time: 80
				}]
			}],
			timeLine: ["2017-02-26T00:33:00", "2017-02-26T00:34:00",
				"2017-02-26T00:35:00",
				"2017-02-26T00:36:00"
			]
		};
	},
	methods: {
		renderChart: function() {
			var dash1 = document.getElementById('Dash1');
			var chart1 = echarts.init(dash1);
			var dash2 = document.getElementById('Dash2');
			var chart2 = echarts.init(dash2);
			chart1.group = 'group1';
			chart2.group = 'group1';
			echarts.connect('group1');
			chart1.setOption(echartConfig.Request);
			chart2.setOption(echartConfig.Response);
		}
	},
	mounted: function() {
		let _this = this;
		this.renderChart();
	},
	components: {
		"m-histogram": widgetIndex.mHistogram
	}
};

export {
	componentIndex
};
