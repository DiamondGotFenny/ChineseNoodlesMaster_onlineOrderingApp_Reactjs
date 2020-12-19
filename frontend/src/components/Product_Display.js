import  React  from 'react';
import Ratings from 'components/ratingStars';
import MyFavorite from './myFavorite';
import AddCartBtn from './AddCartBtn';

function Product_Display(props) {
  const {productImg,productTitle,productIngredients,vendorName,price,rating}=props.item;
    return (
               <div className="product product-grid text-truncate">
                    <img
                      className="mb-2"
                      src={productImg}
                      alt={productTitle}
                    />
                    <h6 className="mb-0 product-name">{productTitle}</h6>
                    <a className="vendor-name" href="#"
                      >{vendorName}</a
                    >
                    <div className="rating-favorites mx-auto text-center">
                        <Ratings rating={rating} interactive={false}/>
                        <MyFavorite/>
                    </div>
                  
                    <div
                      className="row justify-content-around align-items-center flex-nowrap mt-2"
                    >
                      <div className="col-auto pr-1">
                        <span className="text-md price"
                          >${price}</span
                        >
                      </div>
                      <div className="text-sm-right mt-2 mt-sm-0 col-auto pl-1">
                        <AddCartBtn/>
                      </div>
                    </div>
                  </div>
    )
}

export default Product_Display;