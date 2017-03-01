/*jshint esversion: 6 */
import template from '../../templates/calendar/calendarWeek.html';

Vue.component('calendar-row', {
    props: ['item'],
    template: template,
    data: function() {
        return {};
    },
    methods: {},
    created: function() {

    },
    mounted: function() {
        console.log("row mounted!");
        console.log(this.item);
    }
});
