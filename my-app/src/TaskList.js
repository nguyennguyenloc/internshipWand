import React, { Component } from 'react';
import TodoList from './TodoList';

// class TaskList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             tasks: ['Task 1', 'Task 2'],
//         }
//     }
//     render() {
//         return (
//             <div className="container">
//                 <br />
//                 <br />
//                 <h2>List Task</h2>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Name of task</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.tasks.map(function (name, index) {
//                                 return <TodoList name={name}
//                                 />
//                             }.bind(this))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['List to do 1', 'List to do 2'],
        }
    }
    render() {
        return (
            <div className="container">
                <h2>List</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // this.state.tasks.map(function (name, index) {
                            //     return <TodoList name={name}
                            //     />
                            // }.bind(this))
                            this.state.tasks.map(function (name, index) {
                                return <TodoList name={name} />
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div >
        );
    }
}
export default TaskList;