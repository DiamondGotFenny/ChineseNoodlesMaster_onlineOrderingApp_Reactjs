import { combineReducers } from "redux"
import { productDetailReducer, productListReducer, productReviewsReducer } from "./productsReducer";
import { searchReduce } from './searchReducer';
import { addressReducer } from './inputAdrsReducer';
import {  setAuthReducer, setUserReducer } from './userReducers';


const reducers=combineReducers(
    {
        products:productListReducer,
        productDetail:productDetailReducer,
        productReviews:productReviewsReducer,
        address_input:addressReducer,
        searchKeyword:searchReduce,
        authInfo:setAuthReducer,
        userInfo:setUserReducer
    }
)
export default reducers;