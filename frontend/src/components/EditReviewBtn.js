import  React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import RequestDeleteReview from './RequestDeleteReviewModal';
import EditReviewModal from './EditReviewModal';

const EditReviewBtn = (props) => {
    const {item}=props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShowDeleteClose = () => setShowDeleteModal(false);
    const handleShowDelete = () => setShowDeleteModal(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEditModalClose = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    return ( 
        <div className="review-control-btn">
            <Button variant="outline-primary" className='edit-btn mr-3' onClick={handleShowEditModal}>
                <FontAwesomeIcon icon={faEdit}  /> Edit
            </Button>
            <Button variant="outline-danger" onClick={handleShowDelete}>
                <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
            <RequestDeleteReview id={item.id} show={showDeleteModal} handleClose={handleShowDeleteClose}/>
            <EditReviewModal item={item} show={showEditModal} handleClose={handleEditModalClose} />
        </div>
     );
}
 
export default EditReviewBtn;