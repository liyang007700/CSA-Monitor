/*jshint esversion: 6 */
import template from '../../templates/calendar/calendarTable.html';
import {
    Dialog
}
from '../../plugins/dialog';

Vue.component("week-day", {
    props: ["item"],
    template: template,
    data: function() {
        return {
            ifShow: false,
            title: "",
            body: "haha",
            styleBlock: {
                position: "absolute",
                top: "200px",
                width: "96%",
                height: "80px",
                backgroundColor: "rgba(90, 170, 250, 0.5)"
            }
        };
    },
    methods: {
        showEvtDialog: function(evt) {
            this.$data.styleBlock.top = Math.floor(evt.layerY / 40) *
                40 + "px";
            this.$data.ifShow = this.$data.ifShow === true ? false :
                true;
            let _todayLocal = new Date(Date.parse(this.item.date));
            let timezoneoffsetMin = _todayLocal.getTimezoneOffset();
            let _todayStr = new Date(Date.parse(this.item.date) +
                timezoneoffsetMin *
                60000).toString().substring(0, 15);
            let _localTimeStrTop = new Date(Date.parse(this.item.date) +
                (Math.floor(
                    evt.layerY / 40) - 1) * 1800000 +
                timezoneoffsetMin * 60000).toLocaleTimeString();
            let _localTimeStrEnd = new Date(Date.parse(this.item.date) +
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
            this.$data.title = _todayStr + "  " +
                _formattedLocalTimeStrTop +
                " - " +
                _formattedLocalTimeStrEnd;
            console.log(this.$data.title);

            Dialog.show();
        },
        hideEvtDialog: function(evt) {
            this.$data.ifShow = false;
            console.log("esc press");
        }
    },
    mounted: function() {
        console.log("weekDay mounted!");
    },
    components: {
        "m-block": {
            props: ["showBlock"],
            template: "<div v-if=\"showBlock\"></div>",
            data: function() {
                return {};
            }
        }
    }
});
