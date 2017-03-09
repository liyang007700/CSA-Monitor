/*jshint esversion: 6 */
import template from '../templates/calendar.html';
import '../components/calendar/weekDay';
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
					"style": {
						"top": "280px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-02-28T00:00",
				events: [{
					"text": "Page Manager quick fix",
					"type": "release",
					"style": {
						"top": "440px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-01T00:00",
				events: [{
					"text": "CSA RoadShow Beijing",
					"type": "demo",
					"style": {
						"top": "360px",
						"height": "80px"
					}
				}, {
					"text": "SSO outage",
					"type": "unplanned",
					"style": {
						"top": "520px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-02T00:00",
				events: [{
					"text": "investor relationship",
					"type": "demo",
					"style": {
						"top": "280px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-03T00:00",
				events: [{
					"text": "Framework Release",
					"type": "planned",
					"style": {
						"top": "280px",
						"height": "80px"
					}
				}, {
					"text": "Learning Hub Release",
					"type": "release",
					"style": {
						"top": "360px",
						"height": "80px"
					}
				}, {
					"text": "OneScore Release",
					"type": "release",
					"style": {
						"top": "440px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-04T00:00",
				events: []
			}, {
				"date": "2017-03-05T00:00",
				events: [{
					"text": "DB2 Data backup",
					"type": "other",
					"style": {
						"top": "200px",
						"height": "240px"
					}
				}]
			}]
		};
	},
	methods: {

	},
	created: function() {

	},
	mounted: function() {},
	destroyed: function() {},
	components: {

	}
};

export {
	componentCalendar
};
