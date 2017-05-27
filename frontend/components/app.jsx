import React from 'react';
import SearchContainer from './search/search_container';
import MeetupContainer from './meetup/meetup_container';
import EventbriteContainer from './eventbrite/eventbrite_index_container';

import SplashPage from './pages/splash_page';
import IndexPage from './pages/index_page';

const App = (props) => {
  return (
    <div>
      <IndexPage/>
    </div>
  );
};

export default App;


// <SearchContainer />
// <MeetupContainer />
// <EventbriteContainer />
