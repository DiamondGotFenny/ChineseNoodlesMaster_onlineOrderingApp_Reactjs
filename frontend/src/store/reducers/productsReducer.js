import { 
  FETCH_PRODUCTLIST_LOADING, FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTLIST_FAIL,
  FETCH_PRODUCTDETAIL_SUCCESS} from 'constants/actionTypes';
  
  const initialProductListState={status:"loading",products:[]}
function productListReducer(state = initialProductListState, action) {
  switch (action.type) {
    case FETCH_PRODUCTLIST_LOADING:
      return {status: "loading",products:action.payload}
    case FETCH_PRODUCTLIST_SUCCESS:
    return {...state, status: "success", products: action.payload };
    case FETCH_PRODUCTLIST_FAIL:
      return { status: "error", error: action.payload }; 
    default:
      return state;
   }
  }
function productDetailReducer(state={status:'loading',product:{}},action) {
  if (action.type===FETCH_PRODUCTDETAIL_SUCCESS) {
    return { status: "sucess", product: action.payload };
  }
  return state;
}
  

  export {
    productListReducer,
    productDetailReducer
  }