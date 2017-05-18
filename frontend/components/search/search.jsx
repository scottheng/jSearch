import React, { Component } from 'react';


class Search extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      input: "",
      date: null,
      zipcode: null,
      radius: null
    };
  }

  handleChange(event){
    event.preventDefault();
    this.setState({input: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({input: ""});
    //dispatch both actions here.
  }

  handleSelect(event){
    event.preventDefault();
    this.setState({radius: event.target.value})
  }

  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.input} type="text" placeholder="Search here"/>

            <select onChange={this.handleSelect}>
              <option value=5>5 miles</option>
              <option value=10>10 miles</option>
              <option value=25>25 miles</option>
              <option value=50>50 miles</option>
            </select>

            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
