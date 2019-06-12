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
      <div>
        {this.props.list.map( (list, index) => {
          return (
            <div className="thelist" key={index}>
              <h4>{list.title}</h4>
              <h4>like: {list.likes}<button onClick={()=> this.props.handleCheck(list)}>&hearts;</button></h4>
              <h4>done: {list.done}<button onClick={this.donePlus}>done+</button></h4>
            </div>
        )
      })}
    </div>
   )
  }
}



export default TheList;
