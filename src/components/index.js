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
	oneHour
}
from "./index/_oneHour";
import {
	threeHour
}
from "./index/_threeHour";
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
				startDate: "",
				startHour: 0,
				startMinute: 0,
				endDate: "",
				endHour: 0,
				endMinute: 0
			},
			isAutoSwitch: false,
			classObjectAuto: {
				'switchOff': true,
				'switchOn': false
			},
			oneHourObject: {
				"clicked": true
			},
			threeHourObject: {
				"clicked": false
			},
			sixHourObject: {
				"clicked": false
			},
			twelveHourObject: {
				"clicked": false
			},
			oneDayObject: {
				"clicked": false
			},
			threeDayObject: {
				"clicked": false
			},
			sevenDayObject: {
				"clicked": false
			},
			fiftyDayObject: {
				"clicked": false
			},
			monthClassObject: {
				"clicked": false
			},
			echartData: null

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

			echartConfig.Request.xAxis[0].data = oneHour.timepoint;
			echartConfig.Request.series[0].data = oneHour.Count_RC2;
			echartConfig.Request.series[1].data = oneHour.Count_RC3;
			echartConfig.Request.series[2].data = oneHour.Count_RC4;
			echartConfig.Request.series[3].data = oneHour.Count_RC5;
			echartConfig.Response.xAxis[0].data = oneHour.timepoint;
			echartConfig.Response.series[0].data = oneHour.AverageElapsed;
			echartConfig.Response.series[1].data = oneHour.AverageElapsed2;
			echartConfig.Response.series[2].data = oneHour.AverageElapsed1;

			chart1.setOption(echartConfig.Request);
			chart2.setOption(echartConfig.Response);
			/*
			chart1.setOption(echartConfig.RequestOneHour);
			chart2.setOption(echartConfig.ResponseOneHour);*/

		},
		threeHourChart: function() {
			var dash1 = document.getElementById('Dash1');
			var chart1 = echarts.init(dash1);
			var dash2 = document.getElementById('Dash2');
			var chart2 = echarts.init(dash2);
			chart1.group = 'group1';
			chart2.group = 'group1';
			echarts.connect('group1');

			echartConfig.Request.xAxis[0].data = threeHour.timepoint;
			echartConfig.Request.series[0].data = threeHour.Count_RC2;
			echartConfig.Request.series[1].data = threeHour.Count_RC3;
			echartConfig.Request.series[2].data = threeHour.Count_RC4;
			echartConfig.Request.series[3].data = threeHour.Count_RC5;
			echartConfig.Response.xAxis[0].data = threeHour.timepoint;
			echartConfig.Response.series[0].data = threeHour.AverageElapsed;
			echartConfig.Response.series[1].data = threeHour.AverageElapsed2;
			echartConfig.Response.series[2].data = threeHour.AverageElapsed1;

			chart1.setOption(echartConfig.Request);
			chart2.setOption(echartConfig.Response);
		},
		oneHourRender: function() {
			this.initChart();
			this.oneHourObject.clicked = true;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		threeHourRender: function() {
			this.threeHourChart();
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = true;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		sixHourRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = true;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		twelveHourRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = true;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		oneDayRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = true;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		threeDayRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = true;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		sevenDayRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = true;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		fiftyDayRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = true;
			this.monthClassObject.clicked = false;
		},
		oneMonthRender: function() {
			this.oneHourObject.clicked = false;
			this.threeHourObject.clicked = false;
			this.sixHourObject.clicked = false;
			this.twelveHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.threeDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.fiftyDayObject.clicked = false;
			this.monthClassObject.clicked = true;
		},
		toggleUSelect: function() {
			this.ifShowDateSelection = !this.ifShowDateSelection;
			this.getCurrentTime();
		},
		saveSelect: function() {
			this.ifShowDateSelection = false;

		},
		toggleClassObject: function() {
			this.classObjectAuto.switchOff = !this.classObjectAuto.switchOff;
			this.classObjectAuto.switchOn = !this.classObjectAuto.switchOn;
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
