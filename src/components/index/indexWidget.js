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
                eventObject: this.events[0],
                containerWidth: 0
            };
        },
        methods: {
            hover: function(evt) {
                if (evt.layerX < (this.containerWidth * 0.5)) {
                    this.styleTooltip.left = evt.layerX + 20 + "px";
                } else if (evt.layerX > (this.containerWidth * 0.5)) {
                    this.styleTooltip.left = evt.layerX - 160 + "px";
                }
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
            },
            createXaxis: function(ctx, width, height, items, data) {
                var xAxisEnd = width - 60;
                var yAxisEnd = height - 60;
                var xAxisTextHeight = height - 60 + 20;
                var gridWidth = (width - 150) / (items - 1);
                ctx.font = "12px sans-serif";
                ctx.fillStyle = "#000";
                for (let i = 0; i < items; i++) {
                    let gridX = Math.round(i * gridWidth) + 35;
                    ctx.fillText(data[i].slice(11), gridX,
                        xAxisTextHeight);
                }
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#333';
                ctx.beginPath();
                ctx.moveTo(60, 360.5);
                ctx.lineTo(xAxisEnd, 360.5);
                ctx.stroke();
                for (let i = 1; i < items; i++) {
                    let gridX = Math.round(i * gridWidth) + 60.5;
                    ctx.beginPath();
                    ctx.moveTo(gridX, yAxisEnd);
                    ctx.lineTo(gridX, yAxisEnd + 7);
                    ctx.stroke();
                }
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ccc';
                for (let i = 1; i < items; i++) {
                    let gridX = Math.round(i * gridWidth) + 60.5;
                    ctx.beginPath();
                    ctx.moveTo(gridX, 60);
                    ctx.lineTo(gridX, 360);
                    ctx.stroke();
                }
            },
            createBar: function(ctx, width, height, events) {
                // the width pixels per second, total time 3minutes.
                var secondWidth = Math.round((width - 150) / 180);
                for (let i = 0; i < events.length; i++) {
                    var startSeconds = (Date.parse(events[i].startTime) -
                        Date.parse(events[
                            i].startTime.slice(0, 16))) / 1000;
                    var totalTime = events[i].totalTime;
                    var totalText = "totalTime: " + events[i].totalTime +
                        "s";
                    ctx.font = "14px sans-serif";
                    ctx.fillStyle = "#000";
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
            },
            createLegend: function(ctx, width) {
                ctx.font = "12px sans-serif";
                ctx.fillStyle = "#000";
                ctx.fillText("HTTP", width * 0.35, 50);
                ctx.fillText("Was", width * 0.35 + 100, 50);
                ctx.fillText("DB2", width * 0.35 + 200, 50);
                ctx.fillText("Cloudant", width * 0.35 + 300, 50);
                ctx.fillStyle = "#28CC9E";
                ctx.fillRect(width * 0.35 - 50, 35, 40, 20);
                ctx.fillStyle = "#FEF2A0";
                ctx.fillRect(width * 0.35 + 100 - 50, 35, 40, 20);
                ctx.fillStyle = "#0881A3";
                ctx.fillRect(width * 0.35 + 200 - 50, 35, 40, 20);
                ctx.fillStyle = "#41506B";
                ctx.fillRect(width * 0.35 + 300 - 50, 35, 40, 20);
            },
            createHiDPICanvas: function(w, h, ratio) {
                var can = document.getElementById("u-histogram");
                can.width = w * ratio;
                can.height = h * ratio;
                can.style.width = w + "px";
                can.style.height = h + "px";
                can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0,
                    0);
                return can;
            },
            createCanvas: function() {
                // computer
                var ratio = (function() {
                    var ctx = document.createElement("canvas").getContext(
                            "2d"),
                        dpr = window.devicePixelRatio || 1,
                        bsr = ctx.webkitBackingStorePixelRatio ||
                        ctx.mozBackingStorePixelRatio ||
                        ctx.msBackingStorePixelRatio ||
                        ctx.oBackingStorePixelRatio ||
                        ctx.backingStorePixelRatio || 1;

                    return dpr / bsr;
                })();
                /* Parent DOM element use persentage-width to fit different screen
                   So use parent Dom's offsetWidth and offsetHeight to set
                   canvas tag's width and height
                */
                var container = document.getElementById(
                    "histogramContainer");
                var can = this.createHiDPICanvas(container.offsetWidth,
                    container.offsetHeight, ratio);

                // test if browser support canvas
                if (can.getContext) {
                    var ctx = can.getContext("2d");
                    this.createYaxis(ctx, container.offsetWidth,
                        container.offsetHeight);
                    this.createXaxis(ctx, container.offsetWidth,
                        container.offsetHeight,
                        4, this.timeLine);
                    this.createLegend(ctx, container.offsetWidth);
                    this.createBar(ctx, container.offsetWidth,
                        container.offsetHeight,
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
                template: templateTooltip
            }
        }
    }
};
export {
    widgetIndex
};
