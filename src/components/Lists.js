import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
      <div className="list">
        < TheList
        listTasks={this.props.listTasks}
        />
      </div>
        )
      }
    }


export default Lists;
