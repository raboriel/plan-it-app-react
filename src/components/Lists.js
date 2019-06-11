import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div>
      {this.props.listTasks.map( (list, index) => {
        console.log('in lists',list);
        return (
          <TheList
            key={index}
            list={list}
            arrayIndex={index}
          />
        )
      })}
=======

      <div className="list">
        < TheList
        listTasks={this.props.listTasks}
        />
>>>>>>> cab4f534aa91cee8982ce2f2d4f50bf003bdca0c
      </div>
      )
    }
  }


export default Lists;
