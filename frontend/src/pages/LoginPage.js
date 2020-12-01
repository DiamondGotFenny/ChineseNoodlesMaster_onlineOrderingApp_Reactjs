import React from 'react';
import {useLocation } from 'react-router-dom';
import  InputAuthenContainer  from 'components/InputAuthenContainer';


const Login=()=>{
    const link=useLocation().pathname;

   
    const inputItems= {email:"",password:""}
    return (
        <InputAuthenContainer 
        link={link} 
        inputItems={inputItems}
      />
    )
}

export default Login;