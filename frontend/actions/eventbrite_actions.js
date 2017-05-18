import * as APIUtil from 'utils/eventbriteAPI';

export const RECEIVE_EB_EVENTS = 'RECEIVE_EB_EVENTS';
export const RECEIVE_EB_EVENT = 'RECEIVE_EB_EVENT';

export const fetchEbEvents = () => dispatch => (
	APIUtil.fetchEvents()
	.then(response => dispatch(receiveEBEvents(response)))
);

export const fetchEbEvent = () => dispatch => (
	APIUtil.fetchEvent()
	.then(response => dispatch(receiveEBEvent(response)))
);

export const receiveEBEvents = events => ({
	type: RECEIVE_EB_EVENTS,
	events
});

export const receiveEBEvent = event => ({
	type: RECEIVE_EB_EVENT,
	event
});