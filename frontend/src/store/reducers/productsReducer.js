
import { FETCH_PRODUCTLIST_FAIL, 
  FETCH_PRODUCTLIST_LOADING, 
  FETCH_PRODUCTLIST_SUCCESS,
  FETCH_PRODUCTDETAIL_LOADING,
  FETCH_PRODUCTDETAIL_SUCCESS,
  FETCH_PRODUCTDETAIL_FAIL ,
  UPDATE_PRODUCTDETAIL_LOADING,UPDATE_PRODUCTDETAIL_SUCCESS,UPDATE_PRODUCTDETAIL_FAIL,
  UPDATE_REVIEWS_LOADING,UPDATE_REVIEWS_SUCCESS,UPDATE_REVIEWS_FAIL,
  FETCH_REVIEWS_LOADING,FETCH_REVIEWS_SUCCESS,FETCH_REVIEWS_FAIL
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
function productReviewsReducer(state={},action) {
  switch (action.type) {
    case FETCH_REVIEWS_LOADING:
    case UPDATE_REVIEWS_LOADING:
      return { status: "loading", reviewsObj: action.payload};
    case FETCH_REVIEWS_SUCCESS:
    case UPDATE_REVIEWS_SUCCESS:
      return { status: "sucess", reviewsObj: action.payload };
    case FETCH_REVIEWS_FAIL:
    case UPDATE_REVIEWS_FAIL:
      return { status: "error", error: action.payload };
    default:
      return state;
  }
}
  export {
    productListReducer,
    productDetailReducer,
    productReviewsReducer
  }