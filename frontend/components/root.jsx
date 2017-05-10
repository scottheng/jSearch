import React from 'react';
import MeetupContainer from './meetup/meetup_container';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <MeetupContainer/>
      </div>
    );
  }
}

export default Root;
