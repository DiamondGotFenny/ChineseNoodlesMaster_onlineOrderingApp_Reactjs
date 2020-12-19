import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const ShoppingCartModal = (props) => {
    const shoppingCart=useSelector(state=>state.shoppingCart.shoppingCart);
    console.log(shoppingCart,'shoppingcart');
    const renderCartItem=(shoppingCart)=>{
        if (shoppingCart.length===0) {
           return (<h4 className="text-center">Your Shopping Cart is Empty</h4>)
        }
        return (
            shoppingCart.map(ele=><CartItem key={ele.product.id} product_info={ele}/>)
        )
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
                    <FontAwesomeIcon icon={faShoppingCart} className="pt-2"/>
                    <Badge pill variant="info">{shoppingCart.length}</Badge>
                    <span className="text-dark">Your Shopping Cart</span>
                </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {renderCartItem(shoppingCart)}
                <ul className="list-group mt-2">
                    <li
                        id="subtotal"
                        className="list-group-item d-flex justify-content-between"
                    >
                        <span>Subtotal</span>
                        <strong className="subtotal-value">$40</strong>
                    </li>
                    <li
                        id="Delivering-fee"
                        className="list-group-item d-flex justify-content-between"
                    >
                        <span>Delivering Fee</span>
                        <strong>$5</strong>
                    </li>
                    <li
                        id="discount"
                        className="list-group-item d-flex justify-content-between bg-light"
                    >
                        <div className="text-success discount">
                        <h6 className="my-0">Discount</h6>
                        <small className="discount-percent">10%</small>
                        </div>
                        <span className="text-success discount-value">-$4</span>
                    </li>
                    <li
                        id="vat"
                        className="list-group-item d-flex justify-content-between bg-light"
                    >
                        <div className="text-warning vat">
                        <h6 className="my-0">VAT</h6>
                        <small className="vat-percent">10%</small>
                        </div>
                        <span className="text-warning vat-value">$4</span>
                    </li>
                    <li
                        id="total"
                        className="list-group-item d-flex justify-content-between"
                    >
                        <span>Total (USD)</span>
                        <strong className="total-value">$45</strong>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default ShoppingCartModal;