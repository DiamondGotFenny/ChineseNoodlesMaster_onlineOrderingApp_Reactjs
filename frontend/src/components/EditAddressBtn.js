import  React,{useState} from 'react';
import Button  from 'react-bootstrap/Button';
import EditAddressModal from './EditAddressModal';
import RequestDeleteAddressModal from './RequestDeleteAddressModal';

const EditAddressBtn = (props) => {
    const {item}=props;
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEditModalClose = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShowDeleteClose = () => setShowDeleteModal(false);
    const handleShowDelete = () => setShowDeleteModal(true);
    return ( 
        <>
        <Button variant="outline-primary" onClick={handleShowEditModal}>Edit</Button>
        <Button variant="outline-danger" onClick={handleShowDelete}>Delete</Button>
        <EditAddressModal item={item} show={showEditModal} handleClose={handleEditModalClose}/>
        <RequestDeleteAddressModal id={item.id} show={showDeleteModal} handleClose={handleShowDeleteClose}/>
        </>
     );
}
 
export default EditAddressBtn;