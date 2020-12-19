import { FETCH_SHOPPINGCART_REQUET,FETCH_SHOPPINGCART_SUCCESS,FETCH_SHOPPINGCART_FAIL,
    UPDATE_SHOPPINGCART_REQUET,UPDATE_SHOPPINGCART_SUCCESS,UPDATE_SHOPPINGCART_FAIL
} from 'constants/actionTypes';

const intialState={ status: "loading", shoppingCart: []}

export function shoppingCartReducer(state=intialState,action) {
  
    switch (action.type) {
      case FETCH_SHOPPINGCART_REQUET:
      case UPDATE_SHOPPINGCART_REQUET:
        return { status: "loading", shoppingCart: action.payload};
      case FETCH_SHOPPINGCART_SUCCESS:
      case UPDATE_SHOPPINGCART_SUCCESS:
        return { status: "sucess", shoppingCart: action.payload };
      case FETCH_SHOPPINGCART_FAIL:
      case UPDATE_SHOPPINGCART_FAIL:
        return { status: "error", error: action.payload };
      default:
        return state;
    }
  }