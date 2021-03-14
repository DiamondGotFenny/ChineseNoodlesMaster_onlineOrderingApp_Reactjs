import React, { useState } from 'react';
import { getProductById } from 'utilis/getProductById';

const OrderDetailItem = (props) => {
  const { id, name, preferences, qty, total } = props.item;
  const [itemImg, setitemImg] = useState(null);
  getProductById(id)
    .then((item) => setitemImg(item.productImg))
    .catch((error) => console.error(error));
  return (
    <li className='list-group-item d-flex justify-content-between lh-condensed'>
      <div className='item-pic col-4'>
        <img src={itemImg} className='img-thumbnail img-fluid' alt={name} />
      </div>
      <div className='item-detail col-4 px-0'>
        <h5 className='my-0 item-name'>{name}</h5>
        <ul className='text-muted item-desr'>
          {preferences.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      </div>
      <span className='item-qty col-2 text-center'>{qty}</span>
      <span className='text-muted item-cost col-2'>${total.toFixed(2)}</span>
    </li>
  );
};

export default OrderDetailItem;
