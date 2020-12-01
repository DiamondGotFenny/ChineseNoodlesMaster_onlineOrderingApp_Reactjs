import React from 'react';
import {  useLocation } from 'react-router-dom';
import InputAuthenContainer from 'components/InputAuthenContainer';

const Register=()=>{
    
    const link=useLocation().pathname;
    
    const inputItems={
      name:"",email:"",tel:"",password:"",password_confirm:""
    }
  

    return (
      <InputAuthenContainer 
        link={link} 
        inputItems={inputItems}
      />
    )
}

export default Register;