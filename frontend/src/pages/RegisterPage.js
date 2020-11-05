import React,{useState,useEffect} from 'react';

import {  useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAction } from 'actions/userAction';
import  history  from 'services/history';
import InputAuthenContainer from 'components/InputAuthenContainer';

const Register=(props)=>{
    
    const link=useLocation().pathname;
    const userInfo=useSelector(state=>state.userInfo)
    const [checkTerms,setCheckTerms]=useState(false)
    const dispatch=useDispatch();
    const [inputVals,setInputVals]=useState(
        {name:"",email:"",tel:"",password:"",password_confirm:""}
    );
    const handleInputOnchange=(e)=>{
        //replace the value of relative input according to its name attri
        setInputVals({...inputVals,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e,inputVals)=>{
        e.preventDefault();
        console.log(inputVals)
        dispatch(userRegisterAction(inputVals));
    }

    const handleCheckBox=()=>{
        setCheckTerms(!checkTerms)
    }

    useEffect(()=>{
        console.log(userInfo.userInfo);
        let isSignin=false;
        userInfo.userInfo?isSignin=userInfo.userInfo.isSignin:isSignin=false;
        if (isSignin) {
            history.push("/")
        }

        return () => {
            //
          };
      
    },[userInfo])

    return (
      <InputAuthenContainer 
        inputVals={inputVals} 
        onSubmit={handleSubmit} 
        link={link} 
        handleInputOnchange={handleInputOnchange}
        checkTerms={checkTerms}
        handleCheckBox={handleCheckBox}
      />
    )
}

export default Register;