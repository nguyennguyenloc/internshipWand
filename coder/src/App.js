import React, { Component } from 'react';
import './App.css';
import TodoItems from './Component/TodoItems';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Tiêu đề", isComplete: true },
        { title: "Tiêu đề 1", isComplete: false },
        { title: "Tiêu đề 2", isComplete: false },
        { title: "Tiêu đề 3", isComplete: true },
        { title: "Tiêu đề 7", isComplete: true },
        { title: "Tiêu đề 4", isComplete: true },
        { title: "Tiêu đề 5", isComplete: false }
      ]
    }
  }
  onItemClick(item) {
    // this.props.item = !this.props.item
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  render() {
    const { todoItems } = this.state;
    if (todoItems.length) {
      return (
        <div className="App" >
          {todoItems.length && todoItems.map((item, index) =>
            <TodoItems
              key={index}
              item={item}
              onClick={this.onItemClick(item)} />
          )
          }
        </div>
      );
    } else {
      return (
        <div className="App" >
          "Nothing"
        </div>);
    }
  }
}
export default App;
