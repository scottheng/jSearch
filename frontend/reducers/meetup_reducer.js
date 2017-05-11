import { RECEIVE_ALL_MEETUPS } from '../actions/meetup_actions';
import merge from 'lodash/merge';

const initialState = {
  data: {}
};

const MeetupReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_MEETUPS:
      return merge({}, action.response);
    default:
      return state;
  }
};

export default MeetupReducer;
