import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import OrderDetailModal from './OrderDetailModal';

const OrderCard = (props) => {
  const { orderInfo, payMethod, orderCharge } = props.item;
  const { date, id, orderItems, status, shipInfo } = orderInfo;
  const calTotal = (price, qty) => {
    return (price * qty).toFixed(2);
  };
  const dateStr = new Date(date).toLocaleDateString();
  const vendorInfo = orderItems[0]['product']['vendorInfo'];
  const [showDetailModal, setshowDetailModal] = useState(false);
  const handleCloseDetailModal = () => setshowDetailModal(false);
  const handleShowDetailModal = () => setshowDetailModal(true);
  return (
    <Card className='mt-3'>
      <Card.Header className='bg-light'>
        <Row>
          <Col className='order-date mb-2'>
            Order Date:
            <br /> <span className='order-date-value'>{dateStr}</span>
          </Col>
          <Col className='order-num mb-2'>
            Order Number:
            <br /> <span className='order-num-value'>{id}</span>
          </Col>
          <Col className='order-vendor mb-2'>
            Vendor:
            <br /> <span className='order-vendor-value'>{vendorInfo.name}</span>
          </Col>
        </Row>
        <Row>
          <Col className='order-sum mb-2'>
            Order Total:
            <br /> <span className='order-sum-value'>${orderCharge.total}</span>
          </Col>
          <Col className='order-pay mb-2'>
            Payment Method:
            <br /> <span className='order-pay-value'>{payMethod.type}</span>
          </Col>
          <Col className='order-status mb-2'>
            Status:
            <br /> <span className='order-status-value'>{status}</span>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className='row'>
        <ul className='col-md-8 mb-3'>
          <li className='product-header d-flex justify-content-between lh-condensed mb-2 row'>
            <span className='col-md-7 col-4'>Items</span>
            <span className='col-md-2 col-4 text-center'>Qty</span>
            <span className='col-md-3 col-4 text-center'>Total</span>
          </li>
          {orderItems.map((ele, idx) => (
            <li
              key={ele.product.id + idx}
              className='order-item d-flex justify-content-between lh-condensed mb-2'>
              <div className='item-detail col-md-7 col-5 px-0'>
                <p className='my-0 item-name'>{ele.product.productTitle}</p>
              </div>
              <span className='item-qty col-md-2 text-center'>
                {ele.quantity}
              </span>
              <span className='item-cost col-md-3 col-5 text-center'>
                ${calTotal(ele.product.price, ele.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <Col md={4} className='order-shipTo border-left'>
          Ship to: <br />
          <div className='order-adrs'>
            <h5 className='card-title'>
              Receiver:{' '}
              <span className='receiver-name'>{shipInfo.receiver}</span>
            </h5>
            <p className='card-text'>{`${shipInfo.address.addressLine1}, ${shipInfo.address.addressLine2}, ${shipInfo.address.district}, ${shipInfo.address.city}`}</p>
            <p className='card-text'>
              Phone Number:
              <span className='adrs-phone-num'>{shipInfo.phoneNum}</span>
            </p>
            <Button variant='primary' onClick={handleShowDetailModal}>
              Order Details
            </Button>
          </div>
        </Col>
      </Card.Body>
      <OrderDetailModal
        item={props.item}
        show={showDetailModal}
        handleClose={handleCloseDetailModal}
      />
    </Card>
  );
};

export default OrderCard;
