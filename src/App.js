import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        <Header />
        <Form />
        <BucketList
          currentView={this.state.currentView}
          handleView={this.handleView}
          BucketLists={this.state.bucketLists}
          // completedLists={this.state.completedLists}
          // handleCheck={this.handleCheck}/>
      </div>
    );
  }
}

export default App;
