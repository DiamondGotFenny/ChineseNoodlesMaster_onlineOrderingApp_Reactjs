import  React, {  useState }  from 'react';
import { Card, Row, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyFavorite from 'components/myFavorite';
import Ratings from 'components/ratingStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const ProductDetailContainer = ({product,reviewsNum}) => {
    const pungencyInfo=["no spicy","mild","spicy","hot"];
    const sizeInfo=["small","medium","large"];
    const [pungency,setpungency]=useState("no spicy");
    const [size,setpsize]=useState("medium");
    const [quantity,setquantity]=useState(1)
    const handlePungencyChange=(e)=>{
        e.persist();
        setpungency(pungency=>e.target.value)
    }
    const handleSizeChange=(e)=>{
        e.persist();
        setpsize(size=>e.target.value)
    }
    const handleQuantityPlus=(e)=>{
        if (quantity>99||quantity<0)  return;
        setquantity(quantity=>quantity+1)
    }
    const handleQuantityMinus=(e)=>{
        if (quantity>99||quantity<=0)  return;
        setquantity(quantity=>quantity-1)
    }
    const handleInputQty=(e)=>{
        const num=e.target.value;
        if (num>99||num<=0)  return;
        setquantity(num)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
       const formDataObj = Object.fromEntries(formData.entries())
       const DataObj={...formDataObj,quantity:quantity}
       console.log(DataObj);
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
                                    <span className="price-num">{price}</span>
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
                                <span>Restaurant:</span>
                                <span><Link to={`/${vendorInfo.vendor_id}`}>{vendorInfo.vendorName}</Link></span>
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
                            <Form.Group controlId="pungency" onChange={handlePungencyChange}>
                            {pungencyInfo.map(item=>{return <Form.Check key={item} type="radio" inline label={item} id={item}  name="pungency" value={item} readOnly checked={pungency===item}/>})}
                            </Form.Group>
                            <Form.Group  controlId="size" onChange={handleSizeChange}>
                            {sizeInfo.map(item=>{return <Form.Check key={item} type="radio" inline label={item} id={item}  name="size" value={item} readOnly checked={size===item}/>})}
                            </Form.Group>
                                <hr/>
                            <div className="qty-btn-container">
                            <span className="qty-btn-text">Quantity: </span>
                                <InputGroup >
                                    <InputGroup.Prepend >
                                        <Button className="qty-btn-plus" variant="outline-secondary" onClick={handleQuantityPlus}>
                                            +
                                        </Button>
                                        </InputGroup.Prepend>
                                        <FormControl type="number" value={quantity} min="1" max="99" step="1" onChange={handleInputQty} />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" className="qty-btn-minus" onClick={handleQuantityMinus}>
                                                -
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup> 
                            </div>
                                <hr/>
                                <div className="footer-container">
                                    <Button
                                        type="submit"
                                        className="btn gold-outline-btnmd btn-gold-fill order-confirm-btn"
                                        data-dismiss="modal"
                                    >
                                    <span>Confirm Order</span> 
                                    </Button>
                                    <Button
                                        type="button"
                                        className="btn red-outline-btnmd btn-red-fill"
                                        data-dismiss="modal"
                                    >
                                    <span>
                                        <FontAwesomeIcon className="mr-2" icon={faShoppingCart}/> 
                                        Add to cart
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