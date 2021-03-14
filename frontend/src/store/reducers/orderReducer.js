import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ITEM_QUANTITY_UPDATE,
  CLEAR_CART,
  SET_ORDER_CHARGE,
  SET_ORDER_INFO,
} from 'constants/actionTypes';

const intialShoppingCartState = {
  status: 'loading',
  shoppingCart: [],
  orderCharge: null,
};
const initalOrderInfoState = {};
export function shoppingCartReducer(state = intialShoppingCartState, action) {
  const newCart = [...state.shoppingCart];
  switch (action.type) {
    case ADD_TO_CART:
      newCart.push(action.payload);
      return { ...state, status: 'updated', shoppingCart: newCart };
    case REMOVE_FROM_CART:
      const newShoppingCart = newCart.filter(
        (item) => item.uuid !== action.payload
      );
      return { ...state, status: 'updated', shoppingCart: newShoppingCart };
    case ITEM_QUANTITY_UPDATE:
      const newCartUpdated = newCart.map((item) =>
        item.uuid === action.payload.uuid
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, status: 'updated', shoppingCart: newCartUpdated };
    case CLEAR_CART:
      return { ...state, status: 'updated', shoppingCart: [] };
    case SET_ORDER_CHARGE:
      return { ...state, status: 'updated', orderCharge: action.payload };
    default:
      return state;
  }
}

export function setOrderInfoReducer(state = initalOrderInfoState, action) {
  switch (action.type) {
    case SET_ORDER_INFO:
      return action.payload;
    default:
      return state;
  }
}
