import  React, {  useState }  from 'react';
import {  Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ratings from 'components/ratingStars';
import { useSelector, useDispatch } from 'react-redux';
import update from 'immutability-helper';
import { updateReviews } from 'actions/productActions';

const WriteReview = (props) => {
    const {reviewsObj}=props;
    const authInfo=useSelector(state=>state.authInfo)
    const userInfo=useSelector(state=>state.userInfo);
    const dispatch=useDispatch();
    const initialReview={reviewTitle:"",rating:0,comment:""}
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
    const getNowTime=()=>{
         const timeStr = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
         return timeStr;
    }
    const generateReviewId=()=>{
        const num=Math.floor((Math.random() * 100) + 20);;
        const newId=`00${num}`;
        return newId;
    }
    const resetStates=()=>{
        setNewReview(initialReview)
    }
    const createNewReview=()=>{
        const newReviewObj={
            user:userInfo.data.name,
            user_id:userInfo.data.id,
            id:generateReviewId(),//this id is for test use, should genterate the id in server
            rating:newReview.rating,
            date:getNowTime(),
            comment_title:newReview.reviewTitle,
            comment:newReview.comment
          }
        return update(reviewsObj,{
            reviews:{$unshift:[newReviewObj]}
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const updateReviewObj=createNewReview();
        dispatch(updateReviews(updateReviewObj));
        resetStates()
        e.target.reset();
    }
    

    if (userInfo.status==="sucess") {
        return (
            <Form className="write-comment-container" onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label >Write Your Reviews</Form.Label>
                    <div className="review-block-rate text-danger">
                        <Ratings rating={newReview.rating} interactive={true} onRate={handleOnRate}/>
                    </div>
                    <Form.Control type="input" className="form-control animated w-50 mb-3" id="review-title" name="comment" value={newReview.reviewTitle} onChange={handleReviewTitle} placeholder="Review Title"/>
                    <Form.Control as="textarea" className="form-control animated mb-3" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5" value={newReview.comment} onChange={handleCommentOnchange}/>
                    <Button type="submit" className="btn btn-primary btn-lg">
                        Submit
                    </Button>
                </Form.Group>
             </Form>
        )
    }
    
    return (
        <div className="login-required-text">Want to Write A Review? <Link to={'/login'}>Log in</Link></div>
      );
}
 
export default WriteReview;