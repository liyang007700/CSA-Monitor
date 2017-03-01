/*jshint esversion: 6 */
import template from '../templates/calendar.html';
import '../components/calendar/calendarWeek';

const componentCalendar = {
	template: template,
	data: function() {
		return {
			week: {
				hour: "",
				Mon: "Mon 27",
				Tue: "Tue 28",
				Wed: "Wed 1",
				Thu: "Thu 2",
				Fri: "Fri 3",
				Sat: "Sat 4",
				Sun: "Sun 5"

			},
			items: [{
				hour: "12AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
			}, {
				hour: "1AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
			}, {
				hour: "2AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
			}, {
				hour: "3AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
			}, {
				hour: "4AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
			}, {
				hour: "5AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
			}, {
				hour: "6AM",
				Mon: "",
				Tue: "",
				Wed: "",
				Thu: "",
				Fri: "",
				Sat: "",
				Sun: "",
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
