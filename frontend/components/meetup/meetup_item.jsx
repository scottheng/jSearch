import React, { Component } from 'react';

class MeetupItem extends Component{
  constructor(props){
    super(props);
    let date = new Date(this.props.time);
    let eventSchedule =  this.parseDate(date);
    this.eventDate = eventSchedule[0];
    this.eventTime = eventSchedule[1];
  }

  parseDate(date){
    return date.toLocaleString().split(',');
  }

  render(){
    return(
      <li>
        <div>{this.props.name}</div>
        <div>{this.eventDate}</div>
        <div>{this.eventTime}</div>
        <div>{this.props.eventUrl}</div>
      </li>
    );
  }
}

export default MeetupItem;
