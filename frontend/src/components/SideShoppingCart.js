import  React, {useState}from 'react';
import ShoppingCartModal from 'components/ShoppingCartModal';
import { useSelector } from 'react-redux';
import SideShoppingcart from './../utilis/sideShoppingCart';
import ShoppingCartIcon from './ShoppingCartIcon';

const SideShoppingCart = () => {
    const [modalShow, setModalShow] =useState(false);
    return ( 
        <div>
            <SideShoppingcart 
            ContainerClassName="side-shopping-cart"
            TransitionClassName="side-shopping-cart-show"
            ShowAtPosition={100} 
            handleOnClick={() => setModalShow(true)}
            >
                <ShoppingCartIcon/>
            </SideShoppingcart>
            <ShoppingCartModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
      </div>
     );
}
 
export default SideShoppingCart;
