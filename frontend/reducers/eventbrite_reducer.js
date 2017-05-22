import {
	RECEIVE_EB_EVENTS,
	RECEIVE_EB_EVENT
} from '../actions/eventbrite_actions';
import merge from 'lodash/merge';

const eventbriteReducer = (state = [], action) => {
	Object.freeze(state);
	let newState = merge({}, state);

	switch(action.type) {
		case RECEIVE_EB_EVENTS:
			return action.events;
		case RECEIVE_EB_EVENT:
			const newEvent = {[action.event]: action.event};
			return merge({}, state, newEvent);
		default:
			return state;

	}
};

export default eventbriteReducer;