import React, { Component } from 'react'
// import Lists from './Lists'
class TheList extends Component {
  render () {
    console.log(this.props.listTasks);
    return (
      <div className="the-list">

        <h4>{this.props.list}</h4>
      </div>
   )
  }
}



export default TheList;
