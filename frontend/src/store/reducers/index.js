import { combineReducers } from "redux"
import { productListReducer } from "./productsReducer";


const reducers=combineReducers(
    {products:productListReducer}
)
export default reducers;