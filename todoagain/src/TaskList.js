import React, { Component } from 'react';
import TodoList from './TodoList';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ['Task 1', 'Task 2']
        }
    }
    render() {
        return (
            <div className="container">
                <br />
                <br />
                <h2>List Task</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>Name of Task</tr>
                    </thead>
                    <tbody>
                        {
                            this.state.task.map(
                                function (name, index) {
                                    return <TodoList name={name} />
                                })
                        }
                    </tbody>
                </table>
            </div>
        )
    };
}
export default TaskList;