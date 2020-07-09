import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    handleChange = (e) => {
        console.log(e);
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div>
                <label>
                    Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <p>{this.state.input}</p>
            </div>
        )
    };
}
export default Form;