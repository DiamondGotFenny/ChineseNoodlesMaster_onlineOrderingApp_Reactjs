
import { 
  FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTDETAIL_SUCCESS,
  UPDATE_REVIEWS_LOADING,UPDATE_REVIEWS_SUCCESS,UPDATE_REVIEWS_FAIL,
  FETCH_REVIEWS_SUCCESS
} from 'constants/actionTypes';
  const initialProductListState={status:"loading",products:[]}
function productListReducer(state = initialProductListState, action) {
    if (action.type===FETCH_PRODUCTLIST_SUCCESS) {
      return { status: "sucess", products: action.payload };
    }
     return state;
  }
function productDetailReducer(state={status:'loading',product:{}},action) {
  if (action.type===FETCH_PRODUCTDETAIL_SUCCESS) {
    return { status: "sucess", product: action.payload };
  }
  return state;
}
  
function productReviewsReducer(state={status:"loading",reviewsObj:{}},action) {
  switch (action.type) {
    case UPDATE_REVIEWS_LOADING:
      return { status: "loading", reviewsObj: action.payload};
    case FETCH_REVIEWS_SUCCESS:
    case UPDATE_REVIEWS_SUCCESS:
      return { status: "sucess", reviewsObj: action.payload };
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