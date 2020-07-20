import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Remove extends Component {

    render() {
        return (
        <Grid fluid>
            <Row>
            <Col xs={6} md={3}>
                <button onClick={this.props.onClick}>Remove Data</button>
            </Col>
            </Row>
        </Grid>
        );
    }
}

export default Remove;