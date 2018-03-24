import React from 'react'



<Form onSubmit={this.handleSubmit}>
  <Form.Field>
  <label htmlFor='name'>Item Name</label>
  <input
    id='name'
    placeholder='Item Name'
    required
    value={name}
    onChange={this.handleChange}
  />
  </Form.Field>
  <Form.Field>
    <label htmlFor='Price'>Item Price</label>
    <input
      id='Price'
      placeholder='Item Price'
      required
      value={Price}
      onChange={this.handleChange}
    />
  </Form.Field>
  <Form.Field>
    <label htmlFor='description'>Item Description</label>
    <input
      id='description'
      placeholder='Item Description'
      type='description'
      required
      value={description}
      onChange={this.handleChange}
    />
  </Form.Field>
  <Segment basic textAlign='center'>
    <Button type='submit'>Submit</Button>
  </Segment>
</Form>