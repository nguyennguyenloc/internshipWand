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
    if (this.todoItems.length) {
      return (
        <div>
          {this.todoItems.map((item) =>
            <TodoItems item={item} />)}
        </div>
      );
    } else {
      return (
        <div>
          Nothing Else
        </div>
      );
    }
  }
}
export default App;
