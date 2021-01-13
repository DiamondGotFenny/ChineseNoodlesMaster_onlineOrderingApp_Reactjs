import {  FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTDETAIL_SUCCESS
 } from 'constants/actionTypes';


export const fetchProductList=(data)=> dispatch=>{
        dispatch({type:FETCH_PRODUCTLIST_SUCCESS,payload:data})
}

export const getProductDetail=(data)=>dispatch=>{
        dispatch({type:FETCH_PRODUCTDETAIL_SUCCESS,payload:data})
}

