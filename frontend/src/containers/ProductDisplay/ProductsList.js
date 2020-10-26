import  React  from 'react';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import Product_Display from 'components/Product_Display';
import useGetResource from 'utilis/customHooks/useGetResource';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function ProductsList(props) {
    const query=queryString.parse(useLocation().search)
    const search_value=query.search
    //we can get the user's location via ip as default value in the future;
    //if the user didn't input anything in the search bar.
    const endpoint=`/produtList?q=${search_value}`;
    const productsList=useGetResource(endpoint);
    return (
        <Row>
            {productsList.map(item=><Col key={item.id} lg={3}><Product_Display item={item}/></Col>)}
        </Row>
    )
}
export default ProductsList;