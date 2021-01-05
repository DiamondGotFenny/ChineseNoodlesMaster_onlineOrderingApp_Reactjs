import  React, {  useEffect, useState }  from 'react';
import Review from 'components/Review';
import WriteReview from 'components/WriteReview';
import { useSelector } from 'react-redux';
import  Button  from 'react-bootstrap/Button';
import { Accordion, Card} from 'react-bootstrap';

const ReviewsContainer = () => {
    const productReviews=useSelector(state=>state.productReviews);
    const [reviews,setreviews]=useState([]);
    useEffect(()=>{
        if (productReviews.status==="sucess") {
            setreviews(productReviews.reviewsObj.reviews);
        }
    },[productReviews.status]) 
    const renderReviews=(reviews)=>{
        if (reviews.length<=0) {
            return <h4>There is no reviews for this dish now.</h4>
        }
        //each review should have an unique id as key, but the test reviews have duplicated id
        //so change the key to id not index in real project
        const firstReviewsArr=reviews.slice(0,4);
        const moreReviewsArr=reviews.slice(4);
        return  (
        <>
            { firstReviewsArr.map((item,idx)=><Review key={idx} item={item}/>)}
            <Accordion >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} className="more-reviews text-center" variant="link" eventKey="0">
                        More Reviews
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{ moreReviewsArr.map((item,idx)=><Review key={idx} item={item}/>)}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
        )
    }
    const renderWriteReview=(productReviews)=>{
        if (productReviews.reviewsObj) {
            return <WriteReview reviewsObj={productReviews.reviewsObj}/>
        }
        return <h4>Loading</h4>
    }
    return ( 
        <div className="review-container">
            <h2>Reviews:</h2>
            <ul className="reviews" id="reviews">
                {renderReviews(reviews)}
            </ul>
            <hr/>
            {renderWriteReview(productReviews)}
        </div> 
    );
}
 
export default ReviewsContainer;