import React, { Component } from 'react'
// import Lists from './Lists'
class TheList extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div className="thelist">
         <h4>title: {this.props.list[this.props.arrayIndex].title}</h4>
         <h4>{this.props.list[this.props.arrayIndex].imageURL}</h4>
         <h4>description: {this.props.list[this.props.arrayIndex].description}</h4>
         <h4>like: {this.props.list[this.props.arrayIndex].likes}</h4>
=======
      <div className="the-list">

        <h4>{this.props.list}</h4>
>>>>>>> cab4f534aa91cee8982ce2f2d4f50bf003bdca0c
      </div>
   )
  }
}



export default TheList;
