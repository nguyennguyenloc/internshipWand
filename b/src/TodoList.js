import React, { Component } from 'react'
class TodoList extends Component {
    handleInput = e => {
        e.preventDefault()
        const taskName = this.refs.taskInput.value
        this.props.addItem(taskName)

        this.refs.taskInput.value = ''
        this.refs.taskInput.focus()
    }

    render() {
        return (
            <form onSubmit={this.handleInput}>
                <input placeholder="Task" ref="taskInput" type="text" />
                <button type="submit">Add List</button>
            </form >
        );
    }
}
export default TodoList;