import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="list">
        < TheList
        listTasks={this.props.listTasks}
        />
=======
=======
>>>>>>> 2f429b239e5fdb36bf59759339a15c9cd119fd72
      <div>
      {this.props.listTasks.map( (list, index) => {
        return (
          <TheList
            key={index}
            list={list}
            arrayIndex={index}
            handleCheck={this.props.handleCheck}
          />
        )
      })}
<<<<<<< HEAD
>>>>>>> e003c6f0a5c48760cd72a8016957706f518c888c
=======
>>>>>>> 2f429b239e5fdb36bf59759339a15c9cd119fd72
      </div>
      )
    }
  }


export default Lists;
