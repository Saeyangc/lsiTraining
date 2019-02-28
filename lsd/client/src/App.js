import React, { Component } from 'react';
import Nav from './components/Navigation'
//import Date from './components/DateForm';
import TextForm from './components/TextForm';
import TextArea from './components/TextArea';
import Comms from './components/Comms'

import { Row, Col, Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Grid>
          <Row>
            <Col xs={12} md={2}>
              <TextForm section="LSI#" />
              <TextForm section="Date" />
              <TextForm section="Primary CM" />
              <TextForm section="Region" />
              <TextForm section="Service(s) Impacted" />
              <TextForm section="Service Management or Availability" />
              <TextForm section="Scope of Impact" />
            </Col>
            <Col xs={12} md={10}>
              <TextArea section="Notes" /></Col>
          </Row>
          <Comms />
        </Grid>
      </div>
    );
  }
}

export default App;
