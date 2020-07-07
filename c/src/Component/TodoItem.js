import React, { Component } from 'react';
import './TodoItem.css';
class TodoItems extends Component {

    render() {
        let className = "todoItem";
        const { item } = this.props;
        if (item.isComplete) {
            className += " todoItem-done"
        }
        return (
            <div className={className}>
                <h1>{this.props.item.title}</h1>
            </div>
        )
    };

}
export default TodoItems;