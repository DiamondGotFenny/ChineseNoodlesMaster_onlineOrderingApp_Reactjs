import React from 'react';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import OrderChargeInfo from './OrderChargeInfo';

const CartItemsCheckOut = (props) => {
  const { shoppingItemsInfo } = props;
  return (
    <Col md={4} className='order-md-2 mb-4'>
      <h4 className='d-flex justify-content-between align-items-center mb-3'>
        <span>Your cart</span>
        <Badge pill variant='info'>
          {shoppingItemsInfo.shoppingCart.length}
        </Badge>
      </h4>
      <ul className='list-group'>
        <li className='product-header list-group-item d-flex justify-content-between lh-condensed'>
          <Col md={7}>Items</Col>
          <Col md={2}>Qty</Col>
          <Col md={3}>Total</Col>
        </li>
        {shoppingItemsInfo.shoppingCart.length > 0 &&
          shoppingItemsInfo.shoppingCart.map((item) => {
            return (
              <li
                key={item.uuid}
                className='list-group-item d-flex justify-content-between lh-condensed'>
                <div className='item-detail col-8 px-0'>
                  <h6 className='my-0 item-name'>
                    {item.product.productTitle}
                  </h6>
                  {Object.values(item.preferences).map((ele) => (
                    <small key={ele} className='text-muted item-desr'>
                      {ele}{' '}
                    </small>
                  ))}
                </div>
                <span className='item-qty col-2 text-center'>
                  {item.quantity}
                </span>
                <span className='text-muted item-cost col-2'>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </li>
            );
          })}
      </ul>
      <OrderChargeInfo data={shoppingItemsInfo.orderCharge} />
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Enter Promo Code'
          aria-label='Enter Promo Code'
          aria-describedby='Enter Promo Code'
        />
        <InputGroup.Append>
          <Button variant='warning'>Redeem</Button>
        </InputGroup.Append>
      </InputGroup>
    </Col>
  );
};

export default CartItemsCheckOut;
