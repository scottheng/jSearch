import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { timeStampParser } from '../../utils/timestamp_parser';

class Search extends Component{
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);

    this.state = {
      input: "",
      city: "",
      startDate: null,
      endDate: null,
      zipcode: "",
      radius: ""
    };
  }

  handleInput(e){
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({input: e.target.value});
    // console.log(this.state.input);
  }

  handleCity(e){
    e.preventDefault();
    this.setState({city: e.target.value});
  }

  handleZipcode(e){
    e.preventDefault();
    // console.log(e.target.value)
    let zipcode = e.target.value;
    // console.log(`before: ${this.state.zipcode}`);
    if(zipcode.length <= 5 ){
      this.setState({zipcode});
    }
    // console.log(`after: ${this.state.zip}`);
  }

  handleSelect(event){
    event.preventDefault();
    let radius = parseInt(event.target.value);
    this.setState({radius});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchEbEvents(this.state);
    //dispatch both actions here.
    // console.log(this.state);
    // console.log(this.state.date.getTime());
    this.props.fetchMeetups(this.state);
    this.setState({input: "", city: "", radius: "", startDate: null, endDate: null, zipcode: ""});
  }

  handleStartDate(event, date){
    this.setState({
      startDate: date,
    });
  }

  handleEndDate(event, date){
    this.setState({
      endDate: date,
    });
  }

  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>

            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="Search here"/>

            <input onChange={this.handleCity} value={this.state.city} type="text" placeholder="City" />

            <input onChange={this.handleZipcode} value={this.state.zipcode} type="number" placeholder="Zip Code"/>

            <select value={this.state.radius} onChange={this.handleSelect}>
              <option value="" disabled>Select Radius</option>
              <option value='5'>5 miles</option>
              <option value='10'>10 miles</option>
              <option value='25'>25 miles</option>
              <option value='50'>50 miles</option>
            </select>


            <input type="submit"/>
          </form>

          <MuiThemeProvider>
            <DatePicker
              hintText="Start Date Input"
              value={this.state.startDate}
              onChange={this.handleStartDate}
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <DatePicker
              hintText="End Date Input"
              value={this.state.endDate}
              onChange={this.handleEndDate}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Search;
