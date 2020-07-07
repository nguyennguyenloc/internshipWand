import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  addItem = (taskName) => {
    const newTask = {
      text: taskName,
      key: Date.now()
    }
    if (taskName !== null && taskName !== '') {
      const items = [...this.state.items, newTask]
      this.setState({
        items
      })
    }
  }
  render() {
    return (
      <div>
        <TodoList addItem={this.addItem} />
        <TodoItem entries={this.state.items} />
      </div>
    )
  };
}

export default App;
