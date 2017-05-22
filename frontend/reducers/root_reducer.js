import { combineReducers } from 'redux';
import MeetupReducer from './meetup_reducer';
import EventbriteReducer from './eventbrite_reducer';

const rootReducer = combineReducers({
	meetup: MeetupReducer,
	eventbrite: EventbriteReducer
});

export default rootReducer;
