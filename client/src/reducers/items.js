import {
  ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from '../actions/items'

const items = (state = [], action ) => {
  switch(action.type) {
    case ITEMS:
      return action.items
    case ADD_ITEM:
      return [action.item, ...state]
    case UPDATE_ITEM:
      return state.map( a => {
        if (a.id === action.item.id)
          return action.item
        return a
      })
    case DELETE_ITEM:
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default items;