import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A first name has been submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="aui" onSubmit={this.handleSubmit}>
                <div className="field-group">
                    <label htmlFor="comment-firstName">First Name:<span className="aui-icon icon-required">(required)</span></label>
                    <input type="text" className="text" value={this.state.value} onChange={this.handleChange}/>
                    <div className="description">Your first name.</div>
                </div>
                <div className="buttons-container">
                    <div className="buttons">
                        <input type="submit" className="button" value="Submit"/>
                    </div>
                </div>

            </form>
        );
    }
}

export default NameForm;
