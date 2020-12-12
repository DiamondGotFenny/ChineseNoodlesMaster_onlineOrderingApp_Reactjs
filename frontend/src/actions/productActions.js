import httpService from "services/httpService";
import { FETCH_PRODUCTLIST_LOADING, FETCH_PRODUCTLIST_SUCCESS, FETCH_PRODUCTLIST_FAIL,
    FETCH_PRODUCTDETAIL_LOADING,FETCH_PRODUCTDETAIL_SUCCESS,FETCH_PRODUCTDETAIL_FAIL,
    UPDATE_PRODUCTDETAIL_LOADING,UPDATE_PRODUCTDETAIL_SUCCESS,UPDATE_PRODUCTDETAIL_FAIL
 } from 'constants/actionTypes';


export const fetchProductList=(data)=> dispatch=>{
    try {
        dispatch({type:FETCH_PRODUCTLIST_LOADING,payload:[]});
        dispatch({type:FETCH_PRODUCTLIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FETCH_PRODUCTLIST_FAIL,payload:error.message})
    }
}

export const getProductDetail=(data)=>dispatch=>{
    
    try {
        dispatch({type:FETCH_PRODUCTDETAIL_LOADING,payload:{}});
        dispatch({type:FETCH_PRODUCTDETAIL_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FETCH_PRODUCTDETAIL_FAIL,payload:error.message})
    }
}

export const updateProductDetail=(data_product,authInfo)=> async dispatch=>{
    //we should require the token when update product review in real project
    //but now we omit it here
    //const token=authInfo.data.token;
    const endpoint_putProduct=`/produtList/${data_product.id}`
    try {
        const bodyParameters = data_product;
        dispatch({type:UPDATE_PRODUCTDETAIL_LOADING,payload:{}});
        const {data}=await httpService.put(endpoint_putProduct,bodyParameters);
        dispatch({type:UPDATE_PRODUCTDETAIL_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_PRODUCTDETAIL_FAIL,payload:error.message})
    }
}
