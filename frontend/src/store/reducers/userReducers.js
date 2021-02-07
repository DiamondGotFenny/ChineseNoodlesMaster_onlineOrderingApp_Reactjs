import { SET_USER_FAIL,SET_USER_SUCCESS, SET_USER_REQUEST,
    SET_AUTH_REQUEST,SET_AUTH_SUCCESS,SET_AUTH_FAIL, SET_AUTH_LOTOUT,
    UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL,
    SET_OAUTH_FAIL, SET_OAUTH_LOTOUT, SET_OAUTH_REQUEST,SET_OAUTH_SUCCESS
} from 'constants/actionTypes';
const initAuthState={
    status:"loading",data:{token:null,isSignin:false},type:null
}
const initUserState={
    status:"loading",data:null
}
export const setAuthReducer=(state=initAuthState,action)=>{
    switch (action.type) {
        case SET_AUTH_REQUEST:
        case SET_OAUTH_REQUEST:
            return state;
        case SET_AUTH_SUCCESS:
            return {status:"sucess",data:action.payload,type:null};
        case SET_OAUTH_SUCCESS:
            return {status:"sucess",data:action.payload,type:"OAuth"};
        case SET_AUTH_FAIL:
            return {status:"error",data:action.payload,type:null};
        case SET_OAUTH_FAIL:
            return {status:"error",data:action.payload,type:"OAuth"};
        case SET_AUTH_LOTOUT:
        case SET_OAUTH_LOTOUT:
            return {status:"logout",data:{token:null,isSignin:false},type:null};
        default:
            return state;
    }
}
export const setUserReducer=(state=initUserState,action)=>{
    switch (action.type) {
        case SET_USER_REQUEST:
        case UPDATE_USER_REQUEST:
            return {status:"loading",data:null};
        case SET_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return {status:"sucess",data:action.payload};
         case SET_AUTH_LOTOUT:
             return {status:"logout",data:null};
        case SET_USER_FAIL:
        case UPDATE_USER_FAIL:
            return state;
        default:
            return state;
    }
}


