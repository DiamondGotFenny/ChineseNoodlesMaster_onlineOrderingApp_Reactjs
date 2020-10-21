
import { INPUT_ADDRESS } from 'constants/actionTypes';
export const addressReducer=(address="",action)=>{
    if (action.type===INPUT_ADDRESS) {
        return address=action.payload;
    } else {
        return address;
    }
}