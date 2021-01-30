import { SET_PREFERENCES } from "constants/actionTypes"

export const setPreferences=(data)=>{
   return {type:SET_PREFERENCES,payload:data}
}