import httpService from "services/httpService";
import { FETCH_SHOPPINGCART_REQUET,FETCH_SHOPPINGCART_SUCCESS,FETCH_SHOPPINGCART_FAIL,
    UPDATE_SHOPPINGCART_REQUET,UPDATE_SHOPPINGCART_SUCCESS,UPDATE_SHOPPINGCART_FAIL
 } from 'constants/actionTypes';

 
 export const getShoppingCart=(data)=>dispatch=>{
    try {
        dispatch({type:FETCH_SHOPPINGCART_REQUET,payload:[]});
        dispatch({type:FETCH_SHOPPINGCART_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FETCH_SHOPPINGCART_FAIL,payload:error.message})
    }
 }

 export const updateShoppingCart=(data)=>dispatch=>{
     try {
        dispatch({type:UPDATE_SHOPPINGCART_REQUET,payload:[]});
        dispatch({type:UPDATE_SHOPPINGCART_SUCCESS,payload:data})
     } catch (error) {
        dispatch({type:UPDATE_SHOPPINGCART_FAIL,payload:error.message})
     }
 }