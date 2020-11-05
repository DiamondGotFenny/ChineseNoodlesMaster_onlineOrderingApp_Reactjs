import { combineReducers } from "redux"
import { productListReducer } from "./productsReducer";
import { searchReduce } from './searchReducer';
import { addressReducer } from './inputAdrsReducer';
import {  setUserReducer } from './userReducers';


const reducers=combineReducers(
    {
        products:productListReducer,
        address_input:addressReducer,
        searchKeyword:searchReduce,
        userInfo:setUserReducer
    }
)
export default reducers;