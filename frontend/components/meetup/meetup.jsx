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
    // console.log(this.props);
    return(
      <div>
        <div>hi</div>
      </div>
    );
  }

}

export default Meetup;
