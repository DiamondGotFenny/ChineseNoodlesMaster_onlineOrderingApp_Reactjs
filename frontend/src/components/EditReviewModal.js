import  React, { useState }  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateReviews,updateVendorReviews } from 'actions/reviewsAction';
import ReviewFormGroup from './ReviewFormGroup';
import  update  from 'immutability-helper';

const EditReviewModal = (props) => {
  const {show,handleClose,item}=props;
  const reviewsList=useSelector(state=>state.reviewsList);
  const dispatch=useDispatch();
  const initialReview={reviewTitle:item.comment_title,rating:item.rating,comment:item.comment};
  const [newReview,setNewReview]=useState(initialReview);
    const handleCommentOnchange=(e)=>{
        setNewReview({...newReview,comment:e.target.value})
    }
    const handleOnRate=(e)=>{
        setNewReview({...newReview,rating:e.rating})
    }
    const handleReviewTitle=(e)=>{
       setNewReview({...newReview,reviewTitle:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newReviewObj={...item,comment:newReview.comment,comment_title:newReview.reviewTitle,rating:newReview.rating};
      if (reviewsList.reviewsObj) {
        /*we should not download the whole reviewlist in real project,but due to the limit of json server, we do it here temperporly
        */
        const index=reviewsList.reviewsObj.reviews.findIndex(ele=>ele.id===item.id);
        const updatedReviewsObj= update(reviewsList.reviewsObj,{
          reviews:{[index]:{$set:newReviewObj}}
      });
      if (reviewsList.type==="productReviews") {
        dispatch(updateReviews(updatedReviewsObj));
      }
      if (reviewsList.type==="vendorReviews") {
        dispatch(updateVendorReviews(updatedReviewsObj))
      }
        handleClose();
      }
    }
    
    return ( 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewFormGroup 
              handleSubmit={handleSubmit} 
              handleOnRate={handleOnRate} 
              handleReviewTitle={handleReviewTitle}
              handleCommentOnchange={handleCommentOnchange}
              review={newReview}
              /> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="mr-2" onClick={handleClose}>
              Cancel
            </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default EditReviewModal;