import React, { Component } from 'react'

class Header extends Component {

  state= {
    title: '',
    filterValue: '',
    listsToDisplay: this.props.listTasks,
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

  //search
  handleFilterChange(event) {
  event.preventDefault();
  const filterValue = event.target.value;
  this.setState((prevState, props) => {
    // remove fruits that don't contain the filter value
    const filteredList = props.listTasks.filter(list =>
      list.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
    // perform the opposite logic to create a list of fruits that don't match.
    console.log(filteredList);
    return {
      listsToDisplay: filteredList,
      filterValue,
      };
    })
  }

  render () {
    return (
      <div className="header">
          <h1>Buckidea</h1>
          <form>
             <input className="form-input" type="Text" value={this.props.value} placeholder="Search the Bucket List" onChange={this.props.onChange} />
         </form>
      </div>
    )
  }
}




export default Header;
