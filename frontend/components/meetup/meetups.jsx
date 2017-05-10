import React, { Component } from 'react';

class Meetups extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMeetups();
  }

  render(){
    
  }

}


export default Meetups;
