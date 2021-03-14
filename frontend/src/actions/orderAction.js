import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ITEM_QUANTITY_UPDATE,
  CLEAR_CART,
  SET_ORDER_CHARGE,
  SET_ORDER_INFO,
} from 'constants/actionTypes';
import { saveState } from 'utilis/localStorage';

export const addItemToCart = (data) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: data });
  const { shoppingCart } = getState();
  saveState({ shoppingCart });
};

export const removeFromCart = (uuid) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: uuid });
  const { shoppingCart } = getState();
  saveState({ shoppingCart });
};

export const itemQuntityUpdate = (quantity, uuid) => (dispatch, getState) => {
  dispatch({ type: ITEM_QUANTITY_UPDATE, payload: { quantity, uuid } });
  const { shoppingCart } = getState();
  saveState({ shoppingCart });
};

export const clearShoppingCart = () => (dispatch, getState) => {
  dispatch({ type: CLEAR_CART, payload: [] });
  const { shoppingCart } = getState();
  saveState({ shoppingCart });
};

export const setOrderCharge = (data) => (dispatch) => {
  dispatch({ type: SET_ORDER_CHARGE, payload: data });
};

export const setOrderInfo = (data) => (dispatch) => {
  dispatch({ type: SET_ORDER_INFO, payload: data });
};
