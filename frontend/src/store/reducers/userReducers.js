import { SET_USER_FAIL,SET_USER_SUCCESS, SET_USER_REQUEST,
    SET_AUTH_REQUEST,SET_AUTH_SUCCESS,SET_AUTH_FAIL, SET_AUTH_LOTOUT,
    UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL
} from 'constants/actionTypes';
const initAuthState={
    loading:false,authInfo:{token:"",isSignin:false}
}
const initUserState={
    status:"loading",userInfo:null
}
export const setAuthReducer=(state=initAuthState,action)=>{
    switch (action.type) {
        case SET_AUTH_REQUEST:
            return {loading:true};
        case SET_AUTH_SUCCESS:
            return {loading:false,authInfo:action.payload};
        case SET_AUTH_FAIL:
            return {loading:false,authInfo:action.payload};
        case SET_AUTH_LOTOUT:
            return {loading:false,authInfo:{token:"",isSignin:false}};
        default:
            return state;
    }
}
export const setUserReducer=(state=initUserState,action)=>{
    switch (action.type) {
        case SET_USER_REQUEST:
            return {status:"loading",userInfo:null};
        case SET_USER_SUCCESS:
            return {status:"sucess",userInfo:action.payload};
        case SET_USER_FAIL:
            return {status:"error",userInfo:action.payload};
        case UPDATE_USER_REQUEST:
            return {status:"loading",userInfo:null};
        case UPDATE_USER_SUCCESS:
            return {status:"sucess",userInfo:action.payload};
        case UPDATE_USER_FAIL:
            return {status:"error",userInfo:action.payload};   
        default:
            return state;
    }
}


