import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import {Button } from 'react-bootstrap';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { calculateOrderSubTotal, calculateOrderTotal, calDiscountVal, calVatVal, calDeliveryFee } from 'utilis/calculateOrderTotal';
import { clearShoppingCart } from 'actions/orderAction';
import ShoppingCartIcon from './ShoppingCartIcon';
import OrderChargeInfo from './OrderChargeInfo';


const ShoppingCartModal = (props) => {
    const shoppingCart=useSelector(state=>state.shoppingCart.shoppingCart);
    //in real project, those extra order items should be imported from server
    const extraOrderItems={
        vat:0.05,
        discount:0.02,
        deliveringFee:5
    }
    const subTotal=calculateOrderSubTotal(shoppingCart);
    const deliveringFeeVal=calDeliveryFee(subTotal,extraOrderItems.deliveringFee)
    const discountVal=calDiscountVal(subTotal,extraOrderItems.discount);
    const vatVal=calVatVal(subTotal,extraOrderItems.vat);
    const total=calculateOrderTotal(subTotal,discountVal,vatVal,deliveringFeeVal);
    const vatPercentage=((extraOrderItems.vat/1) * 100).toFixed(2);
    const discountPercentage=((extraOrderItems.discount/1) * 100).toFixed(2);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearShoppingCart())
    }
    const renderCartItem=(shoppingCart)=>{
        if (shoppingCart.length===0) {
           return (<h4 className="text-center">Your Shopping Cart is Empty</h4>)
        }
        return (
            shoppingCart.map(ele=><CartItem key={ele.uuid} product_info={ele}/>)
        )
    }
    const renderClearAll=(shoppingCart)=>{
        if (shoppingCart.length===0) {
            return 
         }
         return (<Button onClick={handleClearCart} className="clear-cart"><FontAwesomeIcon icon={faTrashRestore}/> <span className="ml-2 clear-text">Clear Shopping Cart</span></Button>)
    }
    return ( 
        <Modal
            {...props}
            size="lg"
            aria-labelledby="shoping-cart"
            id="shopping-cart-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="shoping-cart">
                <h5 className="modal-title text-center" id="shoppingCartModalLabel">
                    <ShoppingCartIcon/>
                    <span className="text-dark">Your Shopping Cart</span>
                </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {renderCartItem(shoppingCart)}
               {renderClearAll(shoppingCart)}
                <OrderChargeInfo data={{subTotal,deliveringFeeVal,discountPercentage,discountVal,vatPercentage,vatVal,total}} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn red-outline-btnmd btn-red-fill checkout-btn"><span>Proceed To Checkout</span></button>
                <button onClick={props.onHide} className="btn gold-outline-btnmd btn-gold-fill"><span>Close</span></button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default ShoppingCartModal;