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
<<<<<<< HEAD
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
=======
      <div className="listContainer">
        {this.props.list.map( (list, index) => {
          return (
            <div className="thelist" key={index}>
              <h3>{list.title}</h3>
              <img src={list.image} alt=""/>
              <p>{list.description}</p>
              <h4><button onClick={()=> this.props.handleCheck(list)}><span>&hearts;</span></button>{list.likes}</h4>
            </div>
        )
      })}
    </div>
>>>>>>> ff9d5900e8c47b11225e08d8afdce766b5013d83
   )
  }
}



export default TheList;
