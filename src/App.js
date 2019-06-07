import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTasks: [],
      likeCount: 0,
      doneCount: 0
    }
    // Add binds below
    this.handleCreateTask = this.handleCreateTask.bind(this)
  }

  // create a list from server
  handleCreateTask(task) {
    // add server address later
    fetch('heroku server address here', {
      body: JSON.stringify(task),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdTask => {
      return createdTask.json()
    })
    .then(jData => {
      this.fetchTasks()
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="main-container">
        <Header />

        <Form
          handleCreateTask={this.handleCreateTask}
        />
        <Lists />
      </div>
    );
  }
}

export default App;
