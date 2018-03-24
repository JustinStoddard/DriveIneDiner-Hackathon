import React, { Component } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class ItemForm extends Component {
  state = { name: '', description: '', price: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { name, description } = this.state;
    // dispatch(handleLogin(name, description, history));
  }

  render() {
    const { name, description, price } = this.state;
    return (
      <ItemUpdateForm>
        <Segment basic>
          <Header as='h1'>Add Menu Item</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor='name'>Menu Item Name</label>
              <input
                required
                id='name'
                value={name}
                placeholder='Dragon Dumplings'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='description'>Menu Item Description</label>
              <input
                required
                id='description'
                value={description}
                placeholder='Delectible Dragon Dumplings'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='price'>Menu Item Price</label>
              <input
                required
                id='price'
                value={price}
                placeholder='9.99'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment textAlign='center' basic>
              <Button primary type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Segment>
      </ItemUpdateForm>
    );
  }
}

const ItemUpdateForm = styled.div`
  background: #9fbfdf;
  width: 100%;
`

export default connect()(ItemForm);