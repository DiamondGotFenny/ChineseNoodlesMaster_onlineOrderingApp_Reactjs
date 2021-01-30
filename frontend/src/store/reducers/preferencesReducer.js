import { SET_PREFERENCES } from "constants/actionTypes"
export const preferencesReducer=(preferences=null,action)=>{
    if (action.type===SET_PREFERENCES) {
        return preferences=action.payload;
    } else {
        return preferences;
    }
}