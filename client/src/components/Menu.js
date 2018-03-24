import React, { Component } from 'react'
import { Header, Card, Image, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getItems } from '../actions/items';

class Menu extends React.Component {
  // state = { items: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
  }


  render() {
    const { items } = this.props
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
                  ${item.price}
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
const mapStateToProps = (state) => {
 return { items: state.items }
}

export default connect(mapStateToProps)(Menu);
