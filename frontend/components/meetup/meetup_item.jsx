import React, { Component } from 'react';

class MeetupItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

      <div className="flex-container flex-vertical">
        <h1 className="date-class">{this.props.date}</h1>
        {this.props.events[this.props.date].map((el, id) => (
          <li key={id} className="events-item flex-container flex-horizontal">
          <div className="events-left">
            <h4>Date: {el.eventDate}</h4>
            <h4>Time: {el.eventTime}</h4>
          </div>

          <div className="events-center">
            <h3>{el.name}</h3>
          </div>
          <div className="events-right">
            <a target="_blank" href={el.eventUrl}>Link To Page</a>
          </div>
        </li>
      ))}
      </div>

    );
  }
}

export default MeetupItem;
