import  React, { useEffect, useState }  from 'react';
import { Container,  Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useGetResource from 'utilis/customHooks/useGetResource';
import ProductDetailContainer from 'containers/ProductDetailPage/ProductDetailContainer';
import { getProductDetail,getProductReviews } from 'actions/productActions';
import { useDispatch } from 'react-redux';
import ReviewsContainer from 'containers/ProductDetailPage/ReviewsContainer';
import Product_Recommendations from 'containers/ProductDetailPage/Product_Recommendations';
import  history  from 'services/history';

const ProductDetailPage=()=>{
    const {id}=useParams();
    const [product,setproduct]=useState({});
    const [reviewsObj,setreviewsObj]=useState({});
    const product_endpoint=`/produtList?id=${id}`;
    const reviews_endpoint=`/ProductReviews?id=${id}`;
    const dispatch=useDispatch();
    const {isLoading,hasError,data: product_data}=useGetResource(product_endpoint);
    const {isLoading: review_isLoading,hasError: review_hasError,data: reviews_data}=useGetResource(reviews_endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const product_process=product_data.find(product=>product.id===id);
    /*
    we should not retrieve all the reviews from the server,should only display limited numbers
    display more reviews when the user clicks more reviews button.but due to limited function of json server, we now have to get all reviews. 
    */
    const reviews_processed=reviews_data.find(review=>review.id);

     useEffect(()=>{
        if (product_process) {
            dispatch(getProductDetail(product_process));
            setproduct(product_process);
        }
        if (reviews_processed) {
            dispatch(getProductReviews(reviews_processed));
            setreviewsObj(reviews_processed)
        }
       
     },[product_process,reviews_processed])
    
     const renderProductInfo=(isLoading,hasError,product_process)=>{
        if(isLoading) return (<Spinner animation="border" />)
        if (hasError) return (<h4>Can not get the product infomation from server</h4>)
        if (Object.keys(product).length === 0 && product.constructor === Object) {
            return ( <h4>Can not find your product</h4>)
        }
       if (product_process) {
           return <ProductDetailContainer product={product} reviewsNum={reviewsObj.reviews?.length}/>
       } 
       return <div>Opps, something wrong!</div>
     }
     
      return (
        <Container className="product-detail-container">
            {renderProductInfo(isLoading,hasError,product_process)}
            <ReviewsContainer />
            <Product_Recommendations/>
        </Container>
        
     )
  
}

export default ProductDetailPage;