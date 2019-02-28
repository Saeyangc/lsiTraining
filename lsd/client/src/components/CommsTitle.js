import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class CommsTitle extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            title: ''


        };


    }
    handleChange(e) {
        this.setState({ title: e.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
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
export default CommsTitle;