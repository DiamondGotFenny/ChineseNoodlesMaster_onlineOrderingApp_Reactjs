import  React, {  useState }  from 'react';
import {  Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ratings from 'components/ratingStars';
import { useSelector, useDispatch } from 'react-redux';
import update from 'immutability-helper';
import { updateProductDetail } from 'actions/productActions';

const WriteReview = () => {
    const authInfo=useSelector(state=>state.authInfo)
    const userInfo=useSelector(state=>state.userInfo);
    const productDetail=useSelector(state=>state.productDetail)
    const dispatch=useDispatch();
    const [reviewTitle,setreviewTitle]=useState("");
    const [comment,setcomment]=useState("");
    const [rating,setrating]=useState(0);
    const handleCommentOnchange=(e)=>{
        setcomment(e.target.value);
        console.log(comment);
    }
    const handleOnRate=(e)=>{
        setrating(rating=>e.rating)
        console.log(rating);
    }
    const handleReviewTitle=(e)=>{
        setreviewTitle(e.target.value);
        console.log(reviewTitle);
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
        setrating(0);
        setreviewTitle("");
        setcomment("");
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newReviewObj={
          user:userInfo.data.name,
          user_id:userInfo.data.id,
          id:generateReviewId(),//this id is for test use, should genterate the id in server
          rating:rating,
          date:getNowTime(),
          comment_title:reviewTitle,
          comment:comment
        }
        console.log(productDetail);
        const newProductDetail=update(productDetail.product,{
            reviews:{$unshift:[newReviewObj]}
        });
        console.log(newProductDetail);
        dispatch(updateProductDetail(newProductDetail));
        resetStates()
        e.target.reset();
    }
    
    if (userInfo.status==="sucess") {
        return (
            <Form className="write-comment-container" onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label >Write Your Reviews</Form.Label>
                    <div className="review-block-rate text-danger">
                        <Ratings rating={rating} interactive={true} onRate={handleOnRate}/>
                    </div>
                    <Form.Control type="input" className="form-control animated w-50 mb-3" id="review-title" name="comment" value={reviewTitle} onChange={handleReviewTitle} placeholder="Review Title"/>
                    <Form.Control as="textarea" className="form-control animated mb-3" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5" value={comment} onChange={handleCommentOnchange}/>
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