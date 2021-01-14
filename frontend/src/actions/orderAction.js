import { ADD_TO_CART,REMOVE_FROM_CART,ITEM_QUANTITY_UPDATE,CLEAR_CART
 } from 'constants/actionTypes';

 export const addItemToCart=(data)=>dispatch=>{
     dispatch({type:ADD_TO_CART,payload:data})
 }

 export const removeFromCart=(uuid)=>dispatch=>{
    dispatch({type:REMOVE_FROM_CART,payload:uuid})
 }

 export const itemQuntityUpdate=(quantity,uuid)=>dispatch=>{
    dispatch({type:ITEM_QUANTITY_UPDATE,payload:{quantity,uuid}})
 }

 export const clearShoppingCart=()=>dispatch=>{
    dispatch({type:CLEAR_CART,payload:[]});
 }