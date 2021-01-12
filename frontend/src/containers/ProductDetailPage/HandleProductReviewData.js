import  React, { useEffect }  from 'react';
import { Spinner} from 'react-bootstrap';
import { getProductReviews } from 'actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsContainer from 'containers/ProductDetailPage/ReviewsContainer';

const HandleProductReviewData = (props) => {
    const {id}=props;
    const productReviews=useSelector(state=>state.productReviews);
    const reviews_endpoint=`/ProductReviews?id=${id}`;
    const dispatch=useDispatch();
    useEffect(()=>{
        /*
    I don't use the useGetResource() here is because we need to update the reviews state by using axios.put() in action. in this case, we had to monitor two variables: reviews_processed and productReviews.status, which is unnecessary. and using two design pattern here will add more complexity. instead, we use fetch data in action pattern here. 
    */
            dispatch(getProductReviews(reviews_endpoint));
    //we monitor the review changes here to reload the component when endpoint changes.  
    },[id])
        const renderProductReviews=( productReviews)=>{
            if(productReviews.status==="loading") return (<Spinner animation="border" className="fetch-error" />)
            if (productReviews.status==="error") return (<h4 className="fetch-error">Can not get the revews from server,please reload or contact us</h4>)
        
        if (productReviews.status==="success"&&productReviews.reviewsObj?.hasOwnProperty('reviews')) {
            return <ReviewsContainer reviewsState={productReviews}  />
        } 
        return <div className="fetch-error">Opps, something wrong!Please reload or contact us.</div>
        }
    return ( 
        <>
             {renderProductReviews(productReviews)}
        </>
     );
}
 
export default HandleProductReviewData;