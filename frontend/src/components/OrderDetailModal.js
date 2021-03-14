import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import OrderChargeInfo from './OrderChargeInfo';
import OrderDetailItem from './OrderDetailItem';
import TrackOrder from './TrackOrder';

const OrderDetailModal = (props) => {
  const { show, handleClose, item } = props;
  const {
    id,
    EstimatedTime,
    status,
    payMethod,
    shipInfo,
    orderChargeInfo,
  } = item;
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
        <Row className='order-info text-center'>
          <Col>
            <strong>Estimated Arrive time:</strong> <br />
            <span className='delivery-time-value'>{EstimatedTime}</span>
          </Col>
          <Col>
            <strong>Shipping BY:</strong> <br />
            CNM | <FontAwesomeIcon icon={faPhone} /> +1598675986
          </Col>
          <Col>
            <strong>Status:</strong> <br />
            <span className='status-value'>{status}</span>
          </Col>
        </Row>
        <TrackOrder status={status} />
      </Modal.Header>
      <Modal.Body>
        <ul className='item-list list-group mb-3 text-center'>
          <li className='list-group-item d-flex justify-content-between align-middle lh-condensed'>
            <Col md={4}></Col>
            <Col md={4}>Item</Col>
            <Col md={2}>Qty</Col>
            <Col md={2}>Total</Col>
          </li>
          {item.items.map((item) => (
            <OrderDetailItem key={item.id} item={item} />
          ))}
          <OrderChargeInfo data={orderChargeInfo} />
          <li id='shipNPayment' className='list-group-item'>
            <h4>Shipping and Payment</h4>
            <div className='row'>
              <div className='col-4 text-left'>
                <div>
                  SHIPPING ADDRESS:
                  <div className='shipping-address-value'>
                    <h5>
                      Receiver:{' '}
                      <span className='receiver-name'>{shipInfo.receiver}</span>
                    </h5>
                    <p>{shipInfo.address}</p>
                    <p>
                      Phone Number:
                      <span className='adrs-phone-num'>
                        {shipInfo.phoneNum}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-4 text-left'>
                <div>
                  BILLING ADDRESS:
                  <div className='billing-address-value'>
                    <h5>
                      Receiver:{' '}
                      <span className='receiver-name'>{shipInfo.receiver}</span>
                    </h5>
                    <p>{shipInfo.address}</p>
                    <p>
                      Phone Number:
                      <span className='adrs-phone-num'>
                        {shipInfo.phoneNum}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-4 text-left'>
                <div>
                  PAYMENT METHOD:
                  <div className='payment-value'>
                    <h5>
                      <span className='payment-type'>{payMethod.type}</span>:
                      <span className='card-last4'>{payMethod.info}</span>
                    </h5>
                    <p className='name'>{payMethod.owner}</p>
                    <p>
                      Phone Number:
                      <span className='adrs-phone-num'>{payMethod.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
