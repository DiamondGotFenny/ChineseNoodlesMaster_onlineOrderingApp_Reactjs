import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderChargeInfo } from 'utilis/calculateOrderTotal';
import { clearShoppingCart, setOrderCharge } from 'actions/orderAction';
import ShoppingCartIcon from './ShoppingCartIcon';
import OrderChargeInfo from './OrderChargeInfo';
import history from 'services/history';
import { orderExtraCharge } from 'utilis/temOrderExtraCharge';

const ShoppingCartModal = (props) => {
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  //in real project, those extra order items should be imported from server
  const extraChargeItems = orderExtraCharge();
  const orderChargeInfo = getOrderChargeInfo(shoppingCart, extraChargeItems);
  /*  const vatPercentage = ((extraChargeItems.vat / 1) * 100).toFixed(2);
  const discountPercentage = ((extraChargeItems.discount / 1) * 100).toFixed(2); */
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearShoppingCart());
  };
  const renderCartItem = (shoppingCart) => {
    if (shoppingCart.length === 0) {
      return <h4 className='text-center'>Your Shopping Cart is Empty</h4>;
    }
    return shoppingCart.map((ele) => (
      <CartItem key={ele.uuid} product_info={ele} />
    ));
  };
  const renderClearAll = (shoppingCart) => {
    if (shoppingCart.length === 0) {
      return;
    }
    return (
      <Button onClick={handleClearCart} className='clear-cart'>
        <FontAwesomeIcon icon={faTrashRestore} />{' '}
        <span className='ml-2 clear-text'>Clear Shopping Cart</span>
      </Button>
    );
  };
  const orderChargeObj = {
    subTotal: orderChargeInfo.subTotal,
    deliveringFeeVal: orderChargeInfo.deliveryFee,
    //discountPercentage,
    discountRate: extraChargeItems.discount,
    discountVal: orderChargeInfo.discountVal,
    //vatPercentage,
    vatRate: extraChargeItems.vat,
    vatVal: orderChargeInfo.vatVal,
    total: orderChargeInfo.totalCost,
  };
  const handleProceed = () => {
    props.onHide();
    history.push('/checkout');
  };
  useEffect(() => {
    dispatch(setOrderCharge(orderChargeObj));
  }, [orderChargeInfo]);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='shoping-cart'
      id='shopping-cart-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='shoping-cart'>
          <h5 className='modal-title text-center' id='shoppingCartModalLabel'>
            <ShoppingCartIcon />
            <span className='text-dark'>Your Shopping Cart</span>
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderCartItem(shoppingCart)}
        {renderClearAll(shoppingCart)}
        <OrderChargeInfo data={orderChargeObj} />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn red-outline-btnmd btn-red-fill checkout-btn'
          onClick={handleProceed}>
          <span>Proceed To Checkout</span>
        </button>
        <button
          onClick={props.onHide}
          className='btn gold-outline-btnmd btn-gold-fill'>
          <span>Close</span>
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCartModal;
