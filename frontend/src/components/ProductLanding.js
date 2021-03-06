import  React  from 'react';
import Ratings from 'components/ratingStars';
import MyFavorite from './myFavorite';
import { Link } from 'react-router-dom';
import AddCartBtn from './AddCartBtn';

const Productlanding=(props)=>{
   const {productImg,productTitle,productIngredients,vendorInfo,price,rating,id}=props.item;
   //use for distingush the id type when it is added to the favorite list
   const type="product";
    return (
        <div className="menu-item mt-3 mx-auto" id={id}>
        <div className="row align-items-center justify-content-around">
          <div
            className="col-lg-4 product-thumbnail"
          >
            <img
              className="img img-fluid"
              src={productImg}
              alt=""
            />
          </div>
          <div
            className="col-lg-6 col-md-8 mt-3 mt-md-0 text-center text-md-left"
          >
            <div className="menu-content">
              <h3 className="food-title">
               <Link to={`/product/${id}`}>{productTitle}</Link> 
              </h3>
              <p className="mb-3">
                {productIngredients}
              </p>
              <div className="restaurant-title">
                <span>Restaurant:</span>
                <Link to={`/vendors/${vendorInfo.vendor_id}`} className='restaurant-title-vendorName'>{vendorInfo.vendorName}</Link>
              </div>
              <div className="rating-favorites mx-auto text-center">
               <Ratings rating={rating} interactive={false}/>
               <MyFavorite id={id} type={type}/>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mx-auto text-center">
            <div className="price-container">
                <h4 className="price font-weight-bold">{`$${price}`}</h4>
            </div>
           <AddCartBtn product={props.item}/>
          </div>
        </div>
      </div>
    )
}

export default Productlanding;