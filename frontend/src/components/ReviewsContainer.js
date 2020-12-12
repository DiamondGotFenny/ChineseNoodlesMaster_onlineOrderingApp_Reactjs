import  React, {  useEffect, useState }  from 'react';
import Review from 'components/Review';
import WriteReview from './WriteReview';
import { useSelector } from 'react-redux';

const ReviewsContainer = () => {
    const productDetail=useSelector(state=>state.productDetail);
    const [reviews,setreviews]=useState([]);
    useEffect(()=>{
        if (productDetail.status==="sucess") {
            setreviews(productDetail.product.reviews);
        }
    },[productDetail.status])
    const renderReviews=(reviews)=>{
        if (reviews.length<=0) {
            return <h4>There is no reviews for this dish now.</h4>
        }
        //each review should have an unique id as key, but the test reviews have duplicated id
        //so change the key to id not index in real project
        return reviews.map((item,idx)=><Review key={idx} item={item}/>)
    }
    
    return ( 
        <div className="review-container">
            <h2>Reviews:</h2>
            <ul className="reviews" id="reviews">
            {renderReviews(reviews)}
            </ul>
            
            <a href="/" className="more-reviews text-right">More Reviews</a>
            <hr/>
            <WriteReview/>
        </div> 
    );
}
 
export default ReviewsContainer;