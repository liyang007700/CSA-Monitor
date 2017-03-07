/*jshint esversion: 6 */
import template from '../templates/index.html';
import {
	services
}
from '../services';

// import child components
import '../components/counter';
//import {chart_config} from '../config/echart_config';

const componentIndex = {
	template: template,
	data: function() {
		return {
			message: '你好：'
		};
	},
	methods: {
		showMsg: function() {
			alert('哈哈');
		},
		_showChild: function() {
			// 规定：以下划线(_)开始的方法，为自定义监听事件被触发时要执行的方法
			this.message = '我是子组件触发改变的，使用自定义事件';
			//alert('我是子组件触发改变的');
		},
		renderChart: function() {

			// init echarts instance
			var dash1 = document.getElementById('Dash1');
			var chart1 = echarts.init(dash1);
			var dash2 = document.getElementById('Dash2');
			var chart2 = echarts.init(dash2);

			// connect tow install
			chart1.group = 'group1';
			chart2.group = 'group1';
			echarts.connect('group1');

			var optionRequests = {
				//backgroundColor: '#364554',
				// 提示框组件
				legend: {
					show: true,
					left: '30%',
					top: '5%',
					data: ["2XX", "3XX", "4XX", "5XX"]
				},
				tooltip: {
					show: true,
					trigger: 'axis',
					alwaysShowContent: false,
					axisPointer: {
						animation: true,
						type: 'line',
						lineStyle: {
							color: 'rgba(0,0,0,0.2)',
							width: 1,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
							shadowBlur: 10
						}
					},
					padding: 5,
					//formatter: '{b}<br />"{a}":{c}',
					textStyle: {
						color: '#000'
					},
					backgroundColor: 'rgba(225,232,238,1)',
					borderWidth: 1,
					borderColor: '#008571'
				},
				dataZoom: [{
					type: 'inside',
					realtime: true,
					start: 0,
					end: 30,
					xAxisIndex: [0]
				}, {
					type: 'slider',
					show: true,
					realtime: true,
					start: 0,
					end: 30,
					top: 'bottom',
					xAxisIndex: [0]
				}],
				/* 线条颜色线性渐变
								visualMap: [{
									type: 'continuous',
									min: 0,
									max: 1000,
									align: 'right',
									range: [0, 800],
									calculable: true,
									realtime: true,
									text: ['high, low'],
									show: false,
									inRange: {
										color: ['#33cc33', '#ff6600', '#800000']
									}
								}],*/
				xAxis: [{
					offset: 0,
					nameLocation: 'end',
					//type: 'time',
					//boundaryGap : false,
					axisLine: {
						onZero: true,
						lineStyle: {
							color: 'rgba(0,0,0,1)',
							width: '1'
						}
					},
					axisTick: {
						length: 10,
						lineStyle: {
							color: 'rgba(0,0,0,.3)',
						}
					},
					axisLabel: {
						textStyle: {
							color: "rgba(0,0,0,1)"
						}
					},
					data: this.month.timepoint
				}],
				yAxis: [{
					offset: -5,
					name: 'RequestCount',
					nameGap: 20,
					nameTextStyle: {
						color: 'rgba(0, 0, 0, 1)',
						fontSize: 12
					},
					type: 'value',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						formatter: '{value}rpm'
					},
					splitLine: {
						show: true
					}
				}],
				series: [{
					name: '2XX',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					showAllSymbol: true,
					hoverAnimation: true,
					data: this.month.Count_RC2,
					itemStyle: {
						normal: {
							color: 'rgba(0, 113, 113, 1)'
						}
					},
					lineStyle: {
						normal: {
							color: '#008571',
							shadowColor: 'rgba(0, 113, 113, 0.3)',
							shadowBlur: 4
						}
					}
					/* mark yAxis
										markLine: {
											silent: true,
											data: [{
												yAxis: 400
											}, {
												yAxis: 800
											}]
										}*/
				}, {
					name: '3XX',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					showAllSymbol: true,
					hoverAnimation: true,
					data: this.month.Count_RC3,
					itemStyle: {
						normal: {
							color: 'rgba(18, 18, 18, 1)'
						}
					},
					lineStyle: {
						normal: {
							color: '#121212',
							shadowColor: 'rgba(18, 18, 18, 0.3)',
							shadowBlur: 4
						}
					}
					/* mark yAxis
										markLine: {
											silent: true,
											data: [{
												yAxis: 400
											}, {
												yAxis: 800
											}]
										}*/
				}, {
					name: '4XX',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					showAllSymbol: true,
					hoverAnimation: true,
					data: this.month.Count_RC4,
					itemStyle: {
						normal: {
							color: 'rgba(239, 193, 0, 1)'
						}
					},
					lineStyle: {
						normal: {
							color: '#EFC100',
							shadowColor: 'rgba(239, 193, 0, 0.3)',
							shadowBlur: 4
						}
					},

					/* mark yAxis
										markLine: {
											silent: true,
											data: [{
												yAxis: 400
											}, {
												yAxis: 800
											}]
										}*/
				}, {
					name: '5XX',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					showAllSymbol: true,
					hoverAnimation: true,
					data: this.month.Count_RC5,
					itemStyle: {
						normal: {
							color: 'rgba(255, 80, 3, 1)'
						}
					},
					lineStyle: {
						normal: {
							color: '#FF5003',
							shadowColor: 'rgba(255, 80, 3, 0.3)',
							shadowBlur: 4
						}
					}
					/* mark yAxis
									   markLine: {
										   silent: true,
										   data: [{
											   yAxis: 400
										   }, {
											   yAxis: 800
										   }]
									   }*/
				}]
			};
			var optionTime = {
				//backgroundColor: '#364554',
				// 提示框组件
				legend: {
					show: true,
					itemGap: 20,
					left: '25%',
					top: '5%',
					data: ["AverageResponseTime", "ExceptionCount"]
				},
				tooltip: {
					show: true,
					trigger: 'axis',
					alwaysShowContent: false,
					axisPointer: {
						animation: true,
						type: 'line',
						lineStyle: {
							color: 'rgba(0,0,0,0.2)',
							width: 1,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
							shadowBlur: 10
						}
					},
					padding: 5,
					textStyle: {
						color: '#000'
					},
					backgroundColor: 'rgba(225,232,238,1)',
					borderWidth: 1,
					borderColor: '#008571'
				},
				dataZoom: [{
					type: 'inside',
					realtime: true,
					start: 0,
					end: 30,
					xAxisIndex: [0]
				}, {
					type: 'slider',
					show: true,
					realtime: true,
					start: 0,
					end: 30,
					top: 'bottom',
					xAxisIndex: [0]
				}],
				visualMap: [{
					type: 'continuous',
					min: 0,
					max: 500,
					show: false,
					range: [0, 500],
					inRange: {
						//color: ['#33cc33', '#ff6600', '#800000']
						color: ['#8CD211', '#FF5003', '#E71D32']
					},
					seriesIndex: [0]
				}],
				xAxis: [{
					offset: 0,
					//type: 'time',
					//boundaryGap : false,
					axisLine: {
						onZero: true,
						lineStyle: {
							color: 'rgba(0,0,0,1)',
							width: '1'
						}
					},
					axisTick: {
						length: 10,
						lineStyle: {
							color: 'rgba(0,0,0,.3)',
						}
					},
					axisLabel: {
						textStyle: {
							color: "rgba(0,0,0,1)"
						}
					},
					data: this.month.timepoint
				}],
				yAxis: [{ // 平均响应时间的轴，位于左侧
					offset: -4,
					//min: 0,
					//max: 2000,
					name: 'RequestDelay(ms)',
					nameGap: 20,
					nameTextStyle: {
						color: 'rgba(0, 0, 0, 1)',
						fontSize: 12
					},
					type: 'value',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						formatter: '{value} ms'
					},
					splitLine: {
						show: false
					}
				}, { // 超过500ms次数的轴，位于右侧
					position: 'right',
					min: 0,
					max: 50,
					offset: 0,
					name: 'ExceptionCount',
					nameGap: 20,
					nameTextStyle: {
						color: 'rgba(0, 0, 0, 1)',
						fontSize: 12
					},
					type: 'value',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						formatter: '{value} times'
					},
					splitLine: {
						show: false
					}
				}],
				series: [{
					name: 'AverageResponseTime',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					hoverAnimation: true,
					data: this.month.AverageElapsed
						/*
						markLine: {
							silent: true,
							lineStyle: {
								normal: {
									color: '#D74108',
								}
							},
							data: [{
								yAxis: 500
							}]
						}*/
				}, {
					name: 'ExceptionCount',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					hoverAnimation: true,
					data: this.month.Count_OverThreshold,
					itemStyle: {
						normal: {
							color: 'rgba(38, 74, 96, 1)'
						}
					},
					lineStyle: {
						normal: {
							color: '#264A60',
							shadowColor: 'rgba(38, 74, 96, 0.3)',
							shadowBlur: 4
						}
					}
				}]
			};

			// render instance
			chart1.setOption(optionRequests);
			chart2.setOption(optionTime);
			console.log("charts render");

			// bind event
			chart1.on('click', function(params) {
				chart1 = null;
				//myChart1.dispose();
			});
			chart2.on('click', function(params) {
				chart2 = null;
			});
		},
		destroyChart: function() {
			console.log("charts destroy");
			//this.chart.myChart1.dispose();
			//this.chart.myChart2.clear();
			//this.chart.myChart2.dispose();
		}
	},
	created: function() {
		//this.renderChart();
	},
	mounted: function() {
		// el created and rendered to the page
		var _this = this;
		console.info('Index router rendered');
		services.getUser(function(data) {
				_this.month = data;
				_this.renderChart();
			},
			function() {
				console.log("failed!");
			});
	},
	beforeDestroy: function() {
		this.destroyChart();
	},
	destroyed: function() {
		console.log("destroyed");
	}
};

export {
	componentIndex
};
