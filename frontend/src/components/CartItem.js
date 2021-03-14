import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ProductQuantityCounter from './ProductQuantityCounter';
import { useDispatch } from 'react-redux';
import { removeFromCart, itemQuntityUpdate } from 'actions/orderAction';

const CartItem = (props) => {
  const { product_info } = props;
  const { product, quantity, preferences, uuid } = product_info;
  const cost = (product.price * quantity).toFixed(2);
  const preferencesVals = Object.values(preferences);
  const [quantityInput, setquantityInput] = useState(quantity);
  const dispatch = useDispatch();
  const handleQtyOnChange = (val, uuid) => {
    setquantityInput((quantity) => val);
    dispatch(itemQuntityUpdate(val, uuid));
  };
  const handleRemove = (uuid) => {
    dispatch(removeFromCart(uuid));
  };
  return (
    <Card style={{ maxWidth: '100%' }}>
      <Row noGutters>
        <Col sm={3}>
          <Card.Img
            src={product.productImg}
            alt={product.productTitle}
            className='card-img-top h-100'
          />
        </Col>
        <Card.Body className='col-sm-3 pl-3 border-right'>
          <h5 className='card-title'>{product.productTitle}</h5>
          <ul className='order-info'>
            {preferencesVals.map((ele, idx) => (
              <li key={idx}>
                <Card.Text>{ele}</Card.Text>
              </li>
            ))}
          </ul>
        </Card.Body>
        <Col sm={6} className='list-group mb-3'>
          <ul className='list-group mb-3'>
            <li className='cart-header list-group-item d-flex justify-content-between lh-condensed border-0 text-center pb-0'>
              <div className='col-4'>Price</div>
              <div className='col-4'>Cost</div>
              <div className='col-4'>Delete</div>
            </li>
            <li className='cart-detail list-group-item d-flex justify-content-between lh-condensed border-0 text-center pt-0'>
              <div className='col-4'>${product.price.toFixed(2)}</div>
              <div className='col-4'>${cost}</div>
              <div className='col-4'>
                <button
                  className='text-danger remove-btn'
                  title='Remove a product'
                  onClick={() => handleRemove(uuid)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
            <li className='cart-number-input list-group-item d-flex lh-condensed border-0'>
              <div className='qty-title text-right align-self-center pt-1'>
                Quantity:
              </div>
              <div className='update-product align-middle'>
                <ProductQuantityCounter
                  val={quantity}
                  quantity={quantityInput}
                  TrackQtyChange={(val) => handleQtyOnChange(val, uuid)}
                />
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
