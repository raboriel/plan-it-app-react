import React, { Component } from 'react'

class Header extends Component {

  state= {
    title: '',
  }

  searchChange = (e) => {
    //get whats being typed into the input
    this.setState({title: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    //Function passed in from app
    this.props.submit(this.state.title);
    //clear input field
    this.setState({title: ''});
  }

  render () {
    return (
      <div className="header">
          <h1>Buckidea</h1>
          <form onSubmit={this.handleSearch}>
             <input className="form-input" type="Text" value={this.state.title} placeholder="Search the Bucket List" onChange={this.searchChange} />
         </form>

      </div>
    )
  }
}


export default Header;
