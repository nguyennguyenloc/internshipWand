import React, { Component } from 'react';
import doImg from '../img/do.svg';
import logoImg from '../img/logo.svg';
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
        const { item } = this.props;
        let url = doImg;
        if (item.isComplete) {
            url = logoImg;
        }
        return (
            <div className="Todo">
                <div className="Todo_inline Todo_inline--text">
                    {this.props.name}
                </div>

                <div className="a">
                    <div className="Todo_inline">
                        {/* <div className="check"></div> */}
                        <div className="radio">
                            {/* <input type="radio" id="radio1" name="group-radio" onClick={this.handleChanged} /> */}
                            <img onClick={onClick} src={url} width={32} height={32} />
                        </div>
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
