import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      imageURL: '',
      description: ''
    }
  }
  // submit form
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateList(this.state)
    this.clearForm()
  }

  // store input title value to state
  handleChange = (event) => {
    this.setState({
      // [event.target.id] Identifier which placeholder should be used
      [event.target.id]: event.target.value
    })
    // console.log(event.target.id);
  }

  // clear the placeholder after submit
  clearForm = () => {
    this.setState({
       title: '',
       imageURL: '',
       description: ''
     })
  }

  render () {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <form>
          Title:
         <input type='text'
         placeholder="Title"
         id='title'
         onChange={this.handleChange}
         value={this.state.title}
         />
          Image URL:
         <input type='text'
         placeholder="Image URL"
         id='imageURL'
         onChange={this.handleChange}
         value={this.state.imageURL}
         />
          Description:
         <input type='text'
         placeholder="Description"
         id='description'
         onChange={this.handleChange}
         value={this.state.description}
         />
         <button type="submit" className="submit-button">Add List</button>
        </form>
      </div>

    )
  }
}


export default Form;
