import { 
  FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTDETAIL_SUCCESS} from 'constants/actionTypes';
  
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
  

  export {
    productListReducer,
    productDetailReducer
  }