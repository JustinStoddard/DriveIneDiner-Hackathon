import React, { Component } from 'react'
import { Header, Card, Image, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getItems, deleteItem, updateItem } from '../actions/items';
import ItemForm from './ItemForm'

class Menu extends React.Component {
  // state = { items: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  menuDelete = (id) => {
    this.props.dispatch(deleteItem(id))
  }

  itemUpdate = (id) => {
    this.props.dispatch(updateItem(id))
  }


  render() {
    const { items } = this.props
    return(
      <div>
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
                    <Button basic color='green' onClick={() => this.itemUpdate(item.id)}>Add to cart</Button>
                  </div>
                  <Button.Group size='large' textAlign='center'>
                    <Button>Update</Button>
                    <Button.Or />
                    <Button negative onClick={() => this.menuDelete(item.id)} >Delete</Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
          </div>
        </Container>
        <br />
        <br />
        <Container>
          <ItemForm />
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
 return { items: state.items }
}

export default connect(mapStateToProps)(Menu);
