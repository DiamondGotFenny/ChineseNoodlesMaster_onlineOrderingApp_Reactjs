import { SET_USER_FAIL,SET_USER_SUCCESS, SET_USER_REQUEST,
    SET_AUTH_REQUEST,SET_AUTH_SUCCESS,SET_AUTH_FAIL, SET_AUTH_LOTOUT
} from 'constants/actionTypes';
const initState={
    loading:false,authInfo:{token:"",isSignin:false}
}
export const setAuthReducer=(state=initState,action)=>{
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
export const setUserReducer=(state=null,action)=>{
    switch (action.type) {
        case SET_USER_REQUEST:
            return {loading:true};
        case SET_USER_SUCCESS:
            return {loading:false,userInfo:action.payload};
        case SET_USER_FAIL:
            return {loading:false,userInfo:action.payload}
        default:
            return state;
    }
}


