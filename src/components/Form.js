import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_item: ''
    }
  }
  // submit form
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateTask(this.state)
    this.clearForm()
  }

  //
  handleChange = (e) => {
    this.setState({task_item: e.target.value})
  }

  // clear the placeholder after submit
  clearForm = () => {
    this.setState({ task_item: '' })
  }

  render () {
    return (
      <div className="form">
       this is the form component
      </div>

    )
  }
}


export default Form;
