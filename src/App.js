import React from 'react';
import Header from './components/header/Header';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Header />
    );
  }
}

export default App;
