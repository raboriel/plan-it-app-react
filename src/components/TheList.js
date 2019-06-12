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
      <div className="listContainer">
        {this.props.list.map( (list, index) => {
          return (
            <div className="thelist" key={index}>
              <h3>{list.title}</h3>
              <img src={list.image} alt=""/>
              <p>{list.description}</p>
              <h4><button onClick={()=> this.props.handleCheck(list)}><span>&hearts;</span></button>{list.likes}</h4>
              <button onClick={()=>
              this.props.handleDelete(list)}>Delete</button>
            </div>
        )
      })}
    </div>
   )
  }
}
//
// // button attempt
//   render () {
//     return (
//       <div className="listContainer">
//         {this.props.list.map( (list) => {
//           return (
//             <div className="thelist" key={list.id}>
//               <h3>{list.title}</h3>
//               <img src={list.image} alt=""/>
//               <p>{list.description}</p>
//               <h4><button onClick={()=> this.props.handleCheck(list)}><span>&hearts;</span></button>{list.likes}</h4>
//               <button onClick={this.handleDelete(id)}>Delete</button>
//             </div>
//         )
//       })}
//     </div>
//    )
//   }
//   }




















export default TheList;
