import { FETCH_PRODUCTLIST_LOADING, FETCH_PRODUCTLIST_SUCCESS,FETCH_PRODUCTLIST_FAIL,FETCH_PRODUCTDETAIL_SUCCESS } from 'constants/actionTypes';
 import  httpService  from 'services/httpService';

export const fetchProductList=(endpoint)=>async dispatch=>{
        if (!endpoint) return;
        try {
            dispatch({type:FETCH_PRODUCTLIST_LOADING,payload:null});
            const {data}=await httpService.get(endpoint);
            if (data) {
                dispatch({type:FETCH_PRODUCTLIST_SUCCESS,payload:data})   
            }
            
        } catch (error) {
          dispatch({type:FETCH_PRODUCTLIST_FAIL,payload:error.message})      
        }
        
}
export const getProductDetail=(data)=>dispatch=>{
        dispatch({type:FETCH_PRODUCTDETAIL_SUCCESS,payload:data})
}

