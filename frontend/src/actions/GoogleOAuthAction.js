import { SET_OAUTH_FAIL, SET_OAUTH_LOTOUT, SET_OAUTH_REQUEST,SET_OAUTH_SUCCESS } from 'constants/actionTypes';
import  httpService  from 'services/httpService';

export const signIn_OAuth = data =>async dispatch=> {
  const endpoit_login="/auth/OAuth";
  const endpoint_profiles="/userProfiles";
  dispatch({type:SET_OAUTH_REQUEST,payload:data});
    try {
        const respon= await httpService.postAuth(endpoit_login,data);
        const {access_token,type,isRegistered}=respon.data; 
        if (access_token&&isRegistered) {
            dispatch({type:SET_OAUTH_SUCCESS,payload:{token:access_token,isSignin:true,type}}) ;
            localStorage.setItem('userToken',access_token)
            return;
        }
        /*
        do not register again with the same account email and password before you restart the json server, during your test. it will not update the userdb file until you restart it. 
        */
        const config = {
            headers: { Authorization: `Bearer ${access_token}` }
        };
        //we temporarily add extra user info here now, we should create those properties to database later in server 
        const {email,name}=data;
        const data_tem={email,name,tel:"",favorite_foods_list:[],favorite_vendors_list:[],address:[]};
       
        //we temporarily post to user detail info to the server here
        await httpService.postAuth(endpoint_profiles,data_tem,config);
        if (access_token) {
            dispatch({type:SET_OAUTH_SUCCESS,payload:{token:access_token,isSignin:true,type}});
            localStorage.setItem('userToken',access_token)
        }
    } catch (error) {
        console.error(error.message);
        dispatch({type:SET_OAUTH_FAIL,payload:error.message}) ;
    }
  
  };
  
  export const signOut_OAuth = () =>dispatch=> {
    dispatch( {
      type: SET_OAUTH_LOTOUT
    });
  };