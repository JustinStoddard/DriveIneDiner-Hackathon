import React, { Component } from 'react';
import { Header, Button, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as='h1' textAlign='center'>Dragon Diner</Header>
        <Divider hidden />
          <Link to='./Menu'>
            <Button> Menu </Button>
          </Link>
          <Divider hidden />
          <Link to='./Cart'>
            <Button> My Cart </Button>
          </Link>
          <Divider hidden />
          <Link to='./About'>
            <Button> About </Button>
          </Link>
      </Container>
    );
  }
}

export default Home;
