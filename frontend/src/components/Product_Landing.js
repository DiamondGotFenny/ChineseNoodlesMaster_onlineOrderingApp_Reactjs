import  React  from 'react';

const Productlanding=(props)=>{
   const {productImg,productTitle,productDescr,vendorName,price}=props.item;
    return (
        <div class="menu-item mt-3 mx-auto">
        <div class="row align-items-center justify-content-around">
          <div
            class="col-lg-4 product-thumbnail text-md-right text-center"
          >
            <img
              class="img img-fluid"
              src={productImg}
              alt=""
            />
          </div>
          <div
            class="col-lg-6 col-md-8 mt-3 mt-md-0 text-center text-md-left"
          >
            <div class="menu-content">
              <h3 class="food-title">
                {productTitle}
              </h3>
              <p class="mb-3">
                {productDescr}
              </p>
              <div class="restaurant-title">
                <span>Restaurant:</span>
                <p><a href="./vendorPage.html">{vendorName}</a></p>
              </div>
              <div class="rating-favorites mx-auto text-center">
                <div class="rating-stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half"></i>
                  <i class="far fa-star"></i>
                </div>
                <button
                  class="add-to-favorite-icon"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Add to Favorite"
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 mx-auto text-center">
            <div class="price-container">
                <h4 class="price font-weight-bold">{`$${price}`}</h4>
            </div>
            <button
              class="btn btn-outline-primary btn-sm"
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