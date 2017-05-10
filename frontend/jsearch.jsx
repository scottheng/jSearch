import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { fetchEvents, fetchEventbriteEvent } from './utils/eventbriteAPI';
import { fetchMeetups, fetchMeetupPicture } from './utils/meetupAPI';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchEvents = fetchEvents;
  window.fetchMeetups = fetchMeetups;
  window.fetchMeetupPicture = fetchMeetupPicture;
  window.fetchEventbriteEvent = fetchEventbriteEvent;
  ReactDOM.render(<Root/>, root);


  // let epoch = new Date('2016-10-11').getTime();
  // console.log(epoch);
});
