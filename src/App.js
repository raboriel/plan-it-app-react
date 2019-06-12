import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTasks: [],
      toggle: false,
    }
    // Add binds below
    this.fetchLists = this.fetchLists.bind(this)
    this.setLists = this.setLists.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    // this.handleEdit = this.handleEdit.bind(this)
    }

  // create a list from server


  // edit
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

  //get data from server
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
  handleDelete(list, arrayIndex, currentArray){
    fetch('https://bucket-lister-api.herokuapp.com/lists/' + list.id, {
      body:JSON.stringify(list),
      method:'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( updatedList => updatedList.json())
    .then(jData => {
      this.fetchLists()
    })
    .catch(err => console.log('this is error from handleDelete', err))
  }


  //update database
  handleCheck(list, arrayIndex, currentArray){
    list.likes = list.likes + 1
    fetch('https://bucket-lister-api.herokuapp.com/lists/' + list.id, {
      body:JSON.stringify(list),
      method:'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( updatedList => updatedList.json())
    .then(jData => {
      this.fetchLists()
    })
    .catch(err => console.log('this is error from handleCheck', err))
  }


  removeFromArray(array, arrayIndex){
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
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

  //count likes +1
  likePlus() {
    this.setState({
      likes: this.state.likes + 1
    })
  }


  render () {
    console.log(this.state.listTasks);
    return (
      <div className="main-container">
        <Header
          title={this.state.title}
          listTasks={this.state.listTasks}
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
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
