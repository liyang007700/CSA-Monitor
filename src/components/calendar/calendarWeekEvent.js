/*jshint esversion: 6 */
import template from '../../templates/calendar/calendarWeekEvent.html';

Vue.component('event-block', {
    props: ['item', 'date'],
    template: template,
    data: function() {
        return {
            styleObject: {
                top: '0',
                height: '80px'
            }
        };
    },
    methods: {
        computeStyle: function() {
            let zeroTime = Date.parse(this.date);
            let startTime = (Date.parse(this.item.startTime) -
                zeroTime) / 60000;
            let duration = ((Date.parse(this.item.endTime) -
                Date.parse(this.item.startTime)) / 60000);
            this.styleObject.top = (startTime / 60) * 80 +
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
