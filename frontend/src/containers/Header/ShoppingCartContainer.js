import  React, {useEffect,useState}from 'react';
import ShoppingCartModal from 'components/ShoppingCartModal';
import { Button } from 'react-bootstrap';

const ShoppingCartContainer = () => {
    const [modalShow, setModalShow] =useState(false);
    return ( 
    <>
        <Button
            type="button"
            className="module module-cart right align-middle"
            onClick={() => setModalShow(true)}
        >
            <span className="cart-icon">
            <i className="ti ti-shopping-cart"></i>
            <span className="notification">3</span>
            </span>
            <span className="cart-value">$45.00</span>
        </Button>
        <ShoppingCartModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
      </>
     );
}
 
export default ShoppingCartContainer;