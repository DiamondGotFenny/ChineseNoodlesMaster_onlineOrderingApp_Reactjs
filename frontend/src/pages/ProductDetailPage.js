import  React  from 'react';
import { Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product_Recommendations from 'containers/ProductDetailPage/Product_Recommendations';
import BackToHomeBtn from 'components/BackToHomeBtn';
import HandleProductDetailData from 'containers/ProductDetailPage/HandleProductDetailData';
import HandleProductReviewData from 'containers/ProductDetailPage/HandleProductReviewData';

const ProductDetailPage=()=>{
    const {id}=useParams();
    
      return (
        <Container className="product-detail-container">
            <BackToHomeBtn />
            <HandleProductDetailData id={id}/>
            <HandleProductReviewData id={id}/>
            <Product_Recommendations/>
        </Container>
        
     )
  
}

export default ProductDetailPage;