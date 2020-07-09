import React, { Component } from 'react';
import AddToDo from './AddToDo';
class ToDoList extends Component {
    state = {
        todos: [
            { id: 1, title: "A", status: "Done" },
            { id: 2, title: "B", status: "Pending" }
        ],
        showAdd: false,
        editMode: false
    }

    deleteToDo = (todo) => {
        const filtereditems = this.state.todos.filter(x => x.id !== todo.id);
        this.setState({
            todos: filtereditems
        })
    }
    editToDo = (x) => {
        this.setState({ editMode: true, editItem: x })
    }
    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    render() {
        return (
            <div>
                {this.state.showAdd && <AddToDo onAdd={this.addTodo}></AddToDo>}
                <button onClick={() => this.setState({ showAdd: !this.state.showAdd })}>Toggle add</button>
                <h1>Todo</h1>
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
                                    <td>{this.state.editItem && (this.state.editItem.id === x.id) && (<input value={x.title}></input> || x.title)})</td>
                                    <td style={{ color: x.status === "Done" ? "Green" : "Red" }}>{x.status}</td>
                                    <td>
                                        <button onClick={() => { this.deleteToDo(x) }}>Delete</button>
                                        <button onClick={() => { this.editToDo(x) }}>{this.state.editItem && (this.state.editItem.id === x.id) && ("Hủy" || "Sửa")}</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    };
}
export default ToDoList;
