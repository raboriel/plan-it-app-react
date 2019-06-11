import React, { Component } from 'react'
import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div className="lists">
            <div className="list">{this.props.list.lists_title}</div>
            <div className="list>
              {this.props.lists.isComplete ? <i className="incomplete far fa-check-square"
                  onClick={() => {this.props.handleCheck(this.props.list, this.props.arrayIndex, this.props.currentArray)}}
                  ></i>
                : <i
                  className="complete far fa-square"
                  onClick={() => {this.props.handleCheck(this.props.list, this.props.arrayIndex, this.props.currentArray)}}
                  ></i>
              }
              <i className="delete far fa-trash-alt"></i>
            </div>
          </div>
=======
      <div className="list">
        < TheList
        listTasks={this.props.listTasks}
        />
      </div>
>>>>>>> 8ca4afe6387a321cbc497ceaadb9a7389302291c
        )
      }
    }


export default Lists;
