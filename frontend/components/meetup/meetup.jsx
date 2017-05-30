import React, { Component } from 'react';
import MeetupItem from './meetup_item';

class Meetup extends Component{
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.meetups.length === 0 || this.props.eventbrite.length === 0){
      return <div>Loading...</div>;
    }

    // let row = this.props.meetups.results.slice(0, 10);
    return(
      <div className="events-index flex-container flex-vertical">
        <h1 className="align-self-center">Meetup Events</h1>
        <ul className="events-list">
          {this.props.meetups.map( (el, id) => (
            <MeetupItem
              key={id}
              events={el}
              date={Object.keys(el)[0]}
              />
          ))}
        </ul>
      </div>
    );
  }

}

export default Meetup;
