import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Pull extends Component {

    render() {
        return (
        <Grid fluid>
            <Row>
            <Col xs={6} md={3}>
                <button onClick={this.props.onClick}>Pull Data</button>
            </Col>
            </Row>
        </Grid>
        );
    }
}

export default Pull;