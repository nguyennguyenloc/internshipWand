import React, { Component } from 'react';
class AddToDo extends Component {
    state = {
        id: '',
        title: '',
        status: "Pending"
    }
    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleStatusChange = (event) => {
        this.setState({
            status: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            id: this.state.id,
            title: this.state.title,
            status: this.state.status
        })
        this.setState({
            id: '',
            title: '',
            status: "Pending"
        })
    }
    render() {
        return (
            <div>
                <h3>ToDo List</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Id: <input value={this.state.id} onChange={this.handleIdChange} />
                    </div>
                    <div>
                        Title: <input value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <div>
                        Status: <select value={this.state.status} onChange={this.handleStatusChange} >
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div >
        )
    };
}
export default AddToDo;