import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusButton: true,
            statusList: true
        }
    }
    showButton = () => {
        if (this.state.statusButton) {
            return <div className="menuButton" onClick={(e) => this.props.formToggle(e)}><i class="fas fa-list-ul"></i> Add List</div>
        }
    }
    statusList = () => {
        if (this.state.statusList) {
            return <div className="menuButton" onClick={(e) => this.props.formToggle(e)}><i class="fas fa-list-ol"></i> Show List</div>
        }
    }
    render() {
        return (
            <div className="Menu ">
                <div className="menuButton row">
                    <div className="col-md-6">
                        Importance
                    </div>
                    <div className="col-md-6">
                        Importance
                    </div>
                </div>
                <div className="menuButton">Planned</div>
                <hr />
                <div className="menuButton">Index</div>
                <div className="menuButton">Idea</div>
                <div>{this.showButton()}</div>
                <div>{this.statusList()}</div>
            </div>
        )
    };
}
export default Menu;