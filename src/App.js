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
    this.handleView = this.handleView.bind(this)
    this.fetchLists = this.fetchLists.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)  }

  // create a list from server
  handleCreateList(task) {
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

    // updateArray( {list_item: 'newsomething'}, 'bucketLists')
  updateArray(list,array){
    this.setState( prevState => ({
      [array]:[...prevState[array],list]
    }))
  }


  removeFromArray(array, arrayIndex){
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
    // this.setState( prevState => ({
    //   [array]: [...prevState[array].splice(arrayIndex, 1)]
    // }))
  }

  handleView(view) {
    // updating state causes a render
    this.setState({
      currentView: view
    })
  }

  fetchLists() {

    fetch('heroku server address here')
    // http://herokuaddress/bucketlists
     .then( data => data.json())
     .then( jData => {
       console.log('this is jData', jData)
       this.grabLists(jData)
     })
  }

  grabLists(lists){

    let bucketLists = []

    bucketLists.push(lists)

  }


  // run one time only lifecycle method...
  componentDidMount() {
     this.fetchLists()
  }

  render () {
    return (
      <div className="main-container">
        <Header />

        <Form
          handleCreateList={this.handleCreateList}
        />
        <Lists
          currentView={this.state.currentView}
          handleView={this.handleView}
          BucketLists={this.state.bucketLists}
        />
      </div>
    );
  }
}

export default App;
