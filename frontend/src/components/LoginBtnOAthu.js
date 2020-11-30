import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginBtn=(props)=>{
    const {btn_type,icon,text}=props.btnInfo
    return (
        <Button className={`btn btn-block ${btn_type} btn-OAlogin`}>
            <FontAwesomeIcon icon={icon} className='btn-OAlogin-icon'/> {text}
        </Button>
    )
}
export default LoginBtn;