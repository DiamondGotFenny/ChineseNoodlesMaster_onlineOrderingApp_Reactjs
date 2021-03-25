import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OrderDetailHeader from './OrderDetailHeader';
import OrderDetailBody from './OrderDetailBody';

const OrderDetailModal = (props) => {
  const { show, handleClose, item } = props;
  const { orderInfo, paymentMethod, orderCharge } = item;
  const { id, deliveryTime, selectedAdrs, orderItems, status } = orderInfo;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size='lg'
      aria-labelledby='order-detail'>
      <Modal.Header className='order-detail-header-first' closeButton>
        <Modal.Title id='order-detail'>
          <h4>My Orders / Tracking</h4>
        </Modal.Title>
        <h6>
          Order ID: <span className='orderId-value'>{id}</span>
        </h6>
      </Modal.Header>
      <Modal.Header className='order-detail-header-second'>
        <OrderDetailHeader EstimatedTime={deliveryTime} status={status} />
      </Modal.Header>
      <Modal.Body>
        <OrderDetailBody
          shipInfo={selectedAdrs}
          payMethod={paymentMethod}
          items={orderItems}
          orderChargeInfo={orderCharge}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' className='mr-2' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailModal;
