import {SET_USER_FAIL,SET_USER_REQUEST,SET_USER_SUCCESS,
        SET_AUTH_REQUEST,SET_AUTH_SUCCESS,SET_AUTH_FAIL, SET_AUTH_LOTOUT
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
        
        const bodyParameters = {
            [data.email]: data
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
                console.log('remember me done');
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
    console.log(authInfo);
    const token=authInfo?.authInfo?.token;
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


  


