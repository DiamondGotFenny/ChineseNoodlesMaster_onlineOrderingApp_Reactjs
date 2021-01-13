import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateReviews,updateVendorReviews } from 'actions/reviewsAction';

const RequestDeleteReview=(props)=>{
  const {show,handleClose,id}=props;
  const reviewsList=useSelector(state=>state.reviewsList);
  const dispatch=useDispatch();
  const handleDeleteReview=()=>{
    if (!reviewsList.reviewsObj?.reviews) return;
    const updatedReviews=reviewsList.reviewsObj.reviews.filter(item=>item.id!==id);
    const newReviewsObj={...reviewsList.reviewsObj,reviews:updatedReviews}
    if (reviewsList.type==="productReviews") {
      dispatch(updateReviews(newReviewsObj));
    }
    if (reviewsList.type==="vendorReviews") {
      dispatch(updateVendorReviews(newReviewsObj));
    }
    handleClose();
  }
  return (
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><h4 className="text-center my-3">Are You Sure You Want To Delete This Review?</h4> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="mr-2" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-primary px-4" onClick={handleDeleteReview}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
}

export default RequestDeleteReview;