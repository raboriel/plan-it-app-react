import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
<<<<<<< HEAD

      <div className="list">
        < TheList
        listTasks={this.props.listTasks}
        />
=======
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
>>>>>>> e003c6f0a5c48760cd72a8016957706f518c888c
      </div>
      )
    }
  }


export default Lists;
