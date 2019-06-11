import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'list',
      listTasks: [],
      filtered: [],
      toggle: false,
    }
    // Add binds below
    this.handleView = this.handleView.bind(this)
    this.fetchLists = this.fetchLists.bind(this)
    // this.sortTasks = this.sortTasks.bind(this)
    // this.updateArray = this.updateArray.bind(this)
    this.setLists = this.setLists.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    }

  // create a list from server
  handleCreateList(list) {
    fetch('https://bucket-lister-api.herokuapp.com/lists', {
      body: JSON.stringify(list),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdLists => {
      return createdLists.json()
    })
    .then(jData => {
      this.fetchLists()
    })
    .catch(err => console.log(err))
  }

  fetchLists() {
    let listArr = []
    fetch('https://bucket-lister-api.herokuapp.com/lists')
    .then(data => data.json())
    .then(jData => {
      console.log('this is jData', jData);
      listArr.push(jData)
      this.setLists(listArr)
    })
  }

  // sortTasks(tasks){
  //   let listTasks = []
  //   listTasks.push(tasks)
  //   this.setLists(listTasks)
  //   console.log('in sortTasks', listTasks);
  // }

  // updateArray(array){
  //   this.setState( prevState => ({
  //     [array]:[...prevState[array]]
  //   }))
  // }


  // handleCheck(list, arrayIndex, currentArray){
  //   // this toggles the completed value
  //   list.isComplete = !list.isComplete
  //   // now we make our fetch call to PUT (update)
  //   fetch('https://bucket-lister-api.herokuapp.com/lists/' + list.id, {
  //     body:JSON.stringify(list),
  //     method:'PUT',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then( updatedList => updatedList.json())
  //   .then(jData => {
  //     this.removeFromArray(currentArray, arrayIndex)
  //     if(currentArray === 'listTasks') {
  //       this.updateArray(jData, 'completedLists')
  //     } else {
  //       this.updateArray(jData, 'listTasks')
  //     }
  //   })
  //   .catch(err => console.log('this is error from handleCheck', err))
  // }

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


 setLists(list){
   console.log('this is setlists', list);
   this.setState({
     listTasks: list
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
    console.log(this.state.listTasks);
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
