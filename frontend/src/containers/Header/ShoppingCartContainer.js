import  React, {useState}from 'react';
import ShoppingCartModal from 'components/ShoppingCartModal';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { calculateOrderSubTotal } from 'utilis/calculateOrderTotal';
import ShoppingCartIcon from 'components/ShoppingCartIcon';

const ShoppingCartContainer = () => {
    const [modalShow, setModalShow] =useState(false);
    const shoppingCart=useSelector(state=>state.shoppingCart.shoppingCart);
    const orderSubTotal=calculateOrderSubTotal(shoppingCart)
    return ( 
    <>
        <Button
            type="button"
            className="module module-cart right align-middle"
            onClick={() => setModalShow(true)}
        >
            <span className="header-cart-icon">
                <ShoppingCartIcon/>
            </span>
            <span className="cart-value">${orderSubTotal}</span>
        </Button>
        <ShoppingCartModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
      </>
     );
}
 
export default ShoppingCartContainer;