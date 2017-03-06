/*jshint esversion: 6 */
import template from '../templates/calendar.html';
//import '../components/calendar/calendarWeekTable';
import '../components/calendar/calendarWeekEvent';

const componentCalendar = {
	template: template,
	data: function() {
		return {
			agenda: [{
				events: [{
					"date": "2017-02-27",
					"text": "CSA RoadShow HK",
					"type": "demo",
					"startTime": "2017-02-27T03:00",
					"endTime": "2017-02-27T04:00"
				}]
			}, {
				events: [{
					"date": "2017-02-28",
					"text": "Page Manager quick fix",
					"type": "release",
					"startTime": "2017-02-28T05:00",
					"endTime": "2017-02-28T06:00"
				}]
			}, {
				events: [{
					"date": "2017-03-01",
					"text": "CSA RoadShow Beijing",
					"type": "demo",
					"startTime": "2017-03-01T04:00",
					"endTime": "2017-03-01T05:00"
				}, {
					"date": "2017-03-01",
					"text": "SSO outage",
					"type": "unplanned",
					"startTime": "2017-03-01T06:00",
					"endTime": "2017-03-01T07:00"
				}]
			}, {
				events: [{
					"date": "2017-03-02",
					"text": "investor relationship",
					"type": "demo",
					"startTime": "2017-03-02T03:00",
					"endTime": "2017-03-02T04:00"
				}]
			}, {
				events: [{
					"date": "2017-03-03",
					"text": "Framework Release",
					"type": "planned",
					"startTime": "2017-03-03T03:00",
					"endTime": "2017-03-03T04:00"
				}, {
					"date": "2017-03-03",
					"text": "Learning Hub Release",
					"type": "release",
					"startTime": "2017-03-03T04:00",
					"endTime": "2017-03-03T05:00"
				}, {
					"date": "2017-03-03",
					"text": "OneScore Release",
					"type": "release",
					"startTime": "2017-03-03T05:00",
					"endTime": "2017-03-03T06:00"
				}]
			}, {
				events: [{
					"date": "2017-03-04",
					"text": "",
					"type": "",
					"startTime": "2017-03-04T00:00",
					"endTime": "2017-03-04T00:00"
				}]
			}, {
				events: [{
					"date": "2017-03-05",
					"text": "DB2 Data backup",
					"type": "other",
					"startTime": "2017-03-05T02:00",
					"endTime": "2017-03-05T05:00"
				}]
			}]
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
