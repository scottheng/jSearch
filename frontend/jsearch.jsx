import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { fetchEvents } from './utils/eventbriteAPI';
import { fetchMeetups } from './utils/meetupAPI';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchEvents = fetchEvents;
  window.fetchMeetups = fetchMeetups;
  ReactDOM.render(<Root/>, root);
});
