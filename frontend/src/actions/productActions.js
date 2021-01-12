import httpService from "services/httpService";
import {  FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTDETAIL_SUCCESS,
    FETCH_PRODUCTREVIEWS_LOADING, FETCH_PRODUCTREVIEWS_FAIL, FETCH_PRODUCTREVIEWS_SUCCESS,
    UPDATE_PRODUCTREVIEWS_LOADING,UPDATE_PRODUCTREVIEWS_SUCCESS,UPDATE_PRODUCTREVIEWS_FAIL
 } from 'constants/actionTypes';


export const fetchProductList=(data)=> dispatch=>{
        dispatch({type:FETCH_PRODUCTLIST_SUCCESS,payload:data})
}

export const getProductDetail=(data)=>dispatch=>{
        dispatch({type:FETCH_PRODUCTDETAIL_SUCCESS,payload:data})
}

export const getProductReviews=(reviews_endpoint)=>async dispatch=>{
        if (!reviews_endpoint) return;
        try {
            dispatch({type:FETCH_PRODUCTREVIEWS_LOADING,payload:{}});
            const {data}=await httpService.get(reviews_endpoint);
             /*this find() filter is used because the fake Api server always return an array,
    can be removed if the data server return an object instead of array
    
    we should not retrieve all the reviews from the server,should only display limited numbers
    display more reviews when the user clicks more reviews button.but due to limited function of json server, we now have to get all reviews. 
    */
            const reviews=data.find(review=>review.id);
            if(!reviews) return;
            dispatch({type:FETCH_PRODUCTREVIEWS_SUCCESS,payload:reviews})
        } catch (error) {
            dispatch({type:FETCH_PRODUCTREVIEWS_FAIL,payload:error.message})
        }
       
}

export const updateReviews=(data_reviews,authInfo)=> async dispatch=>{
    //we should require the token when update product review in real project
    //but now we omit it here due to the limit of fake json server
    //const token=authInfo.data.token;
    const endpoint_putProduct=`/ProductReviews/${data_reviews.id}`
    try {
        const bodyParameters = data_reviews;
        dispatch({type:UPDATE_PRODUCTREVIEWS_LOADING,payload:{}});
        const {data}=await httpService.put(endpoint_putProduct,bodyParameters);
        dispatch({type:UPDATE_PRODUCTREVIEWS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_PRODUCTREVIEWS_FAIL,payload:error.message})
    }
}
