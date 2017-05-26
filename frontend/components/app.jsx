import React from 'react';
import SearchContainer from './search/search_container';
import MeetupContainer from './meetup/meetup_container';
import EventbriteContainer from './eventbrite/eventbrite_index_container';
import SplashPage from './pages/Splash_page';

const App = (props) => {
  return (
    <div>
      <SplashPage />
    </div>
  );
};

export default App;


// <SearchContainer />
// <MeetupContainer />
// <EventbriteContainer />
