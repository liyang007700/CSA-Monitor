/*jshint esversion: 6 */
import templateHistogram from '../../templates/index/Histogram.html';
import templateTooltip from '../../templates/index/Tooltip.html';
var widgetIndex = {
    "mHistogram": {
        props: ["events", "timeLine"],
        template: templateHistogram,
        data: function() {
            return {
                styleTooltip: {
                    position: "absolute",
                    left: 0,
                    top: 0
                },
                ifShowTooltip: false,
                eventObject: this.events[0]
            };
        },
        methods: {
            hover: function(evt) {
                this.styleTooltip.left = evt.layerX + 20 + "px";
                this.styleTooltip.top = evt.layerY + 20 + "px";
                if (evt.layerY > 60 && evt.layerY < 160) {
                    this.eventObject = this.events[0];
                    this.ifShowTooltip = true;
                } else if (evt.layerY > 160 && evt.layerY < 260) {
                    this.eventObject = this.events[1];
                    this.ifShowTooltip = true;
                } else if (evt.layerY > 260 && evt.layerY < 360) {
                    this.eventObject = this.events[2];
                    this.ifShowTooltip = true;
                } else {
                    this.ifShowTooltip = false;
                }

            },
            mouseLeave: function() {
                this.ifShowTooltip = false;
            },
            createYaxis: function(ctx, width, height) {
                var yAxisEnd = height - 60;
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#333';
                ctx.beginPath();
                ctx.moveTo(60.5, 60);
                ctx.lineTo(60.5, yAxisEnd);
                ctx.stroke();
                /* axisTick */
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#999';
                /* Y */
                ctx.beginPath();
                ctx.moveTo(53, 160.5);
                ctx.lineTo(60, 160.5);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(53, 260.5);
                ctx.lineTo(60, 260.5);
                ctx.stroke();
                ctx.restore();
            },
            createXaxis: function(ctx, width, height) {
                var xAxisEnd = width - 60;
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#333';
                ctx.beginPath();
                ctx.moveTo(60, 360.5);
                ctx.lineTo(xAxisEnd, 360.5);
                ctx.stroke();
                ctx.restore();
            },
            createXGrid: function(ctx, width, height, items) {
                var yAxisEnd = height - 60;
                var gridWidth = (width - 120) / (items - 1);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ccc';
                for (let i = 1; i < items; i++) {
                    let gridX = Math.round(i * gridWidth) + 60.5;
                    ctx.beginPath();
                    ctx.moveTo(gridX, 60);
                    ctx.lineTo(gridX, yAxisEnd);
                    ctx.stroke();
                    console.log(gridX);
                }
                ctx.restore();
            },
            createXText: function(ctx, width, height, items, data) {
                var yAxisEnd = height - 60 + 20;
                var gridWidth = (width - 120) / (items - 1);
                ctx.font = "12px sans-serif";
                for (let i = 0; i < items; i++) {
                    let gridX = Math.round(i * gridWidth) + 35;
                    ctx.fillText(data[i].slice(11), gridX, yAxisEnd);
                }
                ctx.restore();
            },
            createBarText: function(ctx, width, height, events) {
                // the width pixels per second, total time 3minutes.
                var secondWidth = Math.round((width - 120) / 180);
                for (let i = 0; i < events.length; i++) {
                    var startSeconds = (Date.parse(events[i].startTime) -
                        Date.parse(events[
                            i].startTime.slice(0, 16))) / 1000;
                    var totalTime = events[i].totalTime;
                    var totalText = "totalTime: " + events[i].totalTime +
                        "s";
                    ctx.font = "12px sans-serif";
                    ctx.fillText(
                        "module name :  " + events[i].url,
                        60 + startSeconds * secondWidth, 100 + i *
                        100);
                    ctx.fillText(
                        totalText,
                        60 + (startSeconds + totalTime) *
                        secondWidth + 20,
                        123 + i * 100
                    );
                }
                ctx.restore();
            },
            createLegendText: function(ctx, width) {
                ctx.fillText("HTTP", width * 0.35, 30);
                ctx.fillText("Was", width * 0.35 + 100, 30);
                ctx.fillText("DB2", width * 0.35 + 200, 30);
                ctx.fillText("Cloudant", width * 0.35 + 300, 30);
                ctx.restore();
            },
            createLegendBlock: function(ctx, width) {
                ctx.fillStyle = "#28CC9E"; //#90F6D7
                ctx.fillRect(width * 0.35 - 50, 15, 40, 20);
                ctx.fillStyle = "#FEF2A0";
                ctx.fillRect(width * 0.35 + 100 - 50, 15, 40, 20);
                ctx.fillStyle = "#0881A3";
                ctx.fillRect(width * 0.35 + 200 - 50, 15, 40, 20);
                ctx.fillStyle = "#41506B";
                ctx.fillRect(width * 0.35 + 300 - 50, 15, 40, 20);
                ctx.restore();
            },
            createBarBlock: function(ctx, width, height, events) {
                // the width pixels per second, total time 3minutes.
                var barZone = {};
                var secondWidth = Math.round((width - 120) / 180);
                for (let i = 0; i < events.length; i++) {
                    var startSeconds = (Date.parse(events[i].startTime) -
                        Date.parse(events[
                            i].startTime.slice(0, 16))) / 1000;
                    for (let j = 0; j < events[i].courses.length; j++) {
                        switch (events[i].courses[j].name) {
                            case "HTTP":
                                ctx.fillStyle = "#28CC9E"; //HTTP#55A44E
                                break;
                            case "Was":
                                ctx.fillStyle = "#FEF2A0"; //Was #D7C37A
                                break;
                            case "DB2":
                                ctx.fillStyle = "#0881A3"; //DB
                                break;
                            case "Cloudant":
                                ctx.fillStyle = "#41506B"; //Cloudant#263849
                                break;
                        }
                        ctx.fillRect(
                            60 + startSeconds * secondWidth,
                            110 + i * 100,
                            events[i].courses[j].duration *
                            secondWidth,
                            20);
                        startSeconds += events[i].courses[j].duration;
                    }
                }
                ctx.restore();
            },
            createCanvas: function() {
                var container = document.getElementById(
                    "histogramContainer");
                var canvas = document.getElementById("u-histogram");
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;

                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");
                    // time scale line
                    this.createYaxis(ctx, canvas.width, canvas.height);
                    this.createXaxis(ctx, canvas.width, canvas.height);
                    this.createXGrid(ctx, canvas.width, canvas.height,
                        4);
                    this.createXText(ctx, canvas.width, canvas.height,
                        4, this.timeLine);
                    this.createBarText(ctx, canvas.width, canvas.height,
                        this.events);
                    this.createLegendText(ctx, canvas.width);
                    this.createLegendBlock(ctx, canvas.width);
                    this.createBarBlock(ctx, canvas.width, canvas.height,
                        this.events);
                }
            }
        },
        mounted: function() {
            this.createCanvas();
        },
        components: {
            "m-tooltip": {
                props: ["event"],
                template: templateTooltip,
                data: function() {
                    return {

                    };
                },
                beforeDestroy: function() {
                    console.log("m-tooltip beforeDestroy");
                },
                destroyed: function() {
                    console.log("m-tooltip destroyed");
                }
            }
        }
    }
};
export {
    widgetIndex
};
