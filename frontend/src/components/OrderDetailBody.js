import React from 'react';
import Col from 'react-bootstrap/Col';
import OrderChargeInfo from './OrderChargeInfo';
import OrderDetailItem from './OrderDetailItem';
import ShippingPayInfo from './ShippingPayInfo';

const OrderDetailBody = (props) => {
  const { shipInfo, payMethod, items, orderChargeInfo } = props;
  return (
    <ul className='item-list list-group mb-3 text-center'>
      <li className='list-group-item d-flex justify-content-between align-middle lh-condensed'>
        <Col md={4}></Col>
        <Col md={4}>Item</Col>
        <Col md={2}>Qty</Col>
        <Col md={2}>Total</Col>
      </li>
      {items.map((item) => (
        <OrderDetailItem key={item.uuid} item={item} />
      ))}
      <OrderChargeInfo data={orderChargeInfo} />
      <ShippingPayInfo shipInfo={shipInfo} payMethod={payMethod} />
    </ul>
  );
};

export default OrderDetailBody;
