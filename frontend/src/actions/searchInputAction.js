import { INPUT_SEARCH } from "constants/actionTypes"

export const handleSearch=(input)=>{
   return {type:INPUT_SEARCH,payload:input}
}