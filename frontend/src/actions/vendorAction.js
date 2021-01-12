import httpService from "services/httpService";
import {FETCH_VENDORREVIEWS_LOADING,  FETCH_VENDORREVIEWS_SUCCESS,FETCH_VENDORREVIEWS_FAIL,
    UPDATE_VENDORREVIEWS_LOADING,UPDATE_VENDORREVIEWS_SUCCESS,UPDATE_VENDORREVIEWS_FAIL
 } from 'constants/actionTypes';

 export const getVendorReviews=(reviews_endpoint)=>async dispatch=>{
    if (!reviews_endpoint) return;
    try {
        dispatch({type:FETCH_VENDORREVIEWS_LOADING,payload:{}});
        const {data}=await httpService.get(reviews_endpoint);
         /*this find() filter is used because the fake Api server always return an array,
can be removed if the data server return an object instead of array

we should not retrieve all the reviews from the server,should only display limited numbers
display more reviews when the user clicks more reviews button.but due to limited function of json server, we now have to get all reviews. 
*/
        const reviews=data.find(review=>review.id);
        dispatch({type:FETCH_VENDORREVIEWS_SUCCESS,payload:reviews})
    } catch (error) {
        dispatch({type:FETCH_VENDORREVIEWS_FAIL,payload:error.message})
    }
   
}

export const updateVendorReviews=(data_reviews,authInfo)=> async dispatch=>{
    //we should require the token when update product review in real project
    //but now we omit it here due to the limit of fake json server
    //const token=authInfo.data.token;
    const endpoint_putProduct=`/VendorReviews/${data_reviews.id}`
    try {
        const bodyParameters = data_reviews;
        dispatch({type:UPDATE_VENDORREVIEWS_LOADING,payload:{}});
        const {data}=await httpService.put(endpoint_putProduct,bodyParameters);
        dispatch({type:UPDATE_VENDORREVIEWS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_VENDORREVIEWS_FAIL,payload:error.message})
    }
}