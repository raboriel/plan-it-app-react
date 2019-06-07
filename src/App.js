import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render () {
    return (
      <div className="main-container">
        <Header />
        <Form />
        <Lists />
      </div>
    );
  }
}

export default App;
