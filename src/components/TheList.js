import React, { Component } from 'react'

class TheList extends Component {
  render () {
    console.log(this.props.listTasks);
    return (
      <div className="the-list">
<<<<<<< HEAD
        { this.props.currentView === 'list'
           ? <div>
             {this.props.listTasks.map( (list, index) => {
               return (
                 <Lists
                   key={index}
                   list={list}
                   handleCheck={this.props.handleCheck}
                   arrayIndex={index}
                   currentArray='listTasks'
                 />
               )
             })}
             </div>
           : <div>
              {this.props.completedLists.map( (list, index) => {
                return (
                   <Lists
                     key={index}
                     list={list}
                     handleCheck={this.props.handleCheck}
                     arrayIndex={index}
                     currentArray='completedLists'
                   />
                 )
              })}
             </div>
         }
=======
        <h4>{this.props.list}</h4>
>>>>>>> 8ca4afe6387a321cbc497ceaadb9a7389302291c
      </div>
   )
  }
}



export default TheList;
