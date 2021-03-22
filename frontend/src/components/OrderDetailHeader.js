import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import TrackOrder from './TrackOrder';

const OrderDetailHeader = (props) => {
  const { EstimatedTime, status } = props;
  return (
    <>
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
    </>
  );
};

export default OrderDetailHeader;
