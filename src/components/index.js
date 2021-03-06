/* jshint esversion: 6 */
//var moment = require('moment');
//var Pikaday = require('pikaday');
import chart from '../../files/chart.json';
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
			// fake data for "Current Monitoring Service"
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
					duration: 36
				}, {
					name: "DB2",
					time: "2017-02-26T00:34:45",
					duration: 30
				}, {
					name: "Was",
					time: "2017-02-26T00:35:35",
					duration: 80
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:40",
					duration: 5
				}],
				totalTime: 153,
				count: [{
					name: "HTTP",
					time: 2
				}, {
					name: "Was(Before DB2)",
					time: 36
				}, {
					name: "DB2",
					time: 30
				}, {
					name: "Was(After DB2)",
					time: 80
				}, {
					name: "HTTP",
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
					time: 13
				}, {
					name: "Cloudant",
					time: 97
				}, {
					name: "HTTP",
					time: 4
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
					time: 3
				}, {
					name: "Was(Before DB2)",
					time: 12
				}, {
					name: "DB2",
					time: 80
				}, {
					name: "Was(After DB2)",
					time: 16
				}, {
					name: "HTTP",
					time: 8
				}]
			}],
			// "Current Monitoring Service" widght timeline
			timeLine: ["2017-02-26T00:33:00", "2017-02-26T00:34:00",
				"2017-02-26T00:35:00",
				"2017-02-26T00:36:00"
			],
			// default hide chart date selection
			ifShowDateSelection: false,
			// default hide chart date selection button "custom"
			ifShowCustom: false,
			// chart date select form v-model data
			selectInput: {
				today: null, // data object of today
				startDate: "",
				startHour: 0,
				startMinute: 0,
				endDate: "",
				endHour: 0,
				endMinute: 0
			},
			// auto refresh UI class object
			classObjectAuto: {
				'switchOff': true,
				'switchOn': false
			},
			// button UI class object
			oneHourObject: {
				"clicked": true
			},
			oneDayObject: {
				"clicked": false
			},
			sevenDayObject: {
				"clicked": false
			},
			monthClassObject: {
				"clicked": false
			},
			echartData: null
		};
	},
	methods: {
		// default chart data 1 hour
		renderChart: function(dom, data) {
			var container = document.getElementById(dom);
			/* 动态加载一个脚本，但是还没来得及执行
			var script = document.createElement("script")
			script.type = "text/javascript";
			script.src = "./libs/echarts.min.js";
			document.body.appendChild(script);*/

			var chart = echarts.init(container);
			echartConfig.oldVersion.xAxis[0].data = data.timepoint;
			echartConfig.oldVersion.series[0].data = data.Count_RC2;
			echartConfig.oldVersion.series[1].data = data.Count_RC3;
			echartConfig.oldVersion.series[2].data = data.Count_RC4;
			echartConfig.oldVersion.series[3].data = data.Count_RC5;
			echartConfig.oldVersion.series[4].data = data.AverageElapsed_less5s;
			echartConfig.oldVersion.series[5].data = data.AverageElapsed_All;
			echartConfig.oldVersion.series[6].data = data.AverageElapsed_over5s;
			chart.setOption(echartConfig.oldVersion);
		},
		toggleTimeSelect: function() {
			this.ifShowDateSelection = !this.ifShowDateSelection;
			this.initDatePicker();
		},
		saveSelect: function() {
			this.ifShowDateSelection = false;
		},
		/*
				toggleClassObject: function() {
					this.classObjectAuto.switchOff = !this.classObjectAuto.switchOff;
					this.classObjectAuto.switchOn = !this.classObjectAuto.switchOn;
				},*/
		initDatePicker: function() {
			// Date.now方法返回当前距离1970年1月1日 00:00:00 UTC的毫秒数（Unix时间戳乘以1000）。
			var nowMilliseconds = Date.now();
			// 当前时区与格林威治时间的毫秒差值
			var timeZoneDiff = (new Date()).getTimezoneOffset() * 60000;
			// 校正后的毫秒数
			var localMilliseconds = nowMilliseconds - timeZoneDiff;
			//var localTimeNumLastHour = nowNum - timeZoneDiff - 3600000;

			var now = new Date(localMilliseconds); // localTime Date Object
			var nowStr = now.toJSON();
			// var localTimeLastHour = new Date(localTimeNumLastHour);
			// var localTimeStrLastHourStr = localTimeLastHour.toJSON();
			this.selectInput.today = now;
			this.selectInput.endDate = nowStr.slice(0, 10);
			this.selectInput.endHour = parseInt(nowStr.slice(11, 14));
			this.selectInput.endMinute = parseInt(nowStr.slice(14, 17));
			/* last hour data
			this.selectInput.startDate = localTimeStrLastHourStr.slice(0, 10);
			this.selectInput.startHour = parseInt(localTimeStrLastHourStr.slice(11, 14));
			this.selectInput.startMinute = parseInt(localTimeStrLastHourStr.slice(14,
				17));*/
			this.selectInput.startDate = nowStr.slice(0, 10);
			this.selectInput.startHour = parseInt(nowStr.slice(11, 14));
			this.selectInput.startMinute = 0;

		}
	},
	mounted: function() {
		var pickerStart = new Pikaday({
			field: document.getElementById('dateStart')
		});
		pickerStart.toString('YYYY-MM-DD');
		var pickerEnd = new Pikaday({
			field: document.getElementById('dateEnd')
		});
		pickerEnd.toString('YYYY-MM-DD');
		this.initDatePicker();
		this.renderChart("Dash3", chart);
	},
	components: {
		"m-histogram": widgetIndex.mHistogram
	}
};

export {
	componentIndex
};
