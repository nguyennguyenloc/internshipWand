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
            return <div className="menuButton row">
                <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-list-ul"></i></div>
                <div className="menuButton1 col-lg-6 col-md-6 col-sm-6" onClick={(e) => this.props.formToggle(e)}>  Add List</div>
                <div className="col-lg-4 col-md-4 col-sm-4">1</div>
            </div>

        }
    }
    // statusList = () => {
    //     if (this.state.statusList) {
    //         return <div className="menuButton" onClick={(e) => this.props.formToggle(e)}>
    //             Show List
    //         </div>
    //     }
    // }
    statusList = () => {
        if (this.state.statusList) {
            return <div className="menuButton row">
                <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-list-ul"></i></div>
                <div className="menuButton1 col-lg-6 col-md-6 col-sm-6" onClick={(e) => this.props.formToggle(e)}> Show List </div>
                <div className="col-lg-4 col-md-4 col-sm-4">1</div>
            </div>
        }
    }
    render() {
        return (
            <div className="container Menu ">
                <br />
                <div className="menuButton ">
                    <i class="fas fa-plus-circle"></i>
                </div>
                <br />
                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-star"></i></div>
                    <div className="menuButton1 col-lg-6 col-md-6 col-sm-6">
                        Importan
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        2
                    </div>
                </div>
                <br />

                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-calendar-alt"></i></div>
                    <div className="menuButton1 col-lg-6 col-md-6 col-sm-6">
                        Planned
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        1
                    </div>
                </div>
                <hr />
                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i class="far fa-check-square"></i></div>
                    <div className="menuButton1 col-lg-6 col-md-6 col-sm-6">
                        Index
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        2
                    </div>
                </div>
                <br />

                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i class="far fa-lightbulb"></i></div>
                    <div className="menuButton1 col-lg-6 col-md-6 col-sm-6">
                        Idea
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        3
                    </div>
                </div>
                <br />

                {this.showButton()}
                <br />

                {this.statusList()}
                <br />
                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-cog"></i></div>
                    <div className="menuButton1 col-lg-6 col-md-6 col-sm-6">
                        Setting
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                    </div>
                </div>
                <br />
            </div>
        )
    };
}
export default Menu;