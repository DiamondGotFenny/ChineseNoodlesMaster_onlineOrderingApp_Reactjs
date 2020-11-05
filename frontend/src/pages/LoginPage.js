import React ,{useState,useEffect}from 'react';
import { Link, useLocation } from 'react-router-dom';
import  InputAuthenContainer  from 'components/InputAuthenContainer';
import { useDispatch } from 'react-redux';
import { userLoginAction } from 'actions/userAction';

const Login=()=>{
    const link=useLocation().pathname;
    const [inputVals,setInputVals]=useState(
        {email:"",password:""}
    );
    const dispatch=useDispatch();
    const handleInputOnchange=(e)=>{
        //replace the value of relative input according to its name attri
        setInputVals({...inputVals,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e,inputVals)=>{
        e.preventDefault();
        console.log(inputVals)
        dispatch(userLoginAction(inputVals));
    }
    return (
        <InputAuthenContainer 
            inputVals={inputVals} 
            onSubmit={handleSubmit} 
            link={link} 
            handleInputOnchange={handleInputOnchange}
      />
    )
}

export default Login;