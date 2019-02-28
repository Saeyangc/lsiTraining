import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class TextForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            section: this.props.section

        };

    }

    handleChange(e) {
        this.setState({ value: e.target.value });

    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="text">
                    <ControlLabel>{this.state.section}</ControlLabel>
                    <FormControl
                        type="text"
                        label={this.state.section}
                        value={this.state.value}
                        onChange={this.handleChange}
                        bsSize="sm"
                        autoComplete="off"
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                </FormGroup>
            </form>

        );
    }
}

export default TextForm;