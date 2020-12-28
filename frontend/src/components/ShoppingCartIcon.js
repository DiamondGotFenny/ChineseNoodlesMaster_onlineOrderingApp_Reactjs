import  React  from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';

const ShoppingCartIcon = () => {
    const shoppingCart=useSelector(state=>state.shoppingCart.shoppingCart);
    return ( 
        <span className="shopping-cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} className="pt-2 cart-icon"/>
            <Badge pill variant="info">{shoppingCart.length}</Badge>
        </span>
     );
}
 
export default ShoppingCartIcon;