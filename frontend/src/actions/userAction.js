import {SET_USER_FAIL,SET_USER_REQUEST,SET_USER_SUCCESS,
        SET_AUTH_REQUEST,SET_AUTH_SUCCESS,SET_AUTH_FAIL, SET_AUTH_LOTOUT,
        UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL
} from 'constants/actionTypes';
import  httpService  from 'services/httpService';
import jwt_decode from "jwt-decode";

export const userRegisterAction=(data)=>async dispatch=>{
    const endpoint_register="/auth/register";
    const endpoint_profiles="/userProfiles";
    dispatch({type:SET_AUTH_REQUEST,payload:data});
    try {
        const respon=await httpService.postAuth(endpoint_register,data);
        const jwtToken=respon.data.access_token;
        const config = {
            headers: { Authorization: `Bearer ${jwtToken}` }
        };
        //we temporarily add extra user info here now, we should create those properties to database later in server 
       const data_tem={...data,favorite_foods_list:[],favorite_vendors_list:[],address:[]};
        const bodyParameters = {
            [data.email]: data_tem
        };
        //we temporarily post to user detail info to the server here
        await httpService.postAuth(endpoint_profiles,bodyParameters,config);
        if (jwtToken) {
            dispatch({type:SET_AUTH_SUCCESS,payload:{token:jwtToken,isSignin:true}});
        }
    } catch (error) {
        console.error(error.message);
        dispatch({type:SET_AUTH_FAIL,payload:error.message})
    }
}

export const userLoginAction=(data,check)=>async dispatch=>{
    const endpoit_login="/auth/login";
    dispatch({type:SET_AUTH_REQUEST,payload:data});
    try {
        const respon= await httpService.postAuth(endpoit_login,data);
        const jwtToken=respon.data.access_token;
        if (jwtToken) {
            if (check) {
                localStorage.setItem('userToken',jwtToken)
                //use js-cookie lib here if you want to use cookies
                //Cookie.set('userToken', JSON.stringify(jwtToken));
            }
            
            dispatch({type:SET_AUTH_SUCCESS,payload:{token:jwtToken,isSignin:true}});
        }
    } catch (error) {
        console.error(error.message);
        dispatch({type:SET_AUTH_FAIL,payload:error.message})
    }
}

export const userLogoutAction = () => (dispatch) => {
    //Cookie.remove("userToken");
    localStorage.removeItem('userToken');
    dispatch({ type: SET_AUTH_LOTOUT });
  }

export const getUserInfoAction=(authInfo)=>async dispatch=>{
    const token=authInfo.data.token;
    dispatch({type:SET_USER_REQUEST,payload:authInfo});
    if (token) {
        const email=jwt_decode(token).email;
        const endpoint_getUser=`/userProfiles?email=${email}` ;
        const config={
            headers: {Authorization:`Bearer ${token}`}
        }
        try {
         const {data}= await httpService.getAuth(endpoint_getUser,config);
            dispatch({type:SET_USER_SUCCESS,payload:data[email]})
        } catch (error) {
            console.error(error);
            dispatch({type:SET_USER_FAIL,payload:error.message})
        }
    }
}

export const updateUserInfoAction=(authInfo,data)=>async dispatch=>{
    const token=authInfo.data.token;
    dispatch({type:UPDATE_USER_REQUEST,payload:data});
    if (token) {
        const email=jwt_decode(token).email;
        const endpoint_getUser=`/userProfiles?email=${email}` ;
        const config={
            headers: {Authorization:`Bearer ${token}`}
        }
        const bodyParameters = {
            [data.email]: data
        };
        try {
         const {data}= await httpService.postAuth(endpoint_getUser,bodyParameters,config);
            dispatch({type:UPDATE_USER_SUCCESS,payload:data[email]})
        } catch (error) {
            console.error(error);
            dispatch({type:UPDATE_USER_FAIL,payload:error.message})
        }
    }
}


  


