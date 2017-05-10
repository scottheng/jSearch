import * as ApiUtil from '../utils/meetup_api';


export const RECEIVE_ALL_MEETUPS = "RECEIVE_ALL_MEETUPS";

export const fetchMeetups = () => dispatch => (
  ApiUtil.fetchMeetups().then( response => dispatch(receiveAllMeetups(response)))
);

export const receiveAllMeetups = (response) => ({
  type: RECEIVE_ALL_MEETUPS,
  response
});
