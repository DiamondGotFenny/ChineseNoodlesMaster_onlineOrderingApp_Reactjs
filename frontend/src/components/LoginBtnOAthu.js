import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginBtn=(props)=>{
    const {btn_type,icon,text}=props.btnInfo;
    const handleLogin=(loginType)=>{
        console.log(loginType);
    }
    return (
        <Button className={`btn btn-block ${btn_type} btn-OAlogin`} onClick={()=>{handleLogin(btn_type)}}>
            <FontAwesomeIcon icon={icon} className='btn-OAlogin-icon'/> {text}
        </Button>
    )
}
export default LoginBtn;