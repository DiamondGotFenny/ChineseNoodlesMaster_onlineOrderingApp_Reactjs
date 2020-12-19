import  React ,{useState} from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Badge, Card, Col, Row, Image, Form } from 'react-bootstrap';
import sampleImg from "asset/img/productsPic/beef_noodles.jpg"
import  Ratings  from 'components/ratingStars';
import PreferenceFormGroup from './PreferenceFormGroup';
import ProductQuantityCounter from './ProductQuantityCounter';
import { useSelector, useDispatch } from 'react-redux';
import { updateShoppingCart } from 'actions/orderAction';
const OrderConfirmModal = (props) => {
   /*in real project, the preference info should be part of product data, as the preference items may various in different product.*/ 
  const prefereceItems=[
    {
        name:"pungency",
        itemsList:["no spicy","mild","spicy","hot"]},
    {
        name:"size",
        itemsList:["small","medium","large"]}
];
const {product, shoppingcart,onHide}=props;
const intialVals={pungency:"no spicy",size:"medium"}
const [inputVals,setInputVals]=useState(intialVals);
const [quantity,setquantity]=useState(1)
/*we check the inCart value again here because it will throw warning if we use the inCart value from 
upper component. the error caused by which the bootstrap modal at below is using {...props} 
*/
const inCart=shoppingcart.some(ele=>ele.product.id===product.id);
console.log(inCart);
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
      const newCart=[...shoppingcart];
      newCart.push(DataObj)
      dispatch(updateShoppingCart(newCart));
      onHide();
    }
}
    return ( 
        <Modal
      {...props}
      size="lg"
      aria-labelledby="confirm-order"
      id="confirm-order"
    >
        <Modal.Header closeButton>
            <Modal.Title >
                <Image src={sampleImg} className="mb-4" alt=""/>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="food-info-first mb-2">
              <h5 className="food-title">Lanzhou Beef Noodles</h5>
              <span className="modal-product-price">$19.00</span>
            </div>
            <Ratings rating={3} interactive={false}/>
            <div className="product-detail mt-3">
              <h6 className="ing-title">Main Ingredients:</h6>
              <div className="ing-details">
                High gluten flour, chili, beef, flour, spicy oil flour, radish,
                garlic, cilantro, broth, plus canapés.
              </div>
            </div>
            <hr/>
            <Form onSubmit={handleSubmit}>
                {prefereceItems.map(item=>< PreferenceFormGroup key={item.name} preferenceObj={item} formGroupState={inputVals[item.name]} handleOnchange={handleInputVals}/>)}
                <hr/>
                  <div className="qty-btn-container">
                      <span className="qty-btn-text">Quantity: </span>
                          <ProductQuantityCounter quantity={quantity} TrackQtyChange={handleQtyOnChange} />    
                  </div>
                  <hr/>
                      <div className="footer-container">
                          <Button
                            type="submit"
                            className="btn gold-outline-btnmd btn-gold-fill order-confirm-btn"
                            data-dismiss="modal"
                            disabled={inCart}
                              >
                                  <span>{inCart?"Already In Cart":"Add To Cart"}</span> 
                          </Button>
                          <Button
                            type="button"
                            className="btn red-outline-btnmd btn-red-fill"
                            data-dismiss="modal"
                            onClick={onHide}
                            >
                              <span>
                                Closed
                              </span>  
                          </Button>
                      </div>
                    </Form>
        </Modal.Body>
    </Modal>
     );
}
 
export default OrderConfirmModal;