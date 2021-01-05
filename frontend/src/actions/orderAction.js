import { ADD_TO_CART,REMOVE_FROM_CART,ITEM_QUANTITY_UPDATE,CLEAR_CART
 } from 'constants/actionTypes';

 export const addItemToCart=(data)=>dispatch=>{
     dispatch({type:ADD_TO_CART,payload:data})
 }

 export const removeFromCart=(id)=>dispatch=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
 }

 export const itemQuntityUpdate=(quantity,id)=>dispatch=>{
    dispatch({type:ITEM_QUANTITY_UPDATE,payload:{quantity,id}})
 }

 export const clearShoppingCart=()=>dispatch=>{
    dispatch({type:CLEAR_CART,payload:[]});
 }