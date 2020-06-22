import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    var text = this.state.text;
    var newItems = this.state.items.concat(text);
    // console.log("form was submit", text);
    this.setState({ text: '', items: newItems });
  }
  handleChange(event) {
    var text = event.target.value;
    // console.log(text);
    this.setState({ text: text });
  }
  render() {
    return (
      <div>
        <p>To Do List</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} value={this.state.text} />
          <button>Submit</button>
        </form>
        <p>{this.state.items.toString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));