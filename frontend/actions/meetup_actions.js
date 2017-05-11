import * as ApiUtil from '../utils/meetup_api';


export const RECEIVE_ALL_MEETUPS = "RECEIVE_ALL_MEETUPS";

export const fetchMeetups = (request) => dispatch => (
  ApiUtil.fetchMeetups(request).then( response => dispatch(receiveAllMeetups(response)))
);

export const receiveAllMeetups = (response) => ({
  type: RECEIVE_ALL_MEETUPS,
  response
});
