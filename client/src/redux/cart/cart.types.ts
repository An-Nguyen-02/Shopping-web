const enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  DECREASE_ITEM = "DECREASE_ITEM",
  CLEAR_CART = "CLEAR_CART",
};

export type CartItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number
}

export default CartActionTypes;
