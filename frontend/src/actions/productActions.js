import httpService from "services/httpService";
import { FETCH_PRODUCTLIST_LOADING, 
    FETCH_PRODUCTLIST_SUCCESS, 
    FETCH_PRODUCTLIST_FAIL } from 'constants/actionTypes';


export const fetchProductList=()=>async dispatch=>{
    try {
        dispatch({type:FETCH_PRODUCTLIST_LOADING});
        const {data}=await httpService.get('/produtList?search=beef');
        console.log(data);
        dispatch({type:FETCH_PRODUCTLIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FETCH_PRODUCTLIST_FAIL,payload:error.message})
    }
}

