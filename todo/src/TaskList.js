import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import EditTask from './EditTask';


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
            showAddForm: false,
            showEditForm: false,
            editTask: { id: -1, name: '' },
            date1: new Date().getDate(),
            date: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"][new Date().getDate()],
            month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Octo", "Novem", "Dec"][new Date().getMonth() + 1],
            years: new Date().getFullYear()
        }
    }
    setStatus = () => {
        this.setState({
            showAddForm: true,
            showEditForm: false
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    addTask = (name) => {
        this.state.tasks.push(name);
        this.forceUpdate();
    }
    openEditForm = () => {
        this.setState({
            showEditForm: true
        })
    }
    editTask = (name, index) => {
        this.setState({ editTask: { id: index, name: name } })
    }
    doEdit = (id, name) => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.tasks[id] = name;
        this.forceUpdate();
    }
    deleteTask = (name) => {
        const filteredTask = this.state.tasks.filter(task => {
            return task !== name
        })
        this.setState({
            tasks: filteredTask
        })
    }
    handleClearCompleted(event) {
        var newTodos = this.state.todos.filter((todo) => { return !todo.done });
        this.setState({ todos: newTodos });
    }
    // change = () => {
    //     this.setState({
    //         tasks: ['Task A', 'Task B', 'Task C', 'Task D']
    //     })
    // }
    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm} />
            )
        } else if (this.state.showEditForm === true) {
            return (
                <EditTask doEdit={this.doEdit} closeForm={this.closeForm} editItem={this.state.editTask} />
            )
        } else {
            return (
                <div className="Task container" >
                    <div className="Task_header">
                        <div className="Task_header_list Task_header_list--text">
                            <div className="demo1 Todo_inline" col span="2">{this.state.date1}</div>
                            <div className="Todo_inline">
                                <div className="demo">{this.state.date}</div>
                                <div className="demo">{this.state.month} {this.state.years}</div>
                            </div>
                        </div>
                        <div className="Task_header_list Task_header_list--highlight">
                            <div className="demo2" onClick={this.setStatus}><i class="fa fa-plus-circle" aria-hidden="true"></i> NEW</div>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="Task_header_title">
                            TODO TASKS
                        </div>
                    </div>
                    <div>
                        {
                            this.state.tasks.map(function (name, index) {
                                return <TodoList name={name}
                                    openEditForm={this.openEditForm}
                                    getIndexTask={index}
                                    editTask={this.editTask}
                                    deleteTask={this.deleteTask} />
                            }.bind(this))
                        }
                    </div>
                    <hr />
                    <div className="result">
                        <p>Number of total tasks:
                            {this.state.tasks.length}
                        </p>
                        <p>Number of total tasks Completed:
                            {this.state.tasks.filter((todo) => { return todo.done }).length}
                        </p>
                        <p> Number of total tasks Pending:
                            {this.state.tasks.filter((todo) => { return !todo.done }).length}
                        </p>
                        {/* <p>
                            <button onClick={this.handleClearCompleted.bind(this)}>Clear Completed</button>
                        </p> */}
                    </div>
                </div >
            )
        }
    };
}
export default TaskList;