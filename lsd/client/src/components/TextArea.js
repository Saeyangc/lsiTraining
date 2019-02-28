import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class TextArea extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            text: '',
            section: this.props.section
        };
    }

handleChange(e){
    this.setState({value: e.target.text});
}


render(){
    return(
        <form>
            <FormGroup
            controlId="formControlsTextarea">
            <ControlLabel>{this.state.section}</ControlLabel>
            <FormControl 
            componentClass="textarea" rows={23} 
            style={{ width: "103%", resize: "vertical" }}          
            type="text"            
            label = {this.state.section}
            onChange={this.handleChange}          
            
            />
            </FormGroup>
        </form>
    );
}

}

export default TextArea;



