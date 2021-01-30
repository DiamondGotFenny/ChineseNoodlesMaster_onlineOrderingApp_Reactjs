import {SET_USER_FAIL,SET_USER_REQUEST,SET_USER_SUCCESS,
        SET_AUTH_REQUEST,SET_AUTH_SUCCESS,SET_AUTH_FAIL, SET_AUTH_LOTOUT,
        UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL
} from 'constants/actionTypes';
import  httpService  from 'services/httpService';
import jwt_decode from "jwt-decode";

/*
        do not register again with the same account email and password before you restart the json server, during your test. it will not update the userdb file until you restart it. 
        */
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
        //we temporarily add extra user info here now, we should create those properties to database later in server.
        const {email,name,tel}=data;
       const data_tem={email,name,tel,favorite_foods_list:[],favorite_vendors_list:[],address:[]};
     
        await httpService.postAuth(endpoint_profiles,data_tem,config);
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
       
        /* const {data}=httpService.getAuth(endpoint_profiles);
        console.log(data); */
        const respon= await httpService.postAuth(endpoit_login,data);
        console.log(respon,"respon data");
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
         const userInfo=data.find(item=>item.email===email)
            dispatch({type:SET_USER_SUCCESS,payload:userInfo})
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
        const endpoint_getProfiles=`/userProfiles` ;
        const config={
            headers: {Authorization:`Bearer ${token}`}
        }
       
        try {
            /* because the json server setting, we must get the user info via email then update it via id 
            you don't need to do this in real project as you can configurate it in server
            */
         const respon= await httpService.getAuth(endpoint_getProfiles,config);
         const user=respon.data.find(item=>item.email===email);
         const {id}=user;
        const endpoint_getUser=`/userProfiles/${id}`
         const updatedrespon=await httpService.putAuth(endpoint_getUser,data,config);
            dispatch({type:UPDATE_USER_SUCCESS,payload:data})
        } catch (error) {
            console.error(error);
            dispatch({type:UPDATE_USER_FAIL})
        }
    }
}


  


