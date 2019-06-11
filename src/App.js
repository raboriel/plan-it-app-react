import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'list',
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
    this.sortLists = this.sortLists.bind(this)
    this.setLists = this.setLists.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    }

  // create a list from server
  handleCreateList(list) {
    // add server address later
    // should this be 'http://localhost:3000/lists',
//https://buckidea-api.herokuapp.com/
    fetch('https://bucket-lister-api.herokuapp.com/lists', {
      body: JSON.stringify(list),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( createdList => createdList.json())
    .then(jData => {
      this.updateArray(jData, 'listTasks')
      this.handleView('list')

    })
    .catch(err => console.log(err))
  }


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
    fetch('https://bucket-lister-api.herokuapp.com/lists')
    // http://herokuaddress/bucketlists
    // should this be 'http://localhost:3000/lists'
    //https://buckidea-api.herokuapp.com/
     .then( data => data.json())
     .then( jData => {
       console.log('this is jData', jData)
       this.sortLists(jData)
     })
  }

  sortLists(lists){
   let completedLists = []
   let todoLists = []
   // if it's a single param then you don't need the parens - task
   // it there are 2 params then yes...( task, index )
   lists.forEach( list => {
     if(list.completed) {
       completedLists.push(list)
     } else {
       todoLists.push(list)
     }
   })
   this.setLists(completedLists, todoLists)
 }

 setLists(completed,list){
   this.setState({
     completedLists: completed,
     todoList: list
   })
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
          show={this.state.toggle}
          toggle={this.handleAnswer}
        />
        <Lists
          currentView={this.state.currentView}
          handleView={this.handleView}
          listTasks={this.state.listTasks}
        />
      </div>
    );
  }
}

export default App;
