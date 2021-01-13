import  React, {  useState }  from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import update from 'immutability-helper';
import { updateReviews,updateVendorReviews } from 'actions/reviewsAction';
import ReviewFormGroup from './ReviewFormGroup';

const WriteReview = (props) => {
    const {reviewsObj,type}=props;
    const authInfo=useSelector(state=>state.authInfo);
    const userInfo=useSelector(state=>state.userInfo);
    const dispatch=useDispatch();
    const initialReview={reviewTitle:"",rating:0,comment:""};
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
        /*
        it is possible to update the reviews list in action via restAPI in real project, so that we don't have to upload the whole reviews list. but the fake json server is not able to this. 
        */
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
        if (!type) return;
        const newReviewObj=createNewReview();
        if (type==="productReviews" ) {
            dispatch(updateReviews(newReviewObj));
        }
        else {
            dispatch(updateVendorReviews(newReviewObj));
        }
        resetStates();
        e.target.reset();
    }
    

    if (userInfo.status==="sucess") {
        return (
             <ReviewFormGroup 
             handleSubmit={handleSubmit} 
             handleOnRate={handleOnRate} 
             handleReviewTitle={handleReviewTitle}
             handleCommentOnchange={handleCommentOnchange}
             review={newReview}
             />
        )
    }
    
    return (
        <div className="login-required-text">Want to Write A Review? <Link to={'/login'}>Log in</Link></div>
      );
}
 
export default WriteReview;