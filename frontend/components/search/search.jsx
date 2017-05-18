import React, { Component } from 'react';


class Search extends Component{
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      input: "",
      date: "",
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

  handleZipcode(e){
    e.preventDefault();
    // console.log(e.target.value)
    let zipcode = e.target.value;
    console.log(`before: ${this.state.zipcode}`);
    if(zipcode.length <= 5 ){
      this.setState({zipcode});
    }
    console.log(`after: ${this.state.zip}`);
  }

  handleSelect(event){
    event.preventDefault();
    let radius = parseInt(event.target.value);
    this.setState({radius});
  }

  handleSubmit(event){
    event.preventDefault();
    //dispatch both actions here.
    console.log(this.state);
    this.setState({input: "", radius: "", date: "", zipcode: ""});
  }

  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>

            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="Search here"/>

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
        </div>
      </div>
    );
  }
}

export default Search;
