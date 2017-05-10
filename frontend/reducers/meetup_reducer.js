import { RECEIVE_ALL_MEETUPS } from '../actions/meetup_actions';
import merge from 'lodash/merge';

const MeetupReducer = (state = {}, action) => {
  // console.log("reducer");
  // console.log(state);

  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_MEETUPS:
      return merge({}, action.response);
    default:
      return state;
  }
};

export default MeetupReducer;
