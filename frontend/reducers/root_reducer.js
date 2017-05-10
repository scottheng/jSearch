import { combineReducers } from 'redux';
import MeetupReducer from './meetup_reducer';

const rootReducer = combineReducers({
	meetup: MeetupReducer
});

export default rootReducer;
