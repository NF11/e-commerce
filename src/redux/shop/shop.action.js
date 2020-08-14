import { ShopActionTypes } from "./shop.type";

export const fetchCollections = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS,
  payload: collections,
});
