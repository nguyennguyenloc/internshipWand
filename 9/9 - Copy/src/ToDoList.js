import React, { Component } from 'react';
import AddToDo from './AddToDo';
import TodoItems from './Component/TodoItems';

class ToDoList extends Component {
    state = {
        todos: [
            { title: "Go for a walk", status: false },
            { title: "Drink", status: false },
            { title: "Do something else", status: true },
            { title: "Test raname task", status: false },
            { title: "Go to bed", status: true }
        ],
        showAdd: false,
        editMode: false,
        showList: false
    }
    // source khi chuyển delete sang item
    // deleteToDo = (todo) => {
    //     const filtereditems = this.state.todos.filter(x => x.title !== todo.title);
    //     this.setState({
    //         todos: filtereditems
    //     })
    // }
    //1
    // editToDo = (x) => {
    //     this.setState({ editMode: true, editItem: x })
    // }
    //2

    // editToDo = (x) => {
    //     this.setState(state => ({
    //         todos: state.todos.map(todo => {
    //             if (todo.title === x.title) {
    //                 return {
    //                     ...todo,
    //                     status: todo.status === true ? false : true
    //                 };
    //             }
    //             else {
    //                 return todo;
    //             }
    //         })
    //     }))
    // }

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    //đóng form
    closeListt = () => {
        this.setState({
            showAdd: false,
            showList: false
        })
    }
    //Thêm

    onItemClick(item) {
        // this.props.item = !this.props.item
        return (event) => {
            const status = item.status;
            const { todos } = this.state;
            const index = todos.indexOf(item);
            this.setState({
                todos: [
                    ...todos.slice(0, index),
                    {
                        ...item,
                        status: !status
                    },
                    ...todos.slice(index + 1)
                ]
            })
        }
    }
    render() {
        const { todos } = this.state;
        if (todos.length) {
            return (
                <div>
                    <br />
                    {/* ShowFormAdd */}
                    {this.state.showAdd && <AddToDo onAdd={this.addTodo} ></AddToDo>}
                    <div className="todolist-add">
                        <button onClick={this.closeListt}>Cancel</button>
                        <button onClick={this.closeListt}><i class="fas fa-home"></i></button>
                        <div className="todolist-add1">Life Cycle</div>
                        <div className="todolist-add1" onClick={() => this.setState({ showAdd: !this.state.showAdd })}><i class="fas fa-plus"></i></div>
                        <div className="todolist-add1" onClick={() => this.setState({ showList: !this.state.showList })}><i class="fas fa-list-ul"></i></div>
                    </div>
                    {/* ShowListAdd */}
                    {
                        this.state.showList &&
                        todos.length && todos.map((item, index) =>
                            <TodoItems
                                key={index}
                                item={item}
                                onClick={this.onItemClick(item)}
                            />
                        )
                    }

                    <br />
                    {/* <table>
                        <tr className="">
                            <td className="">
                                <div className="a">
                                    {
                                        todos.length && todos.map((item, index) =>
                                            <TodoItems
                                                key={index}
                                                item={item}
                                                onClick={this.onItemClick(item)}
                                            />
                                        )
                                    }
                                </div>
                            </td>
                    source khi chuyển delete, edit trong div item
                    <td className="">
                                {this.state.todos.map(x => {
                                    return (
                                        <div className="b">
                                            <div onClick={() => { this.deleteToDo(x) }}><i class="fas fa-trash-alt"></i></div>
                                        </div>
                                    );
                                })}
                            </td>
                            <td>
                                {this.state.todos.map(x => {
                                    return (
                                        <div className="b">
                                            <button onClick={() => { this.editToDo(x) }}>{this.state.editItem && (this.state.editItem.title === x.title) && "Hủy" || "Sửa"}</button>
                                            <div onClick={() => this.editToDo(x)}><i class="fas fa-edit"></i></div>
                                        </div>
                                    );
                                })}
                            </td>
                        </tr>
                    </table> */}
                </div >
            )
        }

        //source khi theem
        // return (
        //     <div>
        //         {this.state.showAdd && <AddToDo onAdd={this.addTodo}></AddToDo>}
        //         <button onClick={() => this.setState({ showAdd: !this.state.showAdd })}>+</button>

        //         <h1>Todo</h1>
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th>Id</th>
        //                     <th>Title</th>
        //                     <th>Status</th>
        //                     <th>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {this.state.todos.map(x => {
        //                     return (
        //                         <tr key={x.id}>
        //                             <td>{x.id}</td>
        //                             <td>{this.state.editItem && (this.state.editItem.id === x.id) && (<input value={x.title}></input>) || (x.title)}</td>
        //                             <td style={{ color: x.status === "Done" ? "Green" : "Red" }}>{x.status}</td>
        //                             <td>
        //                                 <button onClick={() => { this.deleteToDo(x) }}>Delete</button>
        //                                 {/* <button onClick={() => { this.editToDo(x) }}>{this.state.editItem && (this.state.editItem.id === x.id) && "Hủy" || "Sửa"}</button> */}
        //                                 <button onClick={() => this.editToDo(x)}>
        //                                     Edit
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     );
        //                 })}
        //             </tbody>
        //         </table>
        //     </div>
        // )
    }
};
export default ToDoList;
