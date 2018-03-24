import React, { Component } from 'react'
import { Header, Card, Image, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
<<<<<<< HEAD
import { getItems, deleteItem, updateItem } from '../actions/items';
import ItemForm from './ItemForm'
=======
import { getItems } from '../actions/items';
import Cart from './Cart';
>>>>>>> cart working

class Menu extends React.Component {
  state = { items: [],
            view: true,
          }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

<<<<<<< HEAD
  menuDelete = (id) => {
    this.props.dispatch(deleteItem(id))
  }

  itemUpdate = (id) => {
    this.props.dispatch(updateItem(id))
  }

=======
  addItem = (item) => {
    this.setState({items: [item, ...this.state.items] })
  }

  toggleView = () => {
    this.setState({ view: !this.state.view })
  }
>>>>>>> cart working

  render() {
    const { items } = this.props
    return(
<<<<<<< HEAD
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
=======
      <Container>
        <Header as='h1' textAlign='center'>Menu Items</Header>
        <Button onClick={this.toggleView}> View Cart </Button>
        <div>
        { this.state.view ?
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
                       <Button onClick={() => this.addItem(item)} basic color='green'>Add to cart</Button>
                     </div>
                   </Card.Content>
                 </Card>
               )}
             </Card.Group>
           </div>
          :
          <div>
            <Cart cart={this.state.items} />
          </div>
        }
        </div>
      </Container>
>>>>>>> cart working
    )
  }
}
const mapStateToProps = (state) => {
 return { items: state.items }
}

export default connect(mapStateToProps)(Menu);
