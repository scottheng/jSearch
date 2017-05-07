import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { fetchEvents } from './utils/eventbriteAPI';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchEvents = fetchEvents;
  ReactDOM.render(<Root/>, root);
});
