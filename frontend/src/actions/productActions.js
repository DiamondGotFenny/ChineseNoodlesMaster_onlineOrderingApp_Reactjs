import httpService from "services/httpService";
import {  FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTDETAIL_SUCCESS,
    UPDATE_PRODUCTDETAIL_LOADING,UPDATE_PRODUCTDETAIL_SUCCESS,UPDATE_PRODUCTDETAIL_FAIL,
    UPDATE_REVIEWS_LOADING,UPDATE_REVIEWS_SUCCESS,UPDATE_REVIEWS_FAIL,
    FETCH_REVIEWS_LOADING,FETCH_REVIEWS_SUCCESS,FETCH_REVIEWS_FAIL
 } from 'constants/actionTypes';


export const fetchProductList=(data)=> dispatch=>{
        dispatch({type:FETCH_PRODUCTLIST_SUCCESS,payload:data})
}

export const getProductDetail=(data)=>dispatch=>{
        dispatch({type:FETCH_PRODUCTDETAIL_SUCCESS,payload:data})
}

export const getProductReviews=(data)=>dispatch=>{
        dispatch({type:FETCH_REVIEWS_SUCCESS,payload:data})
}

export const updateReviews=(data_reviews,authInfo)=> async dispatch=>{
    //we should require the token when update product review in real project
    //but now we omit it here due to the limit of fake json server
    //const token=authInfo.data.token;
    const endpoint_putProduct=`/ProductReviews/${data_reviews.id}`
    try {
        const bodyParameters = data_reviews;
        dispatch({type:UPDATE_REVIEWS_LOADING,payload:{}});
        const {data}=await httpService.put(endpoint_putProduct,bodyParameters);
        dispatch({type:UPDATE_REVIEWS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_REVIEWS_FAIL,payload:error.message})
    }
}
