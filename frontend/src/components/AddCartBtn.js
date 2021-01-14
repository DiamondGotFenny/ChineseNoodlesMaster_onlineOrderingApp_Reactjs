import  React, {  useEffect, useState }  from 'react';
import { Badge } from 'react-bootstrap';
import OrderConfirmModal from './OrderConfirmModal';
import { useSelector, useDispatch } from 'react-redux';

const AddCartBtn = (props) => {
    const {product}=props
    const shoppingCart=useSelector(state=>state.shoppingCart.shoppingCart);
    const [modalShow, setModalShow] = useState(false);
    const handleOnClick=()=>{
        setModalShow(true)
    }
    const renderItemNum=(shoppingCart,product)=>{
      const item=shoppingCart.find(ele=>ele.product.id===product.id)
      if (item) {
        return item.quantity
      }
    }
    return ( 
      <>
        <button
        className="btn red-outline-btnmd btn-red-fill addToCart-btn"
        onClick={handleOnClick}
      >
        <span>Add to cart</span>
        <Badge pill variant="info" >{renderItemNum(shoppingCart,product)}</Badge>
      </button>
      <OrderConfirmModal  
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        shoppingcart={shoppingCart}
        />
      </>
     );
}
 
export default AddCartBtn;