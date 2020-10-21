import { combineReducers } from "redux"
import { productListReducer } from "./productsReducer";
import { searchReduce } from './searchReducer';
import { addressReducer } from './inputAdrsReducer';


const reducers=combineReducers(
    {
        products:productListReducer,
        address_input:addressReducer,
        searchKeyword:searchReduce
    }
)
export default reducers;