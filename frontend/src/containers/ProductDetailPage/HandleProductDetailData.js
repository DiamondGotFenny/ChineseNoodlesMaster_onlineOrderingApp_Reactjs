import  React, { useEffect, useState }  from 'react';
import {  Spinner} from 'react-bootstrap';
import useGetResource from 'utilis/customHooks/useGetResource';
import ProductDetailContainer from 'containers/ProductDetailPage/ProductDetailContainer';
import { getProductDetail } from 'actions/productActions';
import { useDispatch } from 'react-redux';


const HandleProductDetailData = (props) => {
    const {id}=props;
    const [product,setproduct]=useState({});
    const product_endpoint=`/produtList?id=${id}`;
    const dispatch=useDispatch();
    const {isLoading,hasError,data: product_data,setquery}=useGetResource(product_endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const product_process=product_data.find(product=>product.id===id);
    useEffect(()=>{
        /*since the useGetResource() has the query as state, and has a setquery function, we need to reset the query state when the params is changed.
        */
       setquery(`/produtList?id=${id}`);
       if (product_process) {
           dispatch(getProductDetail(product_process));
           setproduct(product_process);
       }
    },[product_process,id])
    const renderProductInfo=(isLoading,hasError,product_process)=>{
        if(isLoading) return (<Spinner className="fetch-error" animation="border" />)
        if (hasError) return (<h4 className="fetch-error">Can not get the product infomation from server,please reload or contact us</h4>)
        
       if (product_process) {
        if (Object.keys(product).length === 0 && product.constructor === Object) {
            return ( <h4 className="fetch-error">Can not find your product</h4>)
        }
           return <ProductDetailContainer product={product} reviewsNum={3}/>
       } 
       return <div className="fetch-error">Opps, something wrong!Please reload or contact us.</div>
     }
    return ( 
        <>
        {renderProductInfo(isLoading,hasError,product_process)}
        </>
     );
}
 
export default HandleProductDetailData;