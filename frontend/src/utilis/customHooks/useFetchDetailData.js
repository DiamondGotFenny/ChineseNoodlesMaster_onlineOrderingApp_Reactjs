import  { useEffect, useState }  from 'react';
import useGetResource from 'utilis/customHooks/useGetResource';
import { getProductDetail } from 'actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { getProductReviews } from 'actions/reviewsAction';
const useFetchDetailData = (id,endpoint) => {
    const [ouputData,setoutputData]=useState({});
    console.log(ouputData,'ouputData');
    const dispatch=useDispatch();
    const {isLoading,hasError,data,setquery}=useGetResource(endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const data_processed=data.find(item=>item.id===id);
    useEffect(()=>{

        /*since the useGetResource() has the query as state, and has a setquery function, we need to reset the query state when the params is changed.
        */
       setquery(endpoint);
       if (data_processed&&endpoint===`/produtList?id=${id}`) {
           dispatch(getProductDetail(data_processed));
       }
       if (data_processed&&endpoint===`/ProductReviews?id=${id}`) {
           dispatch(getProductReviews(data_processed))
       }
       setoutputData(data_processed);
    },[data_processed,id])
    return {ouputData,isLoading,hasError,setoutputData};
}
 
export default useFetchDetailData;