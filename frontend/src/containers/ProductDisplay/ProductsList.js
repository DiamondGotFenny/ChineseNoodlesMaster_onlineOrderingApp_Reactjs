import  React, { useEffect, useState }  from 'react';
import httpService from 'services/httpService';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import Product_Display from 'components/Product_Display';

function ProductsList(props) {
    const [productsList,setProductsList]=useState([]);
    //I fetch products list data here because I think the other 
    //components don't need to know this pieces of data.
    //and the length of this data will be limited in future.
    async function fetchProductList() {
        const {data}=await httpService.get('/produtList');
        setProductsList(data)
    }
    useEffect(()=>{ fetchProductList() },[]);
    return (
        <Row>
            {productsList.map(item=><Col key={item.id} lg={3}><Product_Display item={item}/></Col>)}
        </Row>
    )
}
export default ProductsList;