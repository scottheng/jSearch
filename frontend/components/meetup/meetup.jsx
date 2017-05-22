import React, { Component } from 'react';
import MeetupItem from './meetup_item';

class Meetup extends Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   let request = {};
  //   this.props.fetchMeetups(request);
  // }

  render(){

    if(Object.keys(this.props.meetups).length === 0){
      return <div>Loading...</div>;
    }
    // console.log(this.props)
    let row = this.props.meetups.results.slice(0, 10);
    return(
      <div>
        <div>
          <ul>
            {row.map( (el, id) => (
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
      </div>
    );
  }

}

export default Meetup;


// <MeetupItem
//   key={id}
//   time={this.setUpDate()}
//   />
