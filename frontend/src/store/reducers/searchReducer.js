import { INPUT_SEARCH } from "constants/actionTypes"
export const searchReduce=(search="",action)=>{
    if (action.type===INPUT_SEARCH) {
        return search=action.payload;
    } else {
      return  search;
    }
}