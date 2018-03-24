import React, { Component } from 'react';
import { 
  Header,
  Segment,
  Component } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>About</Header>
      <Container>
        <Header as='h3' ></Header>
        We're a small Chinese restaurant, but with over 20 years in experience between food and service, we're confident that you'll love our food. Come in and try it!
Can't come in? We deliver and cater!
      </Container>
    );
  }
}

export default Home;
