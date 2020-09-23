
import { FETCH_PRODUCTLIST_FAIL, FETCH_PRODUCTLIST_LOADING, FETCH_PRODUCTLIST_SUCCESS } from './../../constants/actionTypes';
function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
      case FETCH_PRODUCTLIST_LOADING:
        return { loading: true, products: [] };
      case FETCH_PRODUCTLIST_SUCCESS:
        return { loading: false, products: action.payload };
      case FETCH_PRODUCTLIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  export {
    productListReducer
  }