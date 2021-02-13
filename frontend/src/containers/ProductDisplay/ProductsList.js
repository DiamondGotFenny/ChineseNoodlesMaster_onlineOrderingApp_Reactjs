import  React  from 'react';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import ProductDisplay from 'components/ProductDisplay';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from 'actions/productActions';
import  Spinner  from 'react-bootstrap/Spinner';
import {preferencesFilterProducts} from 'utilis/preferencesFilterProducts';

function ProductsList() {
    const query=useLocation().search;
    const search=query.replace("?search=","");
     const endpoint=`/produtList${search}`;
    const dispatch=useDispatch();
    const productsList=useSelector(state=>state.productsList);
    const preferences=useSelector(state=>state.preferences);
    const [filteredProductsList,setfilteredProductsList]=useState([]);
    useEffect(()=>{
        dispatch(fetchProductList(endpoint));
    },[query]);
    useEffect(()=>{
        if (productsList.products){
            setfilteredProductsList(productsList.products);
            if (preferences) {
                const filteredProducts=preferencesFilterProducts(productsList.products,preferences);
                setfilteredProductsList(filteredProducts);
            }
        }
       
       
    },[preferences,productsList.status]);

    const renderProductlist=(productsList)=>{
        if (productsList.status==="loading") {
            return <div className="fetch-error"><Spinner /></div>
        }
        if (productsList.status==="error") {
            return <div className="fetch-error">Sorry, something wrong. Please reload or contact us.</div>
        }
        if (productsList.status==="success") {
            return filteredProductsList.length===0?(<h4 className="text-center">Sorry, Can not find what you want. Please try later.</h4>) :filteredProductsList.map(item=><Col key={item.id} lg={3}><ProductDisplay item={item}/></Col>)
        }
        
     }
    return (
        <Row>
            {renderProductlist(productsList)}
        </Row>
    )
}
export default ProductsList;