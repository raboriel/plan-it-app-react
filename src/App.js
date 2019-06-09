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
      filtered: [],
      likeCount: 0,
      doneCount: 0
    }
    // Add binds below
    this.handleView = this.handleView.bind(this)
    this.fetchLists = this.fetchLists.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    }

  // create a list from server
  handleCreateList(task) {
    // add server address later
    fetch('https://buckidea-api.herokuapp.com/', {
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
    fetch('https://buckidea-api.herokuapp.com/')
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

  //search bar
  onTitleName(title) {
    // will be added by Kim
  }

  handleSearch(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    let newList = [];
    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.listTasks;
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.listTasks;
    }
    this.setState({
      filtered: newList
    });
  }

  render () {
    return (
      <div className="main-container">
        <Header
          submit={this.handleSearch}
          title={this.state.title}
        />

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
