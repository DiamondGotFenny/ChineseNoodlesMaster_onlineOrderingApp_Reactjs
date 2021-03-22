import React, { useState, useEffect } from 'react';
import OrderDetailHeader from 'components/OrderDetailHeader';
import ShippingPayInfo from 'components/ShippingPayInfo';
import httpService from 'services/httpService';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const PaySuccess = () => {
  const authInfo = useSelector((state) => state.authInfo);
  const userInfo = useSelector((state) => state.userInfo);
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const getOrder = async (id, token, email) => {
    const endpoint = `/auth/getOrder?orderId=${id}&email=${email}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const { data } = await httpService.getAuth(endpoint, config);
      console.log(data, 'data');
      setOrder(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (authInfo.data.token && userInfo.data) {
      getOrder(id, authInfo.data.token, userInfo.data.email);
    }
  }, [authInfo, userInfo]);
  console.log(order, 'orderInfo paid');
  return (
    <>
      {order && (
        <>
          <header>
            <h4>Payment Success and Your Order Has been Accepted.</h4>
            <h6>
              Order ID:{' '}
              <span className='orderId-value'>{order.orderInfo.id}</span>
            </h6>
          </header>
          <div>
            <OrderDetailHeader
              EstimatedTime={order.orderInfo.deliveryTime}
              status={order.orderInfo.status}
            />
            <div className='order-btn-group'>
              <Button variant='outline-primary'>View Order Detail</Button>
              <Button
                variant='outline-warning'
                disabled={
                  order.orderInfo.status === 'Order confirmed' ? false : true
                }>
                Modify the Order
              </Button>
              <Button
                variant='outline-danger'
                disabled={
                  order.orderInfo.status === 'Order confirmed' ? false : true
                }>
                Cancel the Order
              </Button>
            </div>
            <ShippingPayInfo
              shipInfo={order.orderInfo.selectedAdrs}
              payMethod={order.paymentMethod}
            />
            <Link
              to={'/'}
              className='btn red-outline-btnlg btn-red-fill'
              role='button'>
              <span>Back To Home</span>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default PaySuccess;
