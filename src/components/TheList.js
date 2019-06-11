import React, { Component } from 'react'
// import Lists from './Lists'
class TheList extends Component {
  render () {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="the-list">

        <h4>{this.props.list}</h4>
=======
=======
>>>>>>> 2f429b239e5fdb36bf59759339a15c9cd119fd72
      <div className="thelist">
         <h4>title: {this.props.list[this.props.arrayIndex].title}</h4>
         <h4>{this.props.list[this.props.arrayIndex].imageURL}</h4>
         <h4>description: {this.props.list[this.props.arrayIndex].description}</h4>
         <h4>like: {this.props.list[this.props.arrayIndex].likes}</h4>
<<<<<<< HEAD
>>>>>>> e003c6f0a5c48760cd72a8016957706f518c888c
=======
>>>>>>> 2f429b239e5fdb36bf59759339a15c9cd119fd72
      </div>
   )
  }
}



export default TheList;
