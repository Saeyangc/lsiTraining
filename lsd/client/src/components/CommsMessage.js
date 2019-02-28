import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class CommsMessage extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            message: ''

        };


    }
    handleChange(e) {
        this.setState({ message: e.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Message</ControlLabel>
                    <FormControl
                        type="text"
                        componentClass="textarea"
                        rows={10}
                        value={this.state.message}
                        onChange={this.handleChange}
                        style={{ resize: "none" }}
                        bsSize="sm"
                        autoComplete="off"
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    >
                    </FormControl>
                </FormGroup>
            </form>
        )
    }

}
export default CommsMessage;