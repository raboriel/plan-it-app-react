import React, { Component } from 'react'
// import TheList from './TheList'

class Lists extends Component {
  render () {
    return (
      <div className="list">
            <div className="list-item">{this.props.lists.lists_title}</div>
            <div className="list-actions">
              {this.props.lists.isComplete
                ? <i
                  className="incomplete far fa-check-square"
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
        )
      }
    }


export default Lists;
