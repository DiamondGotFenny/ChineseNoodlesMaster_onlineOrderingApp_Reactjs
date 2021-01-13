import  React  from 'react';
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import ReviewsContainer from 'components/ReviewsContainer';
import { getVendorReviews } from 'actions/reviewsAction';
import { useDispatch, useSelector } from 'react-redux';

const HandleVendorReviewsData = (props) => {
    const {id}=props
    const reviewsList=useSelector(state=>state.reviewsList);
    const reviews_endpoint=`/VendorReviews?id=${id}`;
    const dispatch=useDispatch();
    useEffect(()=>{
        /*
    I don't use the useGetResource() here is because we need to update the reviews state by using axios.put() in action. in this case, we had to monitor two variables: reviews_processed and vendorReviews.status, which is unnecessary. and using two design pattern here will add more complexity. instead, we use fetch data in action pattern here. 
    */
            dispatch(getVendorReviews(reviews_endpoint));
    //we monitor the review changes here to reload the component when endpoint changes.    
    },[id])
        const renderVendorReviews=( reviewsList)=>{
            if(reviewsList.status==="loading") return (<Spinner animation="border" className="fetch-error"/>)
            if (reviewsList.status==="error") return (<h4 className="fetch-error">Can not get the revews from server,please reload or contact us</h4>)
        
        if (reviewsList.status==="success"&&reviewsList.reviewsObj?.hasOwnProperty('reviews')) {
            return <ReviewsContainer reviewsState={reviewsList}  />
        } 
        return <div className="fetch-error">Opps, something wrong! Please reload or contact us.</div>
        }
    return ( 
        <>
        {renderVendorReviews(reviewsList)}
        </>
     );
}
 
export default HandleVendorReviewsData;