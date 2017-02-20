/*jshint esversion: 6 */
import {componentIndex} from './components/index';
import {componentCalendar} from './components/calendar';
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
		path: '/settings',
		component: componentSettings
	},{
		path: '/',
		redirect: '/index'
	}
];

export {routes};