import SHOP_DATA from "../../pages/shop/shop.data";
import { ShopActionTypes } from "./shop.type";

const INIT_STATE = {
  collections: null,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
