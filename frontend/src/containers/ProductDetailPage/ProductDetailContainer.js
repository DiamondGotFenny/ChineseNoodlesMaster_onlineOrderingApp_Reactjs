import  React from 'react';
import { Card, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyFavorite from 'components/myFavorite';
import Ratings from 'components/ratingStars';
import { useSelector } from 'react-redux';
import OrderPreferences from 'components/OrderPreferences';
const ProductDetailContainer = ({product,reviewsNum=0}) => {
    /*in real project, the preference info should be part of product data, as the preference items may various in different product.*/ 
    const prefereceItems=[
        {
            name:"pungency",
            itemsList:["no spicy","mild","spicy","hot"]},
        {
            name:"size",
            itemsList:["small","medium","large"]}
    ]
    const reviewsList=useSelector(state=>state.reviewsList);
    //use for distingush the id type when it is added to the favorite list
    const type="product";  
    const getReviewNum=(productReviews)=>{
        if (productReviews.status==="success") {
            return productReviews.reviewsObj.reviews.length;
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
                        <MyFavorite id={_id} type={type}/>
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
                                {reviewsNum>0?<span className="reviews-num">{getReviewNum(reviewsList)}</span>:<span className="reviews-num">0</span>}
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
                                        return <li key={item}><Link to={`/products?q=${item}`} className="btn btn-outline-info" role="button">{item}</Link></li>
                                    })}
                                    </ul>
                                </dd>
                            </dl> 
                            <hr/>
                        <OrderPreferences prefereceItems={prefereceItems} product={product}/>
                    </article>
                </aside>
            </Row>
        </Card>
    </>
    );
}
 
export default ProductDetailContainer;