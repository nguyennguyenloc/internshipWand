import React, { Component } from 'react';
import './App.css';
import TodoItems from './Component/TodoItem';
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Hihi", isComplete: true },
      { title: "Haha", isComplete: false },
      { title: "Hehe", isComplete: false },
      { title: "Hoho", isComplete: true },
    ]
  }
  render() {
    return (
      <div className="App" >
        {this.todoItems.length > 0 && this.todoItems.map((item) => <TodoItems item={item} />)}
        {this.todoItems.length === 0 && " Nothing here "}
      </div>
    );
  }
}
export default App;
