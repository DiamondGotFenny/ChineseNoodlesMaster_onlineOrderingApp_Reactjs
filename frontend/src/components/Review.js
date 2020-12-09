import  React  from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'components/ratingStars';

const Review=(props)=>{
    const {item}=props
    return(
        <li className="row review-block">
            <div className="col-sm-3">
                <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="avatar img-rounded"/>
                <div className="review-block-name"><Link to={"/"}>{item.user}</Link></div>
                <div className="review-block-date">{item.date}<br/>50 days ago</div>
            </div>
            <div className="col-sm-9">
                <div className="review-block-title">{item.comment_title}</div>
                <div className="review-block-rate text-danger">
                    <Ratings rating={item.rating}/>
                </div>
                <div className="review-block-description">{item.comment}</div>
            </div>
         </li>                    
    )
}

export default Review;