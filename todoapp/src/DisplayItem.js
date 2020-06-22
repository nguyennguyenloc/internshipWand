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
        var title = todo.title;

        return <li>
            <input
                checked={todo.done}
                // onChange={this.handleOnChange.bind(this)}
                onChange={this.props.handleDone.bind(null, title)}
                type="checkbox"
                style={{ fontSize: "x-large" }}
            />
            {title}
            <button className="but1" onClick={this.props.handleDelete.bind(null, title)} >
                Delete
            </button>
        </li>
    };
}