import React, { Component } from 'react';
import { Header, Card, Button, Image } from 'semantic-ui-react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>My Cart</Header>
      <Card.Group itemsPerRow={4}>
        {this.props.cart.map(item =>
          <Card key={item.id}>
            <Card.Content>
              <Image floated='right' size='mini' src='' />
              <Card.Header>
                {item.name}
              </Card.Header>
              <Card.Description>
                {item.description}
              </Card.Description>
              <Card.Meta>
                ${item.price}
              </Card.Meta>
              </Card.Content>
          </Card>
        )}
      </Card.Group>
    </div>

    )
  }
}

export default Cart;
