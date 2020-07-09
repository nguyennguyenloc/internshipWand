import React, { Component } from 'react';
import AddTodo from './AddToDo';
class TodoList extends Component {
    state = {
        todos: [
            { id: '1', title: 'Push your code to github', status: 'Done' },
            { id: '2', title: 'Email to your manager', status: "Pending" }
        ]
    };
    deleteToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.id !== todo.id);
        this.setState({
            todos: filteredItems
        });
    };
    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    editToDo = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === x.id) {
                    return {
                        ...todo,
                        status: todo.status === "Done" ? "Pending" : "Done"
                    };
                }
                else {
                    return todo;
                }
            })
        }))
    }
    render() {
        return (
            <div>
                <AddTodo onAdd={this.addToDo}></AddTodo>
                <h1>TodoList</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.title}</td>
                                    <td style={{ color: x.status === "Done" ? "green" : "red" }}>{x.status}</td>
                                    <td>
                                        <button onClick={() => this.deleteToDo(x)}>
                                            Delete
                                        </button>
                                        <button onClick={() => this.editToDo(x)}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    };
}
export default TodoList;