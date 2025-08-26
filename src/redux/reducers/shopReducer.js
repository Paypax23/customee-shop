// reducers/cartReducer.js
import { ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART } from "../actions/shopAction";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      return { ...state, items: [...state.items, item] };
    }

    case REMOVE_ITEM:
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };

    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
        ),
      };

    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
};