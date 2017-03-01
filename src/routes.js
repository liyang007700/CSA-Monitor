/*jshint esversion: 6 */
import {componentIndex} from './components/index';
import {componentCalendar} from './components/calendar';
import {componentMetrics} from './components/metrics';
import {componentLogs} from './components/logs';
import {componentEvents} from './components/events';
import {componentSettings} from './components/settings';
import {componentTests} from './components/tests';

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
		path: '/logs',
		component: componentLogs
	},
	{
		path: '/events',
		component: componentEvents
	},
	{
		path: '/settings',
		component: componentSettings
	},
	{
		path: '/tests',
		component: componentTests
	},{
		path: '/',
		redirect: '/index'
	}
];

export {routes};
