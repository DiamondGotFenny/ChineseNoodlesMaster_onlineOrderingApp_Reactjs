import  React  from 'react';

const Productlanding=(props)=>{
   const {productImg,productTitle,productDescr,vendorName,price}=props.item;
    return (
        <div className="menu-item mt-3 mx-auto">
        <div className="row align-items-center justify-content-around">
          <div
            className="col-lg-4 product-thumbnail text-md-right text-center"
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
                {productTitle}
              </h3>
              <p className="mb-3">
                {productDescr}
              </p>
              <div className="restaurant-title">
                <span>Restaurant:</span>
                <p><a href="./vendorPage.html">{vendorName}</a></p>
              </div>
              <div className="rating-favorites mx-auto text-center">
                <div className="rating-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                  <i className="far fa-star"></i>
                </div>
                <button
                  className="add-to-favorite-icon"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Add to Favorite"
                >
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mx-auto text-center">
            <div className="price-container">
                <h4 className="price font-weight-bold">{`$${price}`}</h4>
            </div>
            <button
              className="btn btn-outline-primary btn-sm"
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