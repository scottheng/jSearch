import React, { Component } from 'react';

class Meetup extends Component{
  constructor(props){
    super(props);
    this.rows = [];
  }

  componentDidMount(){
    const request = {};
    this.props.fetchMeetups(request);
  }

  setUpDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let isAm = true;

    if(hours > 12){
      isAm = false;
      hours -= 12;
    }
    // console.log(hours);
    // console.log(typeof hours)
    let amOrPm = isAm ? "AM" : "PM";
    let timeString = hours.toString() + ':' + minutes.toString() + amOrPm;
    return timeString;
  }

  render(){

    // console.log(this.props.meetups);

    if(Object.keys(this.props.meetups).length === 0){
      return <div>Loading...</div>;
    }

    let row = this.props.meetups.results.slice(0, 10);
    console.log(row);

    // console.log(row[0].time)
    var a = new Date(row[0].time)
    var utcDate = new Date(a);

    this.setUpDate(utcDate);

    return(
      <div>
        <div>
          <ul>
            {row.map( (el, id) => (
              <li key={id}>
                <div>{el.name}</div>
                <div>{this.setUpDate()}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default Meetup;
