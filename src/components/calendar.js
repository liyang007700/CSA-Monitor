/*jshint esversion: 6 */
import template from '../templates/calendar.html';
import '../components/calendar/calendarWeek';

const componentCalendar = {
	template: template,
	data: function() {
		return {
			week: {
				hour: "",
				Mon: "Mon 27-Feb",
				Tue: "Tue 28-Feb",
				Wed: "Wed 1-Mar",
				Thu: "Thu 2-Mar",
				Fri: "Fri 3-Mar",
				Sat: "Sat 4-Mar",
				Sun: "Sun 5-Mar"
			},
			items: [{
				hour: "12AM",
				Mon: {
					text: "",
					class: ""
				},
				Tue: {
					text: "",
					class: ""
				},
				Wed: {
					text: "",
					class: ""
				},
				Thu: {
					text: "",
					class: ""
				},
				Fri: {
					text: "",
					class: ""
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "",
					class: ""
				},
			}, {
				hour: "1AM",
				Mon: {
					text: "",
					class: ""
				},
				Tue: {
					text: "",
					class: ""
				},
				Wed: {
					text: "",
					class: ""
				},
				Thu: {
					text: "",
					class: ""
				},
				Fri: {
					text: "",
					class: ""
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "",
					class: ""
				},
			}, {
				hour: "2AM",
				Mon: {
					text: "",
					class: ""
				},
				Tue: {
					text: "",
					class: ""
				},
				Wed: {
					text: "",
					class: ""
				},
				Thu: {
					text: "",
					class: ""
				},
				Fri: {
					text: "",
					class: ""
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "",
					class: "other"
				},
			}, {
				hour: "3AM",
				Mon: {
					text: "CSA RoadShow HK",
					class: "demo"
				},
				Tue: {
					text: "",
					class: ""
				},
				Wed: {
					text: "",
					class: ""
				},
				Thu: {
					text: "investor relationship",
					class: "demo"
				},
				Fri: {
					text: "Framework Release",
					class: "planned"
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "DB2 Data backup",
					class: "other"
				},
			}, {
				hour: "4AM",
				Mon: {
					text: "",
					class: ""
				},
				Tue: {
					text: "",
					class: ""
				},
				Wed: {
					text: "CSA RoadShow Beijing",
					class: "demo"
				},
				Thu: {
					text: "",
					class: ""
				},
				Fri: {
					text: "Learning Hub Release",
					class: "release"
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "",
					class: "other"
				},
			}, {
				hour: "5AM",
				Mon: {
					text: "",
					class: ""
				},
				Tue: {
					text: "Page Manager quick fix",
					class: "release"
				},
				Wed: {
					text: "",
					class: ""
				},
				Thu: {
					text: "",
					class: ""
				},
				Fri: {
					text: "OneScore  Release",
					class: "release"
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "",
					class: ""
				},
			}, {
				hour: "6AM",
				Mon: {
					text: "",
					class: ""
				},
				Tue: {
					text: "",
					class: ""
				},
				Wed: {
					text: "SSO outage",
					class: "unplanned"
				},
				Thu: {
					text: "",
					class: ""
				},
				Fri: {
					text: "",
					class: ""
				},
				Sat: {
					text: "",
					class: ""
				},
				Sun: {
					text: "",
					class: ""
				},
			}, {
				hour: "7AM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "8AM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "9AM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "10AM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "11AM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "12PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "1PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "2PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "3PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "4PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "5PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "6PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "7PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "8PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "9PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "10PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
			}, {
				hour: "11PM",
				Sun: "",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: ""
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
