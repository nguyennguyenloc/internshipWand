import React, { Component } from 'react';

class TodoList extends Component {
    handleEdit = () => {
        this.props.openEditForm();
        this.props.editTask(this.props.name, this.props.getIndexTask);
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.name)
    }
    render() {
        return (
            <div className="Todo">
                <div className="Todo_inline Todo_inline--text">
                    {this.props.name}
                </div>

                {/* <div className="Todo_inline">
                    <div onClick={this.handleEdit}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                </div>
                <div className="Todo_inline">
                    <div onClick={this.handleDelete}> <i class="fa fa-trash" aria-hidden="true"></i></div>
                </div> */}

                <div className="a">
                    <div className="Todo_inline">
                        <div className="check"></div>
                    </div>
                </div>
                <div className="">
                    <div className="Todo_inline">
                        <div onClick={this.handleEdit}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                    <div className="Todo_inline ">
                        <div onClick={this.handleDelete}> <i class="fa fa-trash" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>

        )
    };
}

export default TodoList;
