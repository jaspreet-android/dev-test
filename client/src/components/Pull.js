import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Pull extends Component {

    constructor(props) {
        super(props);

        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
    }

    render() {
        return (
        <Grid fluid>
            <Row>
            <Col xs={6} md={3}>
                <button onClick={ this.fetchData }>Pull Data</button>
            </Col>
            </Row>
        </Grid>
        );
    }
}

export default Pull;