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

  parseMeetups(){
    // console.log('here');
    // for(let i = 0; i < 10; i++){
    //   this.rows.push(this.props.meetups.results[i]);
    // }

  }

  render(){
    console.log(this.props);
    let row;
    if (Object.keys(this.props.meetups).length !== 0){
      row = this.props.meetups.results.slice(0, 10);
    }
    console.log(row);
    return(
      <div>
        <div>
          {row.map(el => (
            <li>el.name</li>
          ))}
        </div>
      </div>
    );
  }

}

export default Meetup;
