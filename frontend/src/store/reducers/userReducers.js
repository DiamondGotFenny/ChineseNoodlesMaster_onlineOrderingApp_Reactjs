import { SET_USER_FAIL,SET_USER_SUCCESS, SET_USER_REQUEST} from 'constants/actionTypes';
const initState={
    name:"",token:"",isSignin:false
}
export const setUserReducer=(state=initState,action)=>{
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

