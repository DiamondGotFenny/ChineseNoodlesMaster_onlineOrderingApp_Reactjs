import { combineReducers } from "redux"
import { productDetailReducer, productListReducer } from "./productsReducer";
import { searchReduce } from './searchReducer';
import { addressReducer } from './inputAdrsReducer';
import {  setAuthReducer, setUserReducer } from './userReducers';
import { shoppingCartReducer } from './orderReducer';
import { reviewsReducer } from "./reviewsReducer";
import { filterReducer } from './filterReducer';
import { preferencesReducer } from './preferencesReducer';


const reducers=combineReducers(
    {
        productsList:productListReducer,
        productDetail:productDetailReducer,
        reviewsList:reviewsReducer,
        shoppingCart:shoppingCartReducer,
        address_input:addressReducer,
        searchKeyword:searchReduce,
        filter:filterReducer,
        preferences:preferencesReducer,
        authInfo:setAuthReducer,
        userInfo:setUserReducer
    }
)
export default reducers;