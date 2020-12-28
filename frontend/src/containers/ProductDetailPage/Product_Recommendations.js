import  React, { useEffect, useState }  from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';
import useGetResource from 'utilis/customHooks/useGetResource';
import RecommendationsCarousel from 'components/RecommendationsCarousel';

const Product_Recommendations = (props) => {
    /*
    in real project, the recomend data should com from a different endpoint.
    */
    const endpoint=`/produtList?_limit=6&q=beef`;
    const {isLoading,hasError,data:productsList}=useGetResource(endpoint);

    
    const renderProductList=(isLoading,hasError,productsList)=>{
        if (isLoading) {
           return <Spinner animation="border" />
        }
        if (hasError) {
            return <h3>Sorry there is Error</h3>
        }
        if (productsList) {
          return (
           <RecommendationsCarousel productsList={productsList} />
          ) 
        }
    }
    return ( 
        <div className="items-recommendation mt-4">
          <div className="row recommendation-title text-center">
              <div className="col"><hr/></div>
              <div className="col-auto"><h4>You May Also Like</h4></div>
              <div className="col"><hr/></div>
          </div>
            {renderProductList(isLoading,hasError,productsList)}
        </div>
     );
}
 
export default Product_Recommendations;