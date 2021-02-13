import  React  from 'react';
import  useGetResource  from 'utilis/customHooks/useGetResource';
import {Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import GetFilteredProductsById from 'utilis/filterProductlist';
import VendorInfo from 'components/VendorInfo';


const HandleVendorDetailData = (props) => {
    const {id,filter,setFilterProductList}=props;
    const vendor_endpoint=`/vendorList?id=${id}`;
    const {isLoading,hasError,data: vendor_data}=useGetResource(vendor_endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const vendor_process=vendor_data.find(item=>item.id===id);
    const renderVendorInfo=(isLoading,hasError,vendor_process)=>{
        if (isLoading) {
         return <div className="fetch-error"><Spinner/></div>
        }
        if (hasError) {
          return <div className="fetch-error">There is an error happens, please reload or contact the web administrator</div>
        }
        if (vendor_process) {
          if (Object.keys(vendor_process).length === 0 && vendor_process.constructor === Object) {
            return ( <h4 className="fetch-error">Can not find any the vendor</h4>)
        }
          return <VendorInfo vendor_process={vendor_process}/>
        }
      }
      useEffect( ()=>{
        if(vendor_process){
          GetFilteredProductsById(vendor_process.menu,filter)
          .then(productList=> {
            setFilterProductList(productList)
          });
         
        }
        
      },[vendor_process,filter])
    return ( 
        <>
            {renderVendorInfo(isLoading,hasError,vendor_process)}
        </>
     );
}
 
export default HandleVendorDetailData;