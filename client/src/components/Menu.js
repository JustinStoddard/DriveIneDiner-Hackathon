import React, { Component } from 'react'
import { Header, Card, Image, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Menu extends React.Component {
  state = { items: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('./api/Menu')
    .then( res => {
      this.setState({ items: res.data })
    })
  }


  render() {
    const { items } = this.state
    return(
      <Container>
        <Header as='h1' textAlign='center'>Menu Items</Header>
        <div>
        <Card.Group itemsPerRow={4}>
          {items.map(item =>
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
                  {item.price}
                </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Add to cart</Button>
                </div>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
        </div>
      </Container>
    )
  }
}

export default connect()(Menu);
