import  React from 'react';
import { OverlayTrigger,  Tooltip } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const BackToHomeBtn = () => {
    return ( 
        <OverlayTrigger  
            key="Back To Home"
            placement="right"
            overlay={
                <Tooltip id='tooltip-Back To Home'>
                    Back To Home
                </Tooltip>
            }>
            <Link to={"/"} className="back-icon"><FontAwesomeIcon icon={faArrowCircleLeft}/></Link>
          </OverlayTrigger>
     );
}
 
export default BackToHomeBtn;