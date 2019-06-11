import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
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
      </div>
        )
      }
    }


export default Lists;
