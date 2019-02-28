import React, { Component } from 'react';
import { Row, Panel, Grid, Col } from 'react-bootstrap';
import CommsMessage from './CommsMessage'
import CommsTitle from './CommsTitle'


class Comms extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            title: ' ',
            message: ' '
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.text });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Panel>
                        <Panel.Body>
                            <Col xs={12} md={7}>
                                <CommsTitle title={this.state.title} />
                            </Col>
                            <Row />
                            <Col xs={12} md={12}>
                                <CommsMessage message={this.state.message} />
                            </Col>
                        </Panel.Body>
                    </Panel>
                </Row>
            </Grid >
        )
    }
}

export default Comms;