import React, { useState, useEffect } from 'react';
import BackToHomeBtn from 'components/BackToHomeBtn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutAdrsList from 'components/CheckoutAdrsList';
import { useSelector, useDispatch } from 'react-redux';
import CardContainer from 'containers/CheckOutPage/CardContainer';
import { setOrderInfo } from 'actions/orderAction';
import DeliveryTime from 'components/DeliveryTime';
import CartItemsCheckOut from 'components/CartItemsCheckOut';
import { v4 as uuidv4 } from 'uuid';
import makeid from 'utilis/createId';

const CheckOutPage = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const initiChargeVal = {
    subTotal: 0,
    deliveringFeeVal: 0,
    discountPercentage: 0,
    discountVal: 0,
    vatPercentage: 0,
    vatVal: 0,
    total: 0,
  };
  /*
  the shopping cart may includes products from different vendors, we would split them into different orders
  for each vendor loater. that means each order for an individual vendor. 
  */
  const initAdrs = () => {
    if (userInfo.data)
      return userInfo.data.address.find(
        (ele) => ele.addressTitle === 'Default Address'
      );
  };
  /*we use selected adrs and delivery time state because when the user alter shopping cart or leave
  the page and back, their selections will be kept
  */
  const [selectedDeliveryTime, setselectedDelieveryTime] = useState('');
  const initialShoppingVal = {
    orderCharge: initiChargeVal,
    orderInfo: {
      orderItems: [],
      selectedAdrs: initAdrs(),
      deliveryTime: selectedDeliveryTime,
      email: '',
      name: '',
      id: '',
      status: '',
      date: null,
    },
  };
  const getDefaultVal = (val) => {
    setselectedDelieveryTime(val);
  };
  const [shoppingItemsInfo, setshoppingItemsInfo] = useState(
    initialShoppingVal
  ); //shoppingItemsInfo state is for displaying info at this page;

  const handleSelectedAdrs = (adr) => {
    setshoppingItemsInfo({ ...shoppingItemsInfo, selectedAdrs: adr });
    dispatch(setOrderInfo({ ...shoppingItemsInfo, selectedAdrs: adr }));
  };

  const handleTimeValueChanges = (e) => {
    setshoppingItemsInfo({
      ...shoppingItemsInfo,
      deliveryTime: e.target.value,
    });
    dispatch(
      setOrderInfo({
        ...shoppingItemsInfo,
        deliveryTime: e.target.value,
      })
    );
  };
  //the order id should generated in the server
  const getOrderId = () => {
    const id_preStr = makeid(4);
    const id = `${id_preStr}-${uuidv4().split('-')[4]}`;
    return id;
  };
  useEffect(() => {
    if (shoppingCart.shoppingCart.length > 0 && userInfo.data) {
      const orderData = {
        orderCharge: shoppingCart.orderCharge,
        orderInfo: {
          orderItems: shoppingCart.shoppingCart,
          selectedAdrs: initAdrs(),
          id: getOrderId(),
          date: new Date(),
          email: userInfo.data.email,
          name: userInfo.data.name,
          deliveryTime: selectedDeliveryTime,
          status: 'Order Completed',
        },
      };
      setshoppingItemsInfo(orderData);
      dispatch(setOrderInfo(shoppingItemsInfo));
    } else {
      setshoppingItemsInfo(initialShoppingVal);
    }
  }, [shoppingCart]);

  return (
    <Container className='checkout-container'>
      <BackToHomeBtn />
      <Row>
        <CartItemsCheckOut shoppingItemsInfo={shoppingItemsInfo} />
        <Col md={8} className='order-md-1 mb-4'>
          <h4 className='mb-3 billing-title'>Billing Address</h4>
          {userInfo.data && (
            <CheckoutAdrsList
              handleSelectedAdrs={handleSelectedAdrs}
              addressesList={userInfo.data.address}
            />
          )}
          <h4 className='element-title'>Delivery Time</h4>
          <DeliveryTime
            getDefaultVal={getDefaultVal}
            handleTimeValueChanges={handleTimeValueChanges}
          />
          <h4 className='element-title'>Enter Your Card Number</h4>
          <CardContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOutPage;
