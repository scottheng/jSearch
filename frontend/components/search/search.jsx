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
    this.setState({input: e.target.value});
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
      <div className="splash-search-outer-container">
        <div className="splash-logo">
          <h1>M</h1>
          <h4>MEETARII</h4>
        </div>

        <div className="splash-search-inner-container">
          <form className="splash-search-form" onSubmit={this.handleSubmit}>

            <div className="splash-search-input-container">
            <input className="splash-search-input" onChange={this.handleInput} value={this.state.input} type="text" placeholder="Search here"/>
            </div>

            <div className="splash-input-container">

              <input className="splash-input-city" onChange={this.handleCity} value={this.state.city} type="text" placeholder="City" />

              <input className="splash-input-zipcode" onChange={this.handleZipcode} value={this.state.zipcode} type="number" placeholder="Zip Code"/>

              <select className="splash-input-radius" value={this.state.radius} onChange={this.handleSelect}>
                <option value="" disabled>Select Radius</option>
                <option value='5'>5 miles</option>
                <option value='10'>10 miles</option>
                <option value='25'>25 miles</option>
                <option value='50'>50 miles</option>
              </select>
            </div>

            <div className="splash-date-picker-container">

              <MuiThemeProvider>
                <DatePicker
                  className="splash-date-picker"
                  hintText="Start Date Input"
                  value={this.state.startDate}
                  onChange={this.handleStartDate}
                />
              </MuiThemeProvider>
              <MuiThemeProvider>
                <DatePicker
                  className="splash-date-picker"
                  hintText="End Date Input"
                  value={this.state.endDate}
                  onChange={this.handleEndDate}
                />
              </MuiThemeProvider>
            </div>

            <div className="splash-input-submit-container">
              <input className="splash-input-submit" type="submit"/>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default Search;
