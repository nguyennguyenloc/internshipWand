import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import DisplayList from './DisplayList';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: ["mot", "hai", "ba"]
    };
  }
  handleDelete(itemToBeDelete) {
    var newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDelete
    });
    this.setState({ items: newItems });
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
        <h1 className="titleTodo">To do list</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} value={this.state.text} />
          <button className="but">AddList</button>
        </form>
        {/* <p>{this.state.items.toString()}</p> */}
        <DisplayList
          handleDelete={this.handleDelete.bind(this)}
          items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));