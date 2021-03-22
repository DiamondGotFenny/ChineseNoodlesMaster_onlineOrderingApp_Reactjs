import React, { useState } from 'react';
import { getProductById } from 'utilis/getProductById';

const OrderDetailItem = (props) => {
  const { preferences, product, quantity } = props.item;
  const { productImg, productTitle, price } = product;
  const calTotal = (price, qty) => {
    return (price * qty).toFixed(2);
  };
  /* const [itemImg, setitemImg] = useState(null);
  getProductById(id)
    .then((item) => setitemImg(item.productImg))
    .catch((error) => console.error(error)); */
  return (
    <li className='list-group-item d-flex justify-content-between lh-condensed'>
      <div className='item-pic col-4'>
        <img
          src={productImg}
          className='img-thumbnail img-fluid'
          alt={productTitle}
        />
      </div>
      <div className='item-detail col-4 px-0'>
        <h5 className='my-0 item-name'>{productTitle}</h5>
        <ul className='text-muted item-desr'>
          {Object.values(preferences).map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      </div>
      <span className='item-qty col-2 text-center'>{quantity}</span>
      <span className='text-muted item-cost col-2'>
        ${calTotal(price, quantity)}
      </span>
    </li>
  );
};

export default OrderDetailItem;
