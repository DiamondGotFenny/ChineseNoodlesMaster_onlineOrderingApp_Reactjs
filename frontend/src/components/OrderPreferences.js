import  React, {  useState }  from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductQuantityCounter from 'components/ProductQuantityCounter';
import PreferenceFormGroup from 'components/PreferenceFormGroup';
import { useSelector, useDispatch } from 'react-redux';
import  history  from 'services/history';
import { addItemToCart } from 'actions/orderAction';

const OrderPreferences = (props) => {
     const {prefereceItems,product}=props
    const intialVals={pungency:"no spicy",size:"medium"}
    const [inputVals,setInputVals]=useState(intialVals);
    const [quantity,setquantity]=useState(1)
    const shoppingCart=useSelector(state=>state.shoppingCart.shoppingCart);
    const inCart=shoppingCart.some(ele=>ele.product.id===product.id);
  const dispatch=useDispatch();
    const handleInputVals=(e)=>{
        setInputVals({...inputVals,[e.target.name]:e.target.value});
    }
   
    const handleQtyOnChange=(val)=>{
       setquantity(quantity=>val)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!inCart) {
            const formData = new FormData(e.target);
            const formDataObj = Object.fromEntries(formData.entries())
            const DataObj={preferences:{...formDataObj},quantity:quantity,product:{...product}}
            dispatch(addItemToCart(DataObj))
             history.push("/")
        }
    }
    return ( 
        <>
        <Form onSubmit={handleSubmit}>
            {prefereceItems.map(item=><PreferenceFormGroup key={item.name} preferenceObj={item} formGroupState={inputVals[item.name]} handleOnchange={handleInputVals}/>)}
            <hr/>
            <div className="qty-btn-container">
                <span className="qty-btn-text">Quantity: </span>
                    <ProductQuantityCounter quantity={quantity} TrackQtyChange={handleQtyOnChange} />    
            </div>
            <hr/>
            <div className="footer-container">
                <Button
                    className="btn gold-outline-btnmd btn-gold-fill order-confirm-btn"
                    data-dismiss="modal">
                <span>Confirm Order</span> 
                </Button>
                <Button
                type="button"
                className="btn red-outline-btnmd btn-red-fill"
                data-dismiss="modal"
                 type="submit"
                 disabled={inCart}>
                    <span>
                        <FontAwesomeIcon className="mr-2" icon={faShoppingCart}/> 
                        {inCart?"Already In Cart":"Add To Cart"}
                    </span>  
                </Button>
            </div>
         </Form>
        </>
     );
}
 
export default OrderPreferences;