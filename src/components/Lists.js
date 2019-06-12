import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
      <div>
      {this.props.listTasks.map( (list, index) => {
        return (
          <TheList
            key={index}
            list={list}
            arrayIndex={index}
            handleCheck={this.props.handleCheck}
            handleDelete={this.props.handleDelete}
          />
        )
      })}
      </div>
      )
    }
  }



// // button changes
//
//   class Lists extends Component {
//     render () {
//       return (
//         <div>
//         {this.props.listTasks.map( (list, index) => {
//           return (
//             <TheList
//               key={index}
//               list={list}
//               arrayIndex={index}
//               handleCheck={this.props.handleCheck}
//             />
//           )
//         })}
//         </div>
//         )
//       }
//     }













export default Lists;
