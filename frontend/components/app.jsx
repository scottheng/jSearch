import React from 'react';
import SearchContainer from './search/search_container';
import MeetupContainer from './meetup/meetup_container';
import EventbriteContainer from './eventbrite/eventbrite_index_container';


const App = (props) => {
  return (
    <div>
      <SearchContainer />
      <MeetupContainer />
      <EventbriteContainer />
    </div>
  );
};

export default App;
