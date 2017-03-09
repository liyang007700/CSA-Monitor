/*jshint esversion: 6 */
import template from '../../templates/calendar/weekDay.html';
import templateDialog from '../../templates/calendar/inputDialog.html';
/*
import {
    Dialog
}
from '../../plugins/dialog';*/

Vue.component("week-day", {
    props: ["item"],
    template: template,
    data: function() {
        return {
            options: [ // dialog options
                {
                    text: "Planned outage",
                    value: "planned"
                }, {
                    text: "Unplanned outage",
                    value: "unplanned"
                }, {
                    text: "Module release, not all outage",
                    value: "release"
                }, {
                    text: "Demo",
                    value: "demo"
                }, {
                    text: "Other activities",
                    value: "other"
                }
            ],

            ifShowDialog: false,
            ifShowShadowBlock: false,
            Dialog: "m-dialog", //local component name
            title: "", //dialog title variable
            message: "", //dialog v-model variable
            selected: "", // dialog option selected value
            duration: "",

            isMouseDown: false,
            mouseDownY: 0,
            isMouseUp: true,
            mouseUpY: 0,
            mousemoveY: 0,
            styleShadowBlock: {
                top: "0px",
                height: "0px"
            },
            styleDialog: {

            },
            styleEvent: {

            },
            subjects: this.item.events

        };
    },
    methods: {
        setDialogPos: function(e, _this) {

            let screenWidth = window.screen.width;
            let screenHeight = window.screen.height;
            if (e.screenX < screenWidth / 2 && e.screenY <
                screenHeight / 2) {
                _this.$data.styleDialog.left = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY /
                    40) * 40 + 85 + "px";
            } else if (e.screenX > screenWidth / 2 && e.screenY <
                screenHeight / 2) { // right top region of screen
                _this.$data.styleDialog.right = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY /
                    40) * 40 + 85 + "px";
            } else if (e.screenX < screenWidth / 2 && e.screenY >
                screenHeight / 2) { // left bottom region of screen
                _this.$data.styleDialog.left = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY /
                    40) * 40 - 150 + "px";
            } else {
                _this.$data.styleDialog.right = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY /
                    40) * 40 - 150 + "px";
            }
        },
        showShadowBlock: function(e, _this) {
            _this.$data.styleShadowBlock.top = Math.floor(e.layerY /
                    40) *
                40 + "px";
            _this.$data.ifShowShadowBlock = true;
            _this.$data.styleEvent.top = Math.floor(e.layerY /
                    40) *
                40 + "px";

        },
        computeDate: function(e, _this) {
            let _todayLocal = new Date(Date.parse(_this.item.date));
            let timezoneoffsetMin = _todayLocal.getTimezoneOffset();
            let _todayStr = new Date(Date.parse(_this.item.date) +
                timezoneoffsetMin *
                60000).toString().substring(0, 15);
            let _localTimeStrTop = new Date(Date.parse(_this.item.date) +
                (Math.floor(
                    e.layerY / 40) - 1) * 1800000 +
                timezoneoffsetMin * 60000).toLocaleTimeString();
            /*
            let _localTimeStrEnd = new Date(Date.parse(_this.item.date) +
                (Math.floor(
                    e.layerY / 40) + 1) * 1800000 +
                timezoneoffsetMin * 60000).toLocaleTimeString();*/

            let _formattedLocalTimeStrTop = '';
            //let _formattedLocalTimeStrEnd = '';
            if (_localTimeStrTop.match('上午')) {
                _formattedLocalTimeStrTop = _localTimeStrTop.substring(
                    2) + " AM";
            } else if (_localTimeStrTop.match('下午')) {
                _formattedLocalTimeStrTop = _localTimeStrTop.substring(
                    2) + " PM";
            }
            /*
            if (_localTimeStrEnd.match('上午')) {
                _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                    2) + " AM";
            } else if (_localTimeStrEnd.match('下午')) {
                _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                    2) + " PM";
            }*/
            _this.title = _todayStr + "  Start-Time:  " +
                _formattedLocalTimeStrTop;
        },
        showDialog: function(_this) {
            _this.ifShowDialog = true;
        },
        mousemove: function(evt) {
            /*
            if (this.isMouseDown === true) {
                this.$data.ifShowShadowBlock = true;
                if (evt.layerY < this.mouseDownY) {
                    this.$data.styleShadowBlock.top = Math.floor(
                            this.mouseDownY / 40) * 40 + evt.layerY -
                        this.mouseDownY + "px";
                    this.$data.styleShadowBlock.height = this.mouseDownY -
                        evt.layerY + "px";
                    console.log("evt.layerY: " + evt.layerY);
                    console.log("mouseDownY: " + this.mouseDownY);
                    console.log(this.$data.styleShadowBlock.height);
                    console.log("up");
                } else {
                    this.$data.styleShadowBlock.top = Math.floor(
                        this.mouseDownY / 40) * 40 + "px";
                    this.$data.styleShadowBlock.height = evt.layerY -
                        Math.floor(this.mouseDownY / 40) * 40 +
                        "px";
                    console.log("evt.layerY: " + evt.layerY);
                    console.log("mouseDownY: " + this.mouseDownY);
                    console.log(this.$data.styleShadowBlock.height);
                    console.log("down");
                }
            }*/
        },
        mouseDown: function(evt) {
            /*
            this.isMouseDown = true;
            this.mouseDownY = evt.layerY;*/
        },
        mouseUp: function(evt) {
            /*
            this.isMouseDown = false;
            let _this = this;
            // single click event

            if (evt.layerY === this.mouseDownY) {
                this.setDialogPos(evt, _this);

                this.$data.styleShadowBlock.top = Math.floor(evt.layerY /
                    40) * 40 + "px";
                this.$data.ifShowShadowBlock = true;

                let _todayLocal = new Date(Date.parse(this.item.date));
                let timezoneoffsetMin = _todayLocal.getTimezoneOffset();
                let _todayStr = new Date(Date.parse(this.item.date) +
                    timezoneoffsetMin *
                    60000).toString().substring(0, 15);
                let _localTimeStrTop = new Date(Date.parse(this.item
                        .date) +
                    (Math.floor(
                        evt.layerY / 40) - 1) * 1800000 +
                    timezoneoffsetMin * 60000).toLocaleTimeString();
                let _localTimeStrEnd = new Date(Date.parse(this.item
                        .date) +
                    (Math.floor(
                        evt.layerY / 40) + 1) * 1800000 +
                    timezoneoffsetMin * 60000).toLocaleTimeString();
                let _formattedLocalTimeStrTop = '';
                let _formattedLocalTimeStrEnd = '';
                if (_localTimeStrTop.match('上午')) {
                    _formattedLocalTimeStrTop = _localTimeStrTop.substring(
                        2) + " AM";
                } else if (_localTimeStrTop.match('下午')) {
                    _formattedLocalTimeStrTop = _localTimeStrTop.substring(
                        2) + " PM";
                }
                if (_localTimeStrEnd.match('上午')) {
                    _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                        2) + " AM";
                } else if (_localTimeStrEnd.match('下午')) {
                    _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                        2) + " PM";
                }
                this.title = _todayStr + "  " +
                    _formattedLocalTimeStrTop +
                    " - " +
                    _formattedLocalTimeStrEnd;
                this.ifShowDialog = true;
            } else {
                //
                //this.setDialogPos(evt, _this);
                //this.computeDate(evt, _this);
            }*/


            //this.ismousemove = false;
            //clearInterval(this.isMouseUp(), 100);
            /*
            if (evt.screenY === this.mouseDownY) {
                this.showEvtDialog(evt);
            }*/
        },
        mouseClick: function(evt) {
            this.showEvtDialog(evt);
        },
        showEvtDialog: function(evt) {
            let _this = this;
            /******************compute dialog position***********************/
            this.setDialogPos(evt, _this);
            this.showShadowBlock(evt, _this);
            this.computeDate(evt, _this);
            this.showDialog(_this);
        },
        storeEvent: function(message, selected, duration) {
            this.styleEvent.height = Math.floor(duration * 80 / 40) *
                40 + "px";
            this.subjects.push({
                text: message,
                type: selected,
                style: this.styleEvent
            });
        },
        clearDialog: function() {
            this.$data.ifShowShadowBlock = false;
            this.$data.ifShowDialog = false;
        }
    },
    mounted: function() {},
    components: {
        "m-block": {
            props: ["showBlock"],
            template: "<div v-if=\"showBlock\" class=\"shadowBlock\"></div>",
            data: function() {
                return {};
            }
        },
        "m-dialog": {
            props: ["title", "ifShowDialog", "styleDialog",
                "options"
            ],
            template: templateDialog,
            data: function() {
                return {
                    message: "",
                    selected: "",
                    duration: null
                };
            },
            methods: {
                close: function() {
                    this.$emit('clear');
                },
                submitEvent: function() {
                    this.$emit('clear');
                    this.$emit('submit', this.message, this.selected,
                        this.duration);
                }
            },
            created: function() {

            },
            mounted: function() {}
        },
        "m-events": {
            props: ["item"],
            template: "<div class=\"eventBlock\" :class=\"item.type\" :style=\"item.style\">{{ item.text }}</div>"
        }
    }
});
