import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfoAction } from 'actions/userAction';

const RequestDeleteAddressModal = (props) => {
    const {show,handleClose,id}=props;
    const userInfo=useSelector(state=>state.userInfo);
    const authInfo=useSelector(state=>state.authInfo);
    const dispatch=useDispatch();
    const handleDeleteAddress=()=>{
        if (authInfo.status==="sucess"&&userInfo.status==="sucess") {
            const updatedAddressList=userInfo.data.address.filter(ele=>ele.id!==id);
            userInfo.data.address=updatedAddressList;
            dispatch(updateUserInfoAction(authInfo,userInfo.data,userInfo.data.id));
        }
        handleClose();
    }
    return ( 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><h4 className="text-center my-3">Are You Sure You Want To Delete This Address?</h4> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="mr-2" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-primary px-4" onClick={handleDeleteAddress}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default RequestDeleteAddressModal;