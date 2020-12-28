import  React  from 'react';
import AddCartBtn from './AddCartBtn';
import { Link } from 'react-router-dom';
import useGetResource from './../utilis/customHooks/useGetResource';

const CarouselItem=(props)=>{
    const {imgLink,itemInfo,infoLine1,infoLine2,itemLink,btnInfo,product_id}=props.item;
    const product_endpoint=`/produtList?id=${product_id}`;
    const {isLoading,hasError,data: product_data}=useGetResource(product_endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const product_process=product_data.find(product=>product.id===product_id);
    const renderBtn=()=>{
        if (isLoading||hasError) {
            return <div>Loading....</div>
        }
        if (product_process) {
            return <AddCartBtn product={product_process} />
    }
        }
        
    return(
        <>
           <Link to={itemLink}>
            <img  className="d-block img-responsive fixed-img-height" src={imgLink} alt={itemInfo} />
           </Link> 
             <div className="carousel-caption caption-content dark px-2">
                <h2 className="text-muted">{infoLine1}</h2>
                <h5>{infoLine2}</h5>
                <div className="btn-group">
                    {renderBtn()}
                </div>
             </div>
         </>
    )
}
export default CarouselItem;