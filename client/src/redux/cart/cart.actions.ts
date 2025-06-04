import { Action, createAction, ActionWithPayload } from './../reducer.util';
import CartActionTypes, { CartItem } from "./cart.types";

export type ToggleCartHidden = Action<CartActionTypes.TOGGLE_CART_HIDDEN>
export type AddItem = ActionWithPayload<CartActionTypes.ADD_ITEM, CartItem>
export type RemoveItem = ActionWithPayload<CartActionTypes.REMOVE_ITEM, CartItem>
export type DecreaseItem = ActionWithPayload<CartActionTypes.DECREASE_ITEM, CartItem>
export type ClearCart = Action<CartActionTypes.CLEAR_CART>

export type CartAction = ToggleCartHidden | AddItem | RemoveItem | DecreaseItem | ClearCart

export const toggleCartHidden = () : ToggleCartHidden => createAction(CartActionTypes.TOGGLE_CART_HIDDEN);

export const addItem = (item: CartItem) : AddItem => createAction(CartActionTypes.ADD_ITEM, item);

export const removeItemFromCart = (item: CartItem) : RemoveItem => createAction(CartActionTypes.REMOVE_ITEM, item)

export const decreaseItem = (item: CartItem) : DecreaseItem => createAction(CartActionTypes.DECREASE_ITEM, item);

export const clearCart = () : ClearCart => createAction(CartActionTypes.CLEAR_CART);
