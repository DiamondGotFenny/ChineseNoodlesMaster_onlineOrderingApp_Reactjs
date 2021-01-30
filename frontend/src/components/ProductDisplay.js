import  React  from 'react';
import Ratings from 'components/ratingStars';
import MyFavorite from './myFavorite';
import AddCartBtn from './AddCartBtn';
import { Link } from 'react-router-dom';

function ProductDisplay(props) {
  const {productImg,productTitle,vendorInfo,price,rating,id}=props.item;
  //use for distingush the id type when it is added to the favorite list
  const type="product"; 
    return (
               <div className="product product-grid text-truncate">
                 <Link to={`/product/${id}`}> <img
                      className="mb-2"
                      src={productImg}
                      alt={productTitle}
                    /></Link>
                    <h6 className="mb-0 product-name">{productTitle}</h6>
                    <Link className="vendor-name" to={`/vendors/${vendorInfo.vendor_id}`}>{vendorInfo.vendorName}</Link>
                    <div className="rating-favorites mx-auto text-center">
                        <Ratings rating={rating} interactive={false}/>
                        <MyFavorite id={id} type={type}/>
                    </div>
                  
                    <div
                      className="row justify-content-around align-items-center flex-nowrap mt-2"
                    >
                      <div className="col-auto pr-1">
                        <span className="text-md price"
                          >${price.toFixed(2)}</span
                        >
                      </div>
                      <div className="text-sm-right mt-2 mt-sm-0 col-auto pl-1">
                        <AddCartBtn  product={props.item}/>
                      </div>
                    </div>
                  </div>
    )
}

export default ProductDisplay;