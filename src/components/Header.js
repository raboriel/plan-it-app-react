import React, { Component } from 'react'

class Header extends Component {

  state= { title: ''}

  searchChange = (event) => {
    //get whats being typed into the input
    this.setState({title: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    //Function passed in from app
    this.props.submit(this.state.title);
    //clear input field
    this.setState({title: ''});
  }


  render () {
    return (
      <div className="header">
          <h1>Buckidea</h1>
          <form onSubmit={this.onFormSubmit}>
             <input className="form-input" type="Text" value={this.state.title} placeholder="Search the Bucket List" onChange={this.searchChange} />
         </form>

      </div>
    )
  }
}


export default Header;
