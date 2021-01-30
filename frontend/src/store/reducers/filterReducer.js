import { SET_FILTER } from "constants/actionTypes"
export const filterReducer=(filter="",action)=>{
    if (action.type===SET_FILTER) {
        return filter=action.payload;
    } else {
        return filter;
    }
}