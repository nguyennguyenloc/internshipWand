import React from 'react';

export default class DisplayItem extends React.Component {
    constructor() {
        super();
        this.state = { done: false };
    }
    // handleOnChange(event) {
    //     var _done = !this.state.done;
    //     this.setState({ done: _done });
    // }
    handleDone(event) {
        var _done = !this.state.done;
        this.setState({ done: _done });
    }
    render() {
        var title = this.props.title;

        return <li>
            <input
                checked={this.state.done}
                // onChange={this.handleOnChange.bind(this)}
                onChange={this.handleDone.bind(this)}
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