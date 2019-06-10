import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      currentView:'list',
      bucketLists: []
    }
    this.handleView = this.handleView.bind(this)
    this.fetchLists = this.fetchLists.bind(this)
    // this.sortLists = this.sortLists.bind(this)
    this.setLists = this.setLists.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
    // this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
=======
      listTasks: [],
      filtered: [],
      toggle: false,
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
    this.handleAnswer = this.handleAnswer.bind(this)
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

  // show and hide create form
  handleAnswer() {
    this.setState({
      toggle: !this.state.toggle
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
>>>>>>> adc333ed5cdcd57f4651f6aa181574ad13cf82ed
  }

  handleCreateList(List) {
    fetch('http://localhost:3000/Lists', {
      body:JSON.stringify(List),
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then( createdList => createdList.json())
      .then( jData => {
        this.updateArray(jData, 'bucketLists')
        this.handleView('list')
      })
      .catch( err => console.log('this is err', err))
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
  fetch('http://localhost:3000/tasks')
   .then( data => data.json())
   .then( jData => {
     console.log('this is jData', jData)
     this.grabLists(jData)
   })
}

grabLists(lists){

  let bucketLists = []

  bucketLists.push(list)

}


// run one time only lifecycle method...
componentDidMount() {
   this.fetchTasks()
}


  render () {
    return (
      <div className="main-container">
<<<<<<< HEAD
        <Header />
        <Form />
        <BucketList
          currentView={this.state.currentView}
          handleView={this.handleView}
          BucketLists={this.state.bucketLists}
          // completedLists={this.state.completedLists}
          // handleCheck={this.handleCheck}/>
=======
        <Header
          submit={this.handleSearch}
          title={this.state.title}
        />

        <Form
          handleCreateList={this.handleCreateList}
          show={this.state.toggle}
          toggle={this.handleAnswer}
        />
        <Lists
          currentView={this.state.currentView}
          handleView={this.handleView}
          BucketLists={this.state.bucketLists}
        />
>>>>>>> adc333ed5cdcd57f4651f6aa181574ad13cf82ed
      </div>
    );
  }
}

export default App;
