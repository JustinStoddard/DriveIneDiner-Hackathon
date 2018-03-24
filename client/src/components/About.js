import React, { Component } from 'react';
import { 
  Header,
  Segment,
  Container,
  Embed
  } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div>
        <br />
        <Header as='h1' textAlign='center'>About</Header>
        <br />
        <Container>
          <Segment>
            <Header as='h3' textAlign='center'>
            We're a small Chinese restaurant with over 20 years of experience between food and service. We're confident you'll love our food, so come in and try it! Can't come in? We deliver and cater!
            </Header>
            <Segment>
            </Segment>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default About;
