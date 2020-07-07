import React, { Component } from 'react'
import TodoList from './Todolist'
import TodoItems from './TodoItems'
class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <TodoItems />
      </div>
    )
  }
}
export default App