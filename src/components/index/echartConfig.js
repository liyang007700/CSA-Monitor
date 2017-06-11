/*jshint esversion: 6 */
import {
    chart
}
from "./chartData";
var echartConfig = {
    oldVersion: {
        legend: [{
            show: true,
            top: '0%',
            left: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "2XX": true,
                "3XX": false,
                "4XX": false,
                "5XX": false
            },
            data: ["2XX", "3XX", "4XX", "5XX"]
        }, {
            show: true,
            top: '0%',
            right: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "Overall": false,
                "Time > 5s": true,
                "Time < 5s": false
            },
            data: ["Overall", "Time < 5s", "Time > 5s"]
        }],
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
            }
        }],
        yAxis: [{
            offset: 0,
            min: 0,
            max: 10000,
            name: 'RequestCount',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true,
                formatter: '{value}rpm'
            },
            splitLine: {
                show: false
            }
        }, { // 平均响应时间的轴，位于左侧
            offset: 0,
            name: 'AverageResponseTime(ms)',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                formatter: '{value} ms'
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
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
        }, {
            name: '4XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
            }
        }, {
            name: '5XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(252, 153, 60, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#FC993C',
                    shadowColor: 'rgba(252, 153, 60, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: 'Time < 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(90, 167, 0, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#5AA700',
                    shadowColor: 'rgba(90, 167, 0, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: 'Time > 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(231, 29, 50, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#E71D32',
                    shadowColor: 'rgba(231, 29, 50, 0.3)',
                    shadowBlur: 4
                }
            }
        }]
    },
    newVersion: {
        legend: [{
            show: true,
            top: '0%',
            left: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "2XX": true,
                "3XX": false,
                "4XX": false,
                "5XX": false
            },
            data: ["2XX", "3XX", "4XX", "5XX"]
        }, {
            show: true,
            top: '0%',
            right: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "Overall": true
            },
            data: ["Overall"]
        }],
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
            end: 3,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 3,
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
            }
        }],
        yAxis: [{
            offset: 0,
            name: 'RequestCount',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true,
                formatter: '{value}rpm'
            },
            splitLine: {
                show: false
            }
        }, { // 平均响应时间的轴，位于左侧
            offset: 0,
            name: 'AverageResponseTime(ms)',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                formatter: '{value} ms'
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
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
        }, {
            name: '4XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
            }
        }, {
            name: '5XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
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
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(231, 29, 50, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#E71D32',
                    shadowColor: 'rgba(231, 29, 50, 0.3)',
                    shadowBlur: 4
                }
            }
        }]
    }
};

export {
    echartConfig
};
