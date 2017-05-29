import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MeetupContainer from './meetup/meetup_container';


import App from './app';
// import SplashPage from './pages/splash_page';
// import IndexPage from './pages/index_page';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={ this.props.store }>
        <Router>
          <App/>
        </Router>
      </Provider>
    );
  }
}

export default Root;
