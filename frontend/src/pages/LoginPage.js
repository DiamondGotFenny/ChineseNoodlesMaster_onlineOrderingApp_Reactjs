import React ,{useState,useEffect}from 'react';
import {useLocation } from 'react-router-dom';
import  InputAuthenContainer  from 'components/InputAuthenContainer';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from 'actions/userAction';
import history from 'services/history';
import { validateInputs } from 'services/formValidation';

const Login=()=>{
    const link=useLocation().pathname;
    const authInfo=useSelector(state=>state.authInfo);
    const [check,setCheck]=useState(false);
    
    const [inputVals,setInputVals]=useState(
        {email:"",password:""}
    );
    const [errors,setErrors]=useState(
        {email:"",password:""}
    )
    const dispatch=useDispatch();
    const handleInputOnchange=(e)=>{
        //replace the value of relative input according to its name attri
        setInputVals({...inputVals,[e.target.name]:e.target.value});
        const errorMsg=validateInputs(e.target.name,e.target.value);
        setErrors({...errors,[e.target.name]:errorMsg})
    }
    const handleSubmit=(e,inputVals,check)=>{
        e.preventDefault();
        console.log(inputVals)
        dispatch(userLoginAction(inputVals,check));
    }
    const handleCheckBox=()=>{
        setCheck(!check)
        //do some remember me thing here
        console.log(!check,"handle");
    }
    
    useEffect(()=>{
        console.log(authInfo.authInfo);
       
        if (authInfo?.authInfo?.isSignin) {
            history.push("/")
        }

        return () => {
            //
          };
      
    },[authInfo])
    return (
        <InputAuthenContainer 
            inputVals={inputVals} 
            onSubmit={handleSubmit} 
            link={link} 
            handleInputOnchange={handleInputOnchange}
            errors={errors}
            check={check}
            handleCheckBox={handleCheckBox}
      />
    )
}

export default Login;