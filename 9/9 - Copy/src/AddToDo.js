import React, { Component } from 'react';
import ToDoList from './ToDoList';
class AddToDo extends Component {
    state = {
        title: '',
        showAdd: false,
        showList: false
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }

    // close = () => {
    //     alert("Cancel: quay lại màn hình, Add: add List")
    // }

    render() {
        return (
            <div className="addtodo">
                {/* <ToDoList ok={this.handleSubmit}></ToDoList> */}
                <h1>Add List</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className="w3-input" placeholder="Get some ..." value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <br />
                    <div>
                        <button className="addtodo-button addtodo-add" onClick={this.props.openList} type="submit">Add</button>
                        <button className="addtodo-button addtodo-cancel" onClick={this.props.closeAdd}>Cancel</button>
                    </div>
                </form>
            </div >
        )
    };
}
export default AddToDo;