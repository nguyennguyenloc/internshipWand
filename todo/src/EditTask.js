import React, { Component } from 'react';
class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editItem: this.props.editItem
        }
    }
    handleEditTask = () => {
        this.props.doEdit(this.state.editItem.id, this.state.editItem.name);
        this.props.closeForm();
    }
    changedName = (event) => {
        this.setState({
            editItem: { id: this.props.editItem.id, name: event.target.value }
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="Task_header_title">Edit task</h2>
                    <div className="form-group">
                        <label>Name of task</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter name of task"
                            defaultValue={this.state.editItem.name}
                            onChange={this.changedName} />
                    </div>
                    <div type="submit" style={{ marginRight: 5 + 'px' }} className="" onClick={this.handleEditTask}>Add</div>
                    <div className="" onClick={this.props.closeForm}>Back</div>
                </div>
            </React.Fragment>
        )
    };
}
export default EditTask;