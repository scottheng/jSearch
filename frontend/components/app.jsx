import React from 'react';
import SearchContainer from './search/search_container';
import MeetupContainer from './meetup/meetup_container';
import EventbriteContainer from './eventbrite/eventbrite_index_container';
import IndexPage from './pages/index_page';

const App = (props) => {
  return (
    <div className="flex-container">
      <IndexPage />
    </div>
  );
};

export default App;
