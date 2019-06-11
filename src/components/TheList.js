import React, { Component } from 'react'
// import Lists from './Lists'
class TheList extends Component {
  constructor(props){
    super(props)
    this.state ={
      likes: 0,
      done: 0
    }
    this.likePlus = this.likePlus.bind(this)
    this.donePlus = this.donePlus.bind(this)
  }

  likePlus() {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  donePlus() {
    this.setState({
      done: this.state.done + 1
    })
  }

  render () {
    return (
      <div className="thelist">
        <h4>{this.props.list[0].title}</h4>
        <h4>like: {this.state.likes}<button onClick={this.likePlus}>like+</button></h4>
        <h4>done: {this.state.done}<button onClick={this.donePlus}>done+</button></h4>
      </div>
   )
  }
}



export default TheList;
