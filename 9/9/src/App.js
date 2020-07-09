import React, { Component } from 'react';
import './App.css';
import Menu from './Component/Menu';
import List from './Component/List';

class App extends Component {
  render() {
    return (
      <div className=" section">
        <Menu />
        <List />
      </div>
    );
  }
}
export default App;
