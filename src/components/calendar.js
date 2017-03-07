/*jshint esversion: 6 */
import template from '../templates/calendar.html';
import '../components/calendar/calendarTable';
//import '../components/calendar/calendarWeekEvent';

const componentCalendar = {
	template: template,
	data: function() {
		return {
			weekDay: "weekDay",
			month: "March 2017",
			agenda: [{
				"date": "2017-02-27T00:00",
				events: [{
					"text": "CSA RoadShow HK",
					"type": "demo",
					"startTime": "2017-02-27T03:00",
					"endTime": "2017-02-27T04:00"
				}]
			}, {
				"date": "2017-02-28T00:00",
				events: [{
					"text": "Page Manager quick fix",
					"type": "release",
					"startTime": "2017-02-28T05:00",
					"endTime": "2017-02-28T06:00"
				}]
			}, {
				"date": "2017-03-01T00:00",
				events: [{
					"text": "CSA RoadShow Beijing",
					"type": "demo",
					"startTime": "2017-03-01T04:00",
					"endTime": "2017-03-01T05:00"
				}, {
					"text": "SSO outage",
					"type": "unplanned",
					"startTime": "2017-03-01T06:00",
					"endTime": "2017-03-01T07:00"
				}]
			}, {
				"date": "2017-03-02T00:00",
				events: [{
					"text": "investor relationship",
					"type": "demo",
					"startTime": "2017-03-02T03:00",
					"endTime": "2017-03-02T04:00"
				}]
			}, {
				"date": "2017-03-03T00:00",
				events: [{
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
				}]
			}, {
				"date": "2017-03-04T00:00",
				events: [{
					"text": "",
					"type": "",
					"startTime": "2017-03-04T00:00",
					"endTime": "2017-03-04T00:00"
				}]
			}, {
				"date": "2017-03-05T00:00",
				events: [{
					"text": "DB2 Data backup",
					"type": "other",
					"startTime": "2017-03-05T02:00",
					"endTime": "2017-03-05T05:00"
				}]
			}]
		};
	},
	methods: {

	},
	created: function() {

	},
	mounted: function() {
		console.log("calender mounted!");
	},
	destroyed: function() {
		console.log("calendar destroyed!");
	},
	components: {

	}
};

export {
	componentCalendar
};
