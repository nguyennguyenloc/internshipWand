import React, { Component } from 'react';

class TodoList extends Component {

    handleEdit = () => {
        this.props.openEditForm();
        this.props.editTask(this.props.name, this.props.getIndexTask);
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.name)
    }
    //handleChanged
    handleChanged = () => {
        alert("HOW TO ĐỔI MÀU!");
    }
    //handleClick
    handleClick = () => {
        this.props.change();
    }
    render() {

        return (
            <div className="Todo">
                <div className="Todo_inline Todo_inline--text">
                    {this.props.name}
                </div>

                <div className="a">
                    <div className="Todo_inline">
                        {/* <div className="check"></div> */}
                        <div className="radio">
                            <input type="radio" id="radio1" name="group-radio" onClick={this.handleChanged} />
                        </div>
                        {/* update */}
                        <div className="element">
                            <input type="checkbox" id="radio1" name="group-radio" onClick={this.handleClick} />
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="Todo_inline">
                        <div onClick={this.handleEdit}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                    {/* update */}
                    <div className="Todo">
                        <div onClick={this.handleClick}></div>
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
