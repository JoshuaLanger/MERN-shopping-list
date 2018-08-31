import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
  items: [
    {
      id: uuid(),
      name: 'Chuck'
    },
    {
      id: uuid(),
      name: 'Is'
    },
    {
      id: uuid(),
      name: 'A'
    },
    {
      id: uuid(),
      name: 'Good'
    },
    {
      id: uuid(),
      name: 'Guy'
    }
  ]
};

// Actions are dispatched to all reducers
// Make sure this reducer gets the right one
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };

    default:
      return state;
  }
};
