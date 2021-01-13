import  React from 'react';
import {  Button, Form } from 'react-bootstrap';
import Ratings from 'components/ratingStars';

const ReviewFormGroup = (props) => {
    const {handleSubmit,handleOnRate,handleReviewTitle,handleCommentOnchange,review}=props;
    return ( 
        <Form className="write-comment-container" onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label >Write Your Reviews</Form.Label>
                <div className="review-block-rate text-danger">
                    <Ratings rating={review.rating} interactive={true} onRate={handleOnRate}/>
                </div>
                <Form.Control type="input" className="form-control animated w-50 mb-3" id="review-title" name="comment" value={review.reviewTitle} onChange={handleReviewTitle} placeholder="Review Title"/>
                <Form.Control as="textarea" className="form-control animated mb-3" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5" value={review.comment} onChange={handleCommentOnchange}/>
                <Button type="submit" className="btn btn-primary btn-lg">
                    Submit
                </Button>
            </Form.Group>
        </Form>
     );
}
 
export default ReviewFormGroup;