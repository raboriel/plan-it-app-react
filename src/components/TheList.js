import React, { Component } from 'react'
// import Lists from './Lists'
class TheList extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render () {
    return (
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
   )
  }
}


export default TheList;
