import { SET_FILTER } from "constants/actionTypes"

export const setFilter=(val)=>{
   return {type:SET_FILTER,payload:val}
}