/*jshint esversion: 6 */
import template from '../../templates/calendar/calendarWeekEvent.html';

Vue.component('event-block', {
    props: ['item', 'date'],
    template: template,
    data: function() {
        return {
            styleObject: {
                top: '0',
                left: '0',
                height: '80px'
            }
        };
    },
    methods: {
        computeStyle: function() {
            let widthContainer = document.getElementById(
                "containerTable");
            console.log(widthContainer);
            let totalMinute = 10080;
            let zeroTime = Date.parse(this.date[0]);
            let startTime = (Date.parse(this.item.startTime) -
                zeroTime) / 60000;
            let duration = ((Date.parse(this.item.endTime) -
                zeroTime) / 60000) - startTime;
            console.log('startTime: ' + startTime);
            console.log('duration: ' + duration);
            this.styleObject.left = (Math.round(startTime / 1440) *
                    176 +
                    53.21) +
                'px';
            this.styleObject.top = ((startTime % 1440) / 60) * 80 +
                'px';
            this.styleObject.height = (duration / 60) * 80 + 'px';
        }
    },
    created: function() {

    },
    mounted: function() {
        this.computeStyle();
    }
});
