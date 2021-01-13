import { 
    UPDATE_PRODUCTREVIEWS_LOADING,UPDATE_PRODUCTREVIEWS_SUCCESS,UPDATE_PRODUCTREVIEWS_FAIL,
    FETCH_PRODUCTREVIEWS_LOADING, FETCH_PRODUCTREVIEWS_FAIL, FETCH_PRODUCTREVIEWS_SUCCESS,FETCH_VENDORREVIEWS_LOADING,  FETCH_VENDORREVIEWS_SUCCESS,FETCH_VENDORREVIEWS_FAIL,
    UPDATE_VENDORREVIEWS_LOADING,UPDATE_VENDORREVIEWS_SUCCESS,UPDATE_VENDORREVIEWS_FAIL } from 'constants/actionTypes';

    function reviewsReducer(state={status:"loading",reviewsObj:{},type:""},action) {
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
            reviewsReducer
        }