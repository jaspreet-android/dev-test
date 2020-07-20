import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Pull from './Pull';
import Remove from './Remove';

import svgImage from './../images/dev-test-img.svg';

class Box extends Component {

  constructor(props) {
    super(props);

    this.state = {
      records: [],
      indexToremove: ''
    }

    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeIndex = this.removeIndex.bind(this);
  }

  fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        this.setState({ records: [...data] }); 
        console.log('This is your data', this.state.records);
    });
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value});
  }

  removeIndex() {
    const { records, indexToremove } = this.state;
    const filterInPlace = (array, predicate) => {
      let end = 0;
      for (let i = 0; i < array.length; i++) {
          const obj = array[i];
          if (predicate(obj)) {
              array[end++] = obj;
          }
      }
      array.length = end;
    };
    const toDelete = new Set([indexToremove - 1]);
    const arrayOfObjects = records;
    filterInPlace(arrayOfObjects, obj => !toDelete.has(obj.id));
    this.setState({ records: [...arrayOfObjects] }); 
  }

  render() {
    const { records, indexToremove } = this.state;
    return (
      <Grid fluid>
        <Row>
          <img alt="text" src={ svgImage }/>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            { records.map((v, i) => {
                return <div key={i}><span>{i}: </span><span>{v.email}</span></div>
            }) }
          </Col>
        </Row>
        <Row>
          <Pull 
            onClick={ this.fetchData }></Pull>
        </Row>
        <Row>
          <input type="number" name="indexToremove" value={ indexToremove } onChange={this.handleChange}/>
          <Remove 
            onClick={ this.removeIndex }></Remove>
        </Row>
      </Grid>
    );
  }
}

export default Box;