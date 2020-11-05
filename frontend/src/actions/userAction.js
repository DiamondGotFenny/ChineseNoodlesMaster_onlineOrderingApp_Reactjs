import {SET_USER_FAIL,SET_USER_REQUEST,SET_USER_SUCCESS } from 'constants/actionTypes';
import  httpService  from 'services/httpService';


export const userRegisterAction=(data)=>async dispatch=>{
    const endpoint_register="/auth/register";
    const endpoint_profiles="/userProfiles";
    dispatch({type:SET_USER_REQUEST,payload:data});
    try {
        const respon=await httpService.postAuth(endpoint_register,data);
        const jwtToken=respon.data.access_token;
        const config = {
            headers: { Authorization: `Bearer ${jwtToken}` }
        };
        
        const bodyParameters = {
            [data.email]: data
        };
        //we temporarily post to user detail info to the server here
        await httpService.postAuth(endpoint_profiles,bodyParameters,config);
        if (jwtToken) {
            localStorage.setItem('userToken',jwtToken)
        dispatch({type:SET_USER_SUCCESS,payload:{name:data.name,token:jwtToken,isSignin:true}});
        }
    } catch (error) {
        console.error(error.message);
        dispatch({type:SET_USER_FAIL,payload:error.message})
    }
}

export const userLoginAction=(data)=>async dispatch=>{
    const endpoit_login="/auth/login";
    dispatch({type:SET_USER_REQUEST,payload:data});
    try {
        const respon= await httpService.postAuth(endpoit_login,data);
        const jwtToken=respon.data.access_token;
        if (jwtToken) {
            localStorage.setItem('userToken',jwtToken)
            dispatch({type:SET_USER_SUCCESS,payload:{name:data.name,token:jwtToken,isSignin:true}});
        }
    } catch (error) {
        console.error(error.message);
        dispatch({type:SET_USER_FAIL,payload:error.message})
    }
    
}