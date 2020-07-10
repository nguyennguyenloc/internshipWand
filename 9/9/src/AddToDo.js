import React, { Component } from 'react';
class AddToDo extends Component {
    state = {
        title: ''
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
    render() {
        return (
            <div>
                <h3>ToDo List</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Title: <input value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div >
        )
    };
}
export default AddToDo;