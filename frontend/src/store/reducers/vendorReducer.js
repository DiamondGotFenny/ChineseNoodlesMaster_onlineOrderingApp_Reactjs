import {  FETCH_VENDORREVIEWS_LOADING,  FETCH_VENDORREVIEWS_SUCCESS,FETCH_VENDORREVIEWS_FAIL,
  UPDATE_VENDORREVIEWS_LOADING,UPDATE_VENDORREVIEWS_SUCCESS,UPDATE_VENDORREVIEWS_FAIL
} from 'constants/actionTypes';

function vendorReviewsReducer(state={status:"loading",reviewsObj:{},type:"vendorReviews"},action) {
    switch (action.type) {
      case FETCH_VENDORREVIEWS_LOADING:
      case UPDATE_VENDORREVIEWS_LOADING:
        return { status: "loading", reviewsObj: action.payload,type:"vendorReviews"};
      case FETCH_VENDORREVIEWS_SUCCESS:
      case UPDATE_VENDORREVIEWS_SUCCESS:
        return { status: "success", reviewsObj: action.payload,type:"vendorReviews" };
        case FETCH_VENDORREVIEWS_FAIL:
      case UPDATE_VENDORREVIEWS_FAIL:
        return { status: "error", error: action.payload,type:"vendorReviews" };
      default:
        return state;
    }
  }

  export {
    vendorReviewsReducer
  }