import  React, {  useState }  from 'react';
import { Card, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyFavorite from 'components/myFavorite';
import Ratings from 'components/ratingStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductQuantityCounter from 'components/ProductQuantityCounter';
import PreferenceFormGroup from 'components/PreferenceFormGroup';
import { useSelector, useDispatch } from 'react-redux';
import  history  from 'services/history';
import { addItemToCart } from './../../actions/orderAction';
const ProductDetailContainer = ({product,reviewsNum}) => {
    /*in real project, the preference info should be part of product data, as the preference items may various in different product.*/ 
    const prefereceItems=[
        {
            name:"pungency",
            itemsList:["no spicy","mild","spicy","hot"]},
        {
            name:"size",
            itemsList:["small","medium","large"]}
    ]
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
    const {productImg,id:_id,productTitle,price,rating,tags,vendorInfo,ProductDescr}=product;
    return (  
        <>
            <Card>
                <Row>
                    <aside className="col-sm-5 detail-img">
                        <img className="img-fluid" src={productImg}/>
                    </aside>
                    <aside className="col-sm-7">
                        <MyFavorite id={_id}/>
                        <article className="card-body p-3">
                            <h3 className="title mb-3">{productTitle}</h3>
                            <p className="price-detail-wrap"> 
                                <span className="price h3 text-warning"> 
                                    <span className="price-currency">US $</span>
                                    <span className="price-num">{price.toFixed(2)}</span>
                                </span> 
                                <span>/order</span> 
                            </p> 
                            <div className="review-wrap mb-3">
                            <span>Rating:</span>
                            <span className="rating-stars text-danger">
                                <Ratings rating={rating} interactive={false}/>
                            </span>
                            <a href="#reviews" className="review-counts">
                                {reviewsNum>0?<span className="reviews-num">{reviewsNum}</span>:<span className="reviews-num">0</span>}
                              reviews</a>
                            </div>
                            <div className="restaurant-title mb-3">
                                <span>Restaurant: </span>
                                <h4 className="vendorName ml-2"><Link to={`/vendors/${vendorInfo.vendor_id}`}>{vendorInfo.vendorName}</Link></h4>
                            </div>
                            <dl className="item-property">
                                <dt>Description</dt>
                                <dd><p>{ProductDescr}</p></dd>
                            </dl>
                            <dl className="param param-feature tags-wrap">
                                <dt>Tags</dt>
                                <dd>
                                    <ul className="product-tags">
                                    {tags.map((item)=>{
                                        return <li key={item}><Link to={`/products?search=${item}`} className="btn btn-outline-info" role="button">{item}</Link></li>
                                    })}
                                    </ul>
                                </dd>
                            </dl> 
                            <hr/>
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
                                        data-dismiss="modal"
                                    >
                                    <span>Confirm Order</span> 
                                    </Button>
                                    <Button
                                        type="button"
                                        className="btn red-outline-btnmd btn-red-fill"
                                        data-dismiss="modal"
                                        type="submit"
                                        disabled={inCart}
                                    >
                                    <span>
                                        <FontAwesomeIcon className="mr-2" icon={faShoppingCart}/> 
                                        {inCart?"Already In Cart":"Add To Cart"}
                                    </span>  
                                    </Button>
                                </div>
                        </Form>
                    </article>
                </aside>
            </Row>
        </Card>
    </>
    );
}
 
export default ProductDetailContainer;