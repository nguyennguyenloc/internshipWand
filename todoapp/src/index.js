import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import DisplayList from './DisplayList';

var rand = require('random-key');
class TodoList extends React.Component {
  // constructor(props) {
  //   super(props);
  constructor() {
    super();
    this.state = {
      title: '',
      todos: [
        { title: "mot", done: false, id: 1 },
        { title: "hai", done: false, id: 2 },
        { title: "ba", done: false, id: 3 }
      ]
    };
  }
  handleDone(idToBeMarkedAsDone) {
    var _todo = this.state.todos;
    var todo = _todo.filter((todo) => {
      return todo.id === idToBeMarkedAsDone;
    })[0];

    todo.done = !todo.done;
    this.setState({ todos: _todo });
  }
  handleDelete(idToBeDelete) {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.id !== idToBeDelete
    });
    this.setState({ todos: newTodos });
  }
  handleSubmit(event) {
    event.preventDefault();
    var title = this.state.title;
    var newTodos = this.state.todos.concat({
      title: title,
      id: rand.generate(),
      done: false
    });
    // console.log("form was submit", title);
    this.setState({ title: '', todos: newTodos });
  }
  handleChange(event) {
    var title = event.target.value;
    // console.log(title);
    this.setState({ title: title });
  }
  handleClearCompleted(event) {
    var newTodos = this.state.todos.filter((todo) => { return !todo.done });
    this.setState({ todos: newTodos });
  }
  render() {
    return (
      <div>
        <h1 className="titleTodo">To do list</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} value={this.state.title} />
          <button className="but">AddList</button>
        </form>
        {/* <p>{this.state.items.toString()}</p> */}
        <p>Number of total tasks:
           {this.state.todos.length}
        </p>
        <p>
          Number of total tasks Completed:
        {/* {this.state.items.filter((title) => { title.done }).length} */}
          {this.state.todos.filter((todo) => { return todo.done }).length}
        </p>
        <p> Number of total tasks Pending:
          {this.state.todos.filter((todo) => { return !todo.done }).length}
        </p>
        <p>
          <button onClick={this.handleClearCompleted.bind(this)}>Clear Completed</button>
        </p>
        <DisplayList
          handleDone={this.handleDone.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));