import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utiles";

const INIT_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
