import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      image: '',
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
       image: '',
       description: ''
     })
  }

  render () {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <h2 onClick={this.props.toggle} >Click to Add Your Bucket List</h2>
        {this.props.show ?
          <form>
           <input type='text'
           className="add_form"
           placeholder="Title"
           id='title'
           onChange={this.handleChange}
           value={this.state.title}
           />
           <input type='text'
           className="add_form"
           placeholder="Image URL"
           id='image'
           onChange={this.handleChange}
           value={this.state.image}
           />
           <input type='text'
           className="add_form"
           placeholder="Description"
           id='description'
           onChange={this.handleChange}
           value={this.state.description}
           />
           <button type="submit" className="submit-button">Add List</button>
          </form>
          : ''}

      </div>

    )
  }
}


export default Form;
