import React, { Component } from 'react'
// import Lists from './Lists'
class TheList extends Component {
  render () {
    return (
      <div className="thelist">
         <h4>title: {this.props.list[this.props.arrayIndex].title}</h4>
         <h4>{this.props.list[this.props.arrayIndex].imageURL}</h4>
         <h4>description: {this.props.list[this.props.arrayIndex].description}</h4>
         <h4>like: {this.props.list[this.props.arrayIndex].likes}</h4>
      </div>
   )
  }
}



export default TheList;
