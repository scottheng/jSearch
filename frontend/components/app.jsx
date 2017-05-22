import React from 'react';
import Search from './search/search';
import MeetupContainer from './meetup/meetup_container';
import EventbriteContainer from './eventbrite/eventbrite_index_container';


const App = (props) => {
  return (
    <div>
      <Search />
      <MeetupContainer />
      <EventbriteContainer />
    </div>
  );
};

export default App;
