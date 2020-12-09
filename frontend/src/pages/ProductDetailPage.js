import  React, { useEffect, useState }  from 'react';
import { Card, Container, Row, Button, Form, InputGroup, ToggleButton, ButtonGroup, FormControl, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useGetResource from 'utilis/customHooks/useGetResource';
import MyFavorite from 'components/myFavorite';
import Ratings from 'components/ratingStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Review from 'components/Review';
import ProductDetailContainer from './../components/ProductDetailContainer';

const ProductDetailPage=()=>{
    const {id}=useParams();
    const [product,setproduct]=useState({});
    const endpoint=`/produtList?id=${id}`;
    //const data=useGetResource(endpoint).find(product=>product.id===id);
    const {isLoading,hasError,data}=useGetResource(endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const data_process=data.find(product=>product.id===id);
    
     useEffect(()=>{
        if (data_process) {
            setproduct(data_process);
        }
     },[data_process])
    console.log(product,"product");
    
     if(isLoading) return (<Container className="product-detail-container"><Spinner animation="border" /></Container>)
     if (hasError) return (<Container className="product-detail-container"><h4>Can not get the product infomation from server</h4></Container>)
     if (Object.keys(product).length === 0 && product.constructor === Object) {
         return ( <Container className="product-detail-container">
             <h4>can not find your product</h4>
         </Container>)
     }
      return (
        <ProductDetailContainer product={product}/>
     )
  
}

export default ProductDetailPage;