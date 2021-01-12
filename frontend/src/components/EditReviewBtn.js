import  React from 'react';
import { OverlayTrigger,  Tooltip } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const EditReviewBtn = (props) => {
    return ( 
        <div>
         <Button variant="primary">
            <FontAwesomeIcon icon={faEdit} /> Edit
        </Button>
        <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} /> Delete
        </Button>
        </div>
     );
}
 
export default EditReviewBtn;