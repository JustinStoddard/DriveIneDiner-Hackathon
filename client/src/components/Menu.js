import React, { Component } from 'react'
import { Header, Card, Image, Container } from 'semantic-ui-react';

class Menu extends React.Component {
  state = {
  }
  render() {
    return(

      <Header as='h1' textAlign='center'>Menu Items</Header>
      <Container>
        <div>
      <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
</div>
</Container>
    )
  }

}

export default Menu;
