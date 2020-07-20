import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pull from './Pull';

class Box extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Pull></Pull>
        </Row>
      </Grid>
    );
  }
}

export default Box;