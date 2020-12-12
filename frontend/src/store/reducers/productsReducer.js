
import { FETCH_PRODUCTLIST_FAIL, 
  FETCH_PRODUCTLIST_LOADING, 
  FETCH_PRODUCTLIST_SUCCESS,
  FETCH_PRODUCTDETAIL_LOADING,
  FETCH_PRODUCTDETAIL_SUCCESS,
  FETCH_PRODUCTDETAIL_FAIL ,
  UPDATE_PRODUCTDETAIL_LOADING,UPDATE_PRODUCTDETAIL_SUCCESS,UPDATE_PRODUCTDETAIL_FAIL
} from 'constants/actionTypes';
  
function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
      case FETCH_PRODUCTLIST_LOADING:
        return { status: "loading", products: action.payload };
      case FETCH_PRODUCTLIST_SUCCESS:
        return { status: "sucess", products: action.payload };
      case FETCH_PRODUCTLIST_FAIL:
        return { status: "error", error: action.payload };
      default:
        return state;
    }
  }
function productDetailReducer(state={},action) {
  switch (action.type) {
    case FETCH_PRODUCTDETAIL_LOADING:
    case UPDATE_PRODUCTDETAIL_LOADING:
      return { status: "loading", product: action.payload};
    case FETCH_PRODUCTDETAIL_SUCCESS:
    case UPDATE_PRODUCTDETAIL_SUCCESS:
      return { status: "sucess", product: action.payload };
    case FETCH_PRODUCTDETAIL_FAIL:
    case UPDATE_PRODUCTDETAIL_FAIL:
      return { status: "error", error: action.payload };
    default:
      return state;
  }
}
  export {
    productListReducer,
    productDetailReducer
  }