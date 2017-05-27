import React, { Component } from 'react';
import MeetupItem from './meetup_item';

class Meetup extends Component{
  constructor(props){
    super(props);
  }

  render(){

    if(Object.keys(this.props.meetups).length === 0){
      return <div>Loading...</div>;
    }

    // let row = this.props.meetups.results.slice(0, 10);
    return(
      <div className="events-index flex-container flex-vertical">
        <h1 className="align-self-center">Meetup Events</h1>
        <ul className="events-list">
          {this.props.meetups.results.map( (el, id) => (
            <MeetupItem
              key={id}
              name={el.name}
              city={el.city}
              time={el.time}
              eventUrl={el.event_url}
              />
          ))}
        </ul>
      </div>
    );
  }

}

export default Meetup;
