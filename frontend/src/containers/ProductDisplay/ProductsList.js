import  React, { useState }  from 'react';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import Product_Display from 'components/Product_Display';
import useGetResource from 'utilis/customHooks/useGetResource';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductList } from 'actions/productActions';
//import {getUserLocation} from 'services/useGeoLocation';

function ProductsList(props) {
    const query=queryString.parse(useLocation().search)
    const [adrs,setAdrs]=useState("");
    /*we put guangzhou as city query parameter for display purpose only, 
    because the limit of data, you should replace it in real project.
    */
   const search_parmas=query.search?query.search:adrs;
    //const search_parmas=query.search?query.search:adrs;
    //we can get the user's location via ip as default value and may set items paginate in future;
    //if the user didn't input anything in the search bar.
    const endpoint=`/produtList?q=${search_parmas}`;
    const {isLoading,hasError,data:productsList}=useGetResource(endpoint);
    const dispatch=useDispatch()
    const getCurrentPosistion=async()=>{
            /*const city= await getUserLocation();
         /*we put guangzhou as city query parameter for display purpose only, 
        because the limit of data, you should replace it in real project.  */
          const city="guangzhou";
          setAdrs(city)
      }
    useEffect(()=>{
        getCurrentPosistion();
        dispatch(fetchProductList(productsList));
    },[productsList,adrs]);

    const renderProductlist=(productsList)=>{
        return productsList.length===0?(<h4 className="text-center">Sorry, we currently aren't serving your city, but we will soon be operating.</h4>) :productsList.map(item=><Col key={item.id} lg={3}><Product_Display item={item}/></Col>)
     }
    return (
        <Row>
            {renderProductlist(productsList)}
        </Row>
    )
}
export default ProductsList;