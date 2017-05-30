import React, { Component } from 'react';

class MeetupItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>{this.props.date}</h1>
        {this.props.events[this.props.date].map((el, id) => (
          <li key={id} className="events-item flex-container flex-horizontal">
          <div className="events-left">
            <h4>Date: {el.eventDate}</h4>
            <h4>Time: {el.eventTime}</h4>
          </div>

          <div className="events-right">
            <h3>{el.name}</h3>
            {/*<h3>{this.props.eventUrl}</h3>*/}
          </div>
        </li>
      ))}
      </div>
    );
  }
}

export default MeetupItem;
