import { 
  FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTDETAIL_SUCCESS,
  UPDATE_PRODUCTREVIEWS_LOADING,UPDATE_PRODUCTREVIEWS_SUCCESS,UPDATE_PRODUCTREVIEWS_FAIL,
  FETCH_PRODUCTREVIEWS_LOADING, FETCH_PRODUCTREVIEWS_FAIL, FETCH_PRODUCTREVIEWS_SUCCESS, } from 'constants/actionTypes';
  
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
  
function productReviewsReducer(state={status:"loading",reviewsObj:{},type:"productReviews"},action) {
  switch (action.type) {
    case FETCH_PRODUCTREVIEWS_LOADING:
    case UPDATE_PRODUCTREVIEWS_LOADING:
      return { status: "loading", reviewsObj: action.payload,type:"productReviews"};
    case FETCH_PRODUCTREVIEWS_SUCCESS:
    case UPDATE_PRODUCTREVIEWS_SUCCESS:
      return { status: "success", reviewsObj: action.payload,type:"productReviews" };
    case FETCH_PRODUCTREVIEWS_FAIL:
    case UPDATE_PRODUCTREVIEWS_FAIL:
      return { status: "error", error: action.payload,type:"productReviews" };
    default:
      return state;
  }
}

  export {
    productListReducer,
    productDetailReducer,
    productReviewsReducer
  }