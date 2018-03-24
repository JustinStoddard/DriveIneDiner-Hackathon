import axios from 'axios';
export const ITEMS = 'ITEMS';
export const ADD_ITEM = "ADD_ITEM"
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = "DELETE_ITEM"


export const getItems = callback => {
  return (dispatch) => {
    axios.get('/api/items')
      .then( res => dispatch({ type: ITEMS, items: res.data }))
      .then(callback)
  }
  
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.item('/api/items', { item } )
     .then( res => dispatch({ type: ADD_ITEM, item: res.data }) )
  }
}

export const updateItem = (item) => {
  return (dispatch) => {
    axios.put(`/api/items/${item.id}`, { item } )
      .then( res => dispatch({ type: UPDATE_ITEM, item: res.data }) )
  }
}

export const deleteItem = (id) => {
  return (dispatch) => {
    axios.delete(`/api/items/${id}`)
      .then( () => dispatch({ type: DELETE_ITEM, id }) )
  }
}