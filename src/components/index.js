/*jshint esversion: 6 */
import template from '../templates/index.html';
import templateTimeBar from '../templates/index/timeBar.html';
import templateAxisText from '../templates/index/AxisText.html';
import templateTable from '../templates/index/table.html';
import lineBlock from '../templates/index/lineBlock.html';
import templateMLine from '../templates/index/mLine.html';

import {
	services
}
from '../services';
import {
	Tooltip
}
from '../plugins/tooltip';
import {
	echartConfig
}
from "./config";
/*
import {
	data
}
from "../data/data.json";*/
//import {chart_config} from '../config/echart_config';

const componentIndex = {
	template: template,
	data: function() {
		return {
			eventTime: "2017-02-26T00:33:00",
			events: [{
				startTime: "2017-02-26T00:33:07",
				endTime: "",
				url: "a",
				courses: [{
					name: "NULL",
					time: 7
				}, {
					name: "HTTP",
					time: 2
				}, {
					name: "Was",
					time: 66
				}, {
					name: "DB",
					time: 30
				}, {
					name: "Was",
					time: 50
				}, {
					name: "HTTP",
					time: 5
				}],
				totalTime: 0
			}, {
				startTime: "2017-02-26T00:33:15",
				endTime: "",
				url: "b",
				courses: [{
					name: "NULL",
					time: 15
				}, {
					name: "HTTP",
					time: 13
				}, {
					name: "Cloudant",
					time: 97
				}, {
					name: "HTTP",
					time: 4
				}],
				totalTime: 0
			}, {
				startTime: "2017-02-26T00:33:29",
				endTime: "",
				url: "c",
				courses: [{
					name: "NULL",
					time: 29
				}, {
					name: "HTTP",
					time: 3
				}, {
					name: "Was",
					time: 12
				}, {
					name: "DB",
					time: 80
				}, {
					name: "Was",
					time: 16
				}, {
					name: "HTTP",
					time: 8
				}],
				totalTime: 0
			}],
			timeLine: ["2017-02-26T00:35:00", "2017-02-26T00:36:00",
				"2017-02-26T00:34:00"
			],
			lineBlock: []
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
		},
		formatTimeLine: function(_this) {
			let events = _this.events;
			for (let i = 0; i < _this.events.length; i++) {
				_this.timeLine.push(events[i].startTime);
				_this.timeLine.push(events[i].endTime);
			}
			_this.timeLine.push(events[0].startTime.slice(0, 16) + ":00");
		},
		computeTotalTime: function(_this) {
			let events = _this.events;
			for (let i = 0; i < events.length; i++) {
				for (let j = 1; j < events[i].courses.length; j++) {
					events[i].totalTime += events[i].courses[j].time;
				}
			}
		},
		computeEndTime: function(_this) {
			let events = _this.events;
			let eventTime = _this.eventTime;
			for (let i = 0; i < events.length; i++) {
				let startDate = Date.parse(events[i].startTime);
				let endDate = startDate + events[i].totalTime * 1000;
				events[i].endTime = (new Date(endDate)).toISOString().slice(0, 19);
			}
		},
		formatLineBlock: function(_this) {
			let events = _this.events;
			for (let i = 0; i < _this.events.length; i++) {
				_this.lineBlock.push(events[i].courses[0].time);
				_this.lineBlock.push(events[i].totalTime + events[i].courses[0].time);
			}
		}
	},
	mounted: function() {
		let _this = this;
		this.renderChart();
		this.computeTotalTime(_this);
		this.computeEndTime(_this);
		this.formatTimeLine(_this);
		this.formatLineBlock(_this);
		console.log(this.lineBlock);
	},
	components: {
		timeBar: {
			props: ["item"],
			template: templateTimeBar,
			data: function() {
				return {
					styleObject: {
						"margin-left": (parseInt(this.item.startTime.slice(17), 10) / 180) *
							100 + "%"
					}
				};
			},
			methods: {
				computeTotalTime: function(_this) {
					let courses = _this.item.courses;
					for (let i = 0; i < courses.length; i++) {
						_this.item.totalTime += courses[i].time;
					}
				},
				computeEndTime: function(_this) {
					let startDate = Date.parse(_this.item.startTime);
					let endDate = startDate + _this.item.totalTime * 1000;
					_this.item.endTime = (new Date(endDate)).toISOString().slice(0, 19);
				}
			},
			mounted: function() {},
			components: {
				lineBlock: {
					props: ["line"],
					template: lineBlock,
					data: function() {
						return {
							styleObject: {
								width: (this.line.time / 180) * 100 + "%"
							}
						};
					}
				},
			}
		},
		"m-line": {
			props: ["item"],
			template: templateMLine,
			data: function() {
				return {
					styleObject: {
						left: (this.item / 180) * 100 + "%"
					}
				};
			}
		},
		axisText: {
			props: ["time", "zeroTime"],
			template: templateAxisText,
			data: function() {
				return {
					timeText: "",
					styleObject: {

					}
				};
			},
			methods: {
				getTimeText: function(_this) {
					_this.timeText = _this.time.slice(14);
				},
				getLeftPos: function(_this) {
					_this.styleObject.left = (((Date.parse(_this.time) - Date.parse(_this.zeroTime)) /
						1000) / 180) * 100 + "%";
				}
			},
			mounted: function() {
				let _this = this;
				this.getTimeText(_this);
				this.getLeftPos(_this);
			}
		},
		tableBar: {
			props: ["item"],
			template: templateTable
		}
	}
};

export {
	componentIndex
};
