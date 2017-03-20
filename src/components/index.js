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
			],
			ifShowDateSelection: false,
			ifShowCustom: false,
			selectInput: {
				startDate: "2017-03-20",
				startHour: 0,
				startMinute: 0,
				endDate: "2017-03-20",
				endHour: 0,
				endMinute: 0
			},
			chart1: null,
			chart2: null,
		};
	},
	methods: {
		initChart: function() {
			var dash1 = document.getElementById('Dash1');
			var chart1 = echarts.init(dash1);
			var dash2 = document.getElementById('Dash2');
			var chart2 = echarts.init(dash2);
			chart1.group = 'group1';
			chart2.group = 'group1';
			echarts.connect('group1');
			chart1.setOption(echartConfig.Request);
			chart2.setOption(echartConfig.Response);
		},
		oneHourRender: function() {

		},
		threeHourRender: function() {

		},
		sixHourRender: function() {

		},
		twelveHourRender: function() {

		},
		oneDayRender: function() {

		},
		threeDayRender: function() {

		},
		sevenDayRender: function() {

		},
		fiftyDayRender: function() {

		},
		oneMonthRender: function() {

		},
		toggleUSelect: function() {
			this.ifShowDateSelection = !this.ifShowDateSelection;
			this.getCurrentTime();
		},
		showCustom: function() {
			this.ifShowCustom = true;
		},
		hideCustom: function() {
			this.ifShowCustom = false;
		},
		closeSelect: function() {
			this.ifShowDateSelection = false;
		},
		saveSelect: function() {
			this.ifShowDateSelection = false;



		},
		getCurrentTime: function() {
			// Date.now方法返回当前距离1970年1月1日 00:00:00 UTC的毫秒数（Unix时间戳乘以1000）。
			var nowNum = Date.now();
			// 当前时区与格林威治时间的毫秒差值
			var timeZoneDiff = (new Date()).getTimezoneOffset() * 60000;
			// 校正后的毫秒数
			var localTimeNum = nowNum - timeZoneDiff;
			var localTimeNumLastHour = nowNum - timeZoneDiff - 3600000;

			var localTime = new Date(localTimeNum);
			var localTimeStr = localTime.toJSON();

			var localTimeLastHour = new Date(localTimeNumLastHour);
			var localTimeStrLastHourStr = localTimeLastHour.toJSON();

			this.selectInput.endDate = localTimeStr.slice(0, 10);
			this.selectInput.endHour = parseInt(localTimeStr.slice(11, 14));
			this.selectInput.endMinute = parseInt(localTimeStr.slice(14, 17));

			this.selectInput.startDate = localTimeStrLastHourStr.slice(0, 10);
			this.selectInput.startHour = parseInt(localTimeStrLastHourStr.slice(11, 14));
			this.selectInput.startMinute = parseInt(localTimeStrLastHourStr.slice(14,
				17));
		},
		addEndHour: function() {
			this.selectInput.endHour += 1;
		},
		minusEndHour: function() {
			this.selectInput.endHour -= 1;
		},
		addEndMinute: function() {
			this.selectInput.endMinute += 1;
		},
		minusEndMinute: function() {
			this.selectInput.endMinute -= 1;
		},
		addStartHour: function() {
			this.selectInput.startHour += 1;
		},
		minusStartHour: function() {
			this.selectInput.startHour -= 1;
		},
		addStartMinute: function() {
			this.selectInput.startMinute += 1;
		},
		minusStartMinute: function() {
			this.selectInput.startMinute -= 1;
		}
	},
	mounted: function() {
		let _this = this;
		this.initChart();
		this.getCurrentTime();
	},
	components: {
		"m-histogram": widgetIndex.mHistogram
	}
};

export {
	componentIndex
};
