import React, { Component } from 'react'
import Lists from './Lists'

class TheList extends Component {
  render () {
    return (
      <div className="the-list">
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
      </div>
   )
  }
}



export default TheList;
