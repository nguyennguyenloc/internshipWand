import React from 'react';

export default class DisplayItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { done: false };
    // }
    // handleOnChange(event) {
    //     var _done = !this.state.done;
    //     this.setState({ done: _done });
    // }
    // handleDone(event) {
    //     var _done = !this.state.done;
    //     this.setState({ done: _done });
    // }
    render() {
        var todo = this.props.todo;
        // var title = todo.title;

        return <li>
            <input
                checked={todo.done}
                // onChange={this.handleOnChange.bind(this)}
                onChange={this.props.handleDone.bind(null, todo.id)}
                type="checkbox"
                style={{ fontSize: "x-large" }}
            />
            {todo.title}
            <button className="but1" onClick={this.props.handleDelete.bind(null, todo.id)} >
                Delete
            </button>
        </li>
    };
}