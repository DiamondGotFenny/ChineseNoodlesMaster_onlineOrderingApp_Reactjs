import  React  from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'components/ratingStars';
import EditReviewBtn from './EditReviewBtn';
import { useSelector } from 'react-redux';

const Review=(props)=>{
    const {item}=props
    const userInfo=useSelector(state=>state.userInfo)
    const renderEditBtn=()=>{
        if (item.user_id===userInfo.data?.id) {
            return <EditReviewBtn />
        }
    }
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
                    <Ratings rating={item.rating} interactive={false}/>
                </div>
                <div className="review-block-description">{item.comment}</div>
            </div>
                {renderEditBtn()}
         </li>                        
    )
}

export default Review;