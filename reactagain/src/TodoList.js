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
            <div>
                <form onSubmit={this.handleInput}>
                    <input type="text" placeholder="Task" ref="taskInput" />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    };
}
export default TodoList