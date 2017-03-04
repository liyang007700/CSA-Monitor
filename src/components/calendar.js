/*jshint esversion: 6 */
import template from '../templates/calendar.html';
import '../components/calendar/calendarWeekTable';
import '../components/calendar/calendarWeekEvent';

const componentCalendar = {
	template: template,
	data: function() {
		return {
			date: [
				"2017-02-27T00:00", "2017-02-28", "2017-03-01", "2017-03-02",
				"2017-03-03",
				"2017-03-04", "2017-03-05"
			],
			events: [{
				"text": "CSA RoadShow HK",
				"type": "demo",
				"startTime": "2017-02-27T03:00",
				"endTime": "2017-02-27T04:00"
			}, {
				"text": "Page Manager quick fix",
				"type": "release",
				"startTime": "2017-02-28T05:00",
				"endTime": "2017-02-28T06:00"
			}, {
				"text": "CSA RoadShow Beijing",
				"type": "demo",
				"startTime": "2017-03-01T04:00",
				"endTime": "2017-03-01T05:00"
			}, {
				"text": "SSO outage",
				"type": "unplanned",
				"startTime": "2017-03-01T06:00",
				"endTime": "2017-03-01T07:00"
			}, {
				"text": "investor relationship",
				"type": "demo",
				"startTime": "2017-03-02T03:00",
				"endTime": "2017-03-02T04:00"
			}, {
				"text": "Framework Release",
				"type": "planned",
				"startTime": "2017-03-03T03:00",
				"endTime": "2017-03-03T04:00"
			}, {
				"text": "Learning Hub Release",
				"type": "release",
				"startTime": "2017-03-03T04:00",
				"endTime": "2017-03-03T05:00"
			}, {
				"text": "OneScore Release",
				"type": "release",
				"startTime": "2017-03-03T05:00",
				"endTime": "2017-03-03T06:00"
			}, {
				"text": "DB2 Data backup",
				"type": "other",
				"startTime": "2017-03-05T02:00",
				"endTime": "2017-03-05T05:00"
			}],
			hours: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM",
				"9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM",
				"7PM", "8PM", "9PM", "10PM", "11PM"
			]
		};
	},
	methods: {},
	created: function() {

	},
	mounted: function() {
		console.log("calender mounted!");
	}
};

export {
	componentCalendar
};
