import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, IndexRoute, onEnter } from 'react-router-dom';
import MeetupContainer from './meetup/meetup_container';

import App from './app';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={ this.props.store }>
        <Router>
          <Route path="/" component={ App }/>
        </Router>
      </Provider>
    );
  }
}

export default Root;
