import React, { Component } from 'react';

class Meetup extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const request = {};
    this.props.fetchMeetups(request);
  }

  render(){
    return(
      <div>
        <div>
          
        </div>
      </div>
    );
  }

}

export default Meetup;
