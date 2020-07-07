import React, { Component } from 'react';
import './App.css';
import TodoItems from './Component/TodoItems';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Tiêu đề", isComplete: true },
      { title: "Tiêu đề 1", isComplete: false },
      { title: "Tiêu đề 2", isComplete: false },
      { title: "Tiêu đề 3", isComplete: true }
    ]
  }
  onItemClick() {
    this.props.item = !this.props.item
  }
  render() {
    if (this.todoItems.length > 0) {
      return (
        <div className="App" >
          {this.todoItems.map((item, index) =>
            <TodoItems key={index} item={item} onClick={this.onItemClick} />)}
        </div>
      );
    } else {
      return (<div className="App" >
        "Nothing"
      </div>);
    }
    // return (
    //   <div>
    //     {this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItems key={index} item={item} />)}
    //     {this.todoItems.length === 0 && 'Nothing here'}
    //   </div>
    // );
  }
}
export default App;
