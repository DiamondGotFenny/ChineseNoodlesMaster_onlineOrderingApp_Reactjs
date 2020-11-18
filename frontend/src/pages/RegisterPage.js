import React,{useState,useEffect} from 'react';
import {  useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAction } from 'actions/userAction';
import  history  from 'services/history';
import InputAuthenContainer from 'components/InputAuthenContainer';
import { validateInputs } from 'services/formValidation';


const Register=(props)=>{
    
    const link=useLocation().pathname;
    const dispatch=useDispatch();
    const authInfo=useSelector(state=>state.authInfo)
    const [check,setCheck]=useState(false)
    const [inputVals,setInputVals]=useState(
        {name:"",email:"",tel:"",password:"",password_confirm:""}
    );
    const [errors,setErrors]=useState(
      {name:"",email:"",tel:"",password:"",password_confirm:""}
    );

    const handleInputOnchange= (e)=>{
        //replace the value of relative input according to its name attri
        setInputVals({...inputVals,[e.target.name]:e.target.value});
        const errorMsg=validateInputs(e.target.name,e.target.value);
        setErrors({...errors,[e.target.name]:errorMsg})
    }
    const handleSubmit=(e,inputVals)=>{
        e.preventDefault();
        dispatch(userRegisterAction(inputVals));
    }

    const handleCheckBox=()=>{
        setCheck(!check)
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
        errors={errors} 
        onSubmit={handleSubmit} 
        link={link} 
        handleInputOnchange={handleInputOnchange}
        check={check}
        handleCheckBox={handleCheckBox}
      />
    )
}

export default Register;