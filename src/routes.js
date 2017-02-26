/*jshint esversion: 6 */
import {componentIndex} from './components/index';
import {componentCalendar} from './components/calendar';
import {componentMetrics} from './components/metrics';
import {componentErrors} from './components/errors';
import {componentAlerting} from './components/alerting';
import {componentSettings} from './components/settings';

const routes = [
	{
		path: '/index',
		component: componentIndex
	},
	{
		path: '/calendar',
		component: componentCalendar
	},
	{
		path: '/metrics',
		component: componentMetrics
	},
	{
		path: '/errors',
		component: componentErrors
	},
	{
		path: '/alerting',
		component: componentAlerting
	},
	{
		path: '/settings',
		component: componentSettings
	},{
		path: '/',
		redirect: '/index'
	}
];

export {routes};
