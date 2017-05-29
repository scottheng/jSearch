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
      <li className="events-item flex-container flex-horizontal">

        <div className="events-left">
          <h4>Date: {this.eventDate}</h4>
          <h4>Time: {this.eventTime}</h4>
        </div>

        <div className="events-right">
          <h3>{this.props.name}</h3>
          {/*<h3>{this.props.eventUrl}</h3>*/}
        </div>

      </li>
    );
  }
}

export default MeetupItem;
