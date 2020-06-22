import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import DisplayList from './DisplayList';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: [
        { title: "mot", done: false },
        { title: "hai", done: false },
        { title: "ba", done: false }
      ]
    };
  }
  handleDone(titleToBeMarkedAsDone) {
    console.log(titleToBeMarkedAsDone + "Wants ti be marks as done");
    var _todo = this.state.todos;
    var todo = _todo.filter((todo) => {
      return todo.title === titleToBeMarkedAsDone;
    })[0];

    todo.done = !todo.done;
    this.setState({ todos: _todo });
  }
  handleDelete(titleToBeDelete) {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.title !== titleToBeDelete
    });
    this.setState({ todos: newTodos });
  }
  handleSubmit(event) {
    event.preventDefault();
    var title = this.state.title;
    var newTodos = this.state.todos.concat({ title: title, done: false });
    // console.log("form was submit", title);
    this.setState({ title: '', todos: newTodos });
  }
  handleChange(event) {
    var title = event.target.value;
    // console.log(title);
    this.setState({ title: title });
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
        <p>Number of total tasks done:
        {/* {this.state.items.filter((title) => { title.done }).length} */}
          {this.state.todos.filter((todo) => { return todo.done }).length}
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