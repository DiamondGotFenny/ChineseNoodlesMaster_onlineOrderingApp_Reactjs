import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
const useUserLogin = () => {
    const [isSignIn,setisSignIn]=useState(false);
    const userInfo=useSelector(state=>state.userInfo);
    useEffect(()=>{
      if (userInfo.status==="sucess") {
        console.log("true");
        setisSignIn(true)
      }
    },[userInfo.status])
    return ( 
        isSignIn
     );
}
 
export default useUserLogin;
