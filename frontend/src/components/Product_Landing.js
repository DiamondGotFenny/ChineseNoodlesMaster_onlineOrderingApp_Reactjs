import  React  from 'react';
import Ratings from 'components/ratingStars';
import MyFavorite from './myFavorite';
import { Link } from 'react-router-dom';

const Productlanding=(props)=>{
   const {productImg,productTitle,productIngredients,vendorInfo,price,rating,id}=props.item;
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
                <p><Link href="./vendorPage.html">{vendorInfo.vendorName}</Link></p>
              </div>
              <div className="rating-favorites mx-auto text-center">
               <Ratings rating={rating}/>
               <MyFavorite id={id}/>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mx-auto text-center">
            <div className="price-container">
                <h4 className="price font-weight-bold">{`$${price}`}</h4>
            </div>
            <button
              className="btn red-outline-btnmd btn-red-fill"
              data-target="#productModal"
              data-toggle="modal"
            >
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    )
}

export default Productlanding;