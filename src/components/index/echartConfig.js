/*jshint esversion: 6 */
import {
    chart
}
from "./chartData";
var echartConfig = {
    Request: {
        //backgroundColor: '#364554',
        // 提示框组件
        legend: {
            show: true,
            left: '30%',
            top: '6%',
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
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
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
            data: chart.oneHour.timepoint
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
            data: chart.oneHour.Count_RC2,
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
        }, {
            name: '3XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            showAllSymbol: true,
            hoverAnimation: true,
            data: chart.oneHour.Count_RC3,
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
            data: chart.oneHour.Count_RC4,
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
            data: chart.oneHour.Count_RC5,
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
    },
    Response: {
        //backgroundColor: '#364554',
        // 提示框组件
        legend: {
            show: true,
            itemGap: 20,
            left: '40%',
            top: '6%',
            data: ["Overall", "Time > 5s",
                "Time < 5s"
            ]
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
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
        /*
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
                }],*/
        xAxis: [{
            offset: 0,
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
            data: chart.oneHour.timepoint
        }],
        yAxis: [{ // 平均响应时间的轴，位于左侧
            offset: -5,
            name: '               AverageResponseTime(ms)',
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
                show: true
            }
        }],
        series: [{
            name: 'Time > 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.oneHour.AverageElapsed
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.oneHour.AverageElapsed2
        }, {
            name: 'Time < 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.oneHour.AverageElapsed1
        }]
    },
    RequestOneHour: {
        //backgroundColor: '#364554',
        // 提示框组件
        legend: {
            show: true,
            left: '30%',
            top: '6%',
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
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
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
            data: chart.oneHour.timepoint
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
            data: chart.oneHour.Count_RC2,
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
        }, {
            name: '3XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            showAllSymbol: true,
            hoverAnimation: true,
            data: chart.oneHour.Count_RC3,
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
            data: chart.oneHour.Count_RC4,
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
            data: chart.oneHour.Count_RC5,
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
    },
    ResponseOneHour: {
        //backgroundColor: '#364554',
        // 提示框组件
        legend: {
            show: true,
            itemGap: 20,
            left: '40%',
            top: '6%',
            data: ["Overall", "Time > 5s",
                "Time < 5s"
            ]
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
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
        /*
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
                }],*/
        xAxis: [{
            offset: 0,
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
            data: chart.oneHour.timepoint
        }],
        yAxis: [{ // 平均响应时间的轴，位于左侧
            offset: -5,
            name: '               AverageResponseTime(ms)',
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
                show: true
            }
        }],
        series: [{
            name: 'Time > 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.oneHour.AverageElapsed
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.oneHour.AverageElapsed2
        }, {
            name: 'Time < 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.oneHour.AverageElapsed1
        }]
    },

    RequestSixHour: {
        //backgroundColor: '#364554',
        // 提示框组件
        legend: {
            show: true,
            left: '30%',
            top: '6%',
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
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
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
            data: chart.sixHour.timepoint
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
            data: chart.sixHour.Count_RC2,
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
        }, {
            name: '3XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            showAllSymbol: true,
            hoverAnimation: true,
            data: chart.sixHour.Count_RC3,
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
            data: chart.sixHour.Count_RC4,
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
            data: chart.sixHour.Count_RC5,
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
    },
    ResponseSixHour: {
        //backgroundColor: '#364554',
        // 提示框组件
        legend: {
            show: true,
            itemGap: 20,
            left: '40%',
            top: '6%',
            data: ["Overall", "Time > 5s",
                "Time < 5s"
            ]
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
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
        /*
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
                }],*/
        xAxis: [{
            offset: 0,
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
            data: chart.sixHour.timepoint
        }],
        yAxis: [{ // 平均响应时间的轴，位于左侧
            offset: -5,
            name: '               AverageResponseTime(ms)',
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
                show: true
            }
        }],
        series: [{
            name: 'Time > 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.sixHour.AverageElapsed
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.sixHour.AverageElapsed2
        }, {
            name: 'Time < 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            hoverAnimation: true,
            data: chart.sixHour.AverageElapsed1
        }]
    }
};

export {
    echartConfig
};
