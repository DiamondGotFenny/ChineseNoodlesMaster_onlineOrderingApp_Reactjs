import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Ratings from 'components/ratingStars';
import { useSelector, useDispatch } from 'react-redux';
import useGetResource from 'utilis/customHooks/useGetResource';

const ActivityProductReview = (props) => {
  const { item, vendorInfo } = props;
  const reviews_endpoint = `/ProductReviews?id=${item.product.id}`;
  const userInfo = useSelector((state) => state.userInfo);
  const [review, setreview] = useState(null);
  /*Due to the limit of json server, we can not edit the review here. but in real project,
  we should edit the review directly here, no need to download the whole review list
  and we can not use the get product page review edit component from product page*/
  const { isLoading, hasError, data } = useGetResource(reviews_endpoint);
  //this find() filter is used because the fake Api server always return an array,
  //this can be removed if the data server return an object instead of array
  const reviewsObj = data.find((reviews) => reviews.id === item.id);
  useEffect(() => {
    if (reviewsObj && userInfo.data) {
      const review = reviewsObj.reviews.find(
        (review) => review.user === userInfo.data.name
      );
      setreview(review);
    }
  }, [reviewsObj, userInfo.data]);
  return (
    <div className='activity-product-review'>
      <Card.Title>
        You ordered{' '}
        <Link to={`/product/${item.product.id}`} className='order-name'>
          {item.product.productTitle}
        </Link>{' '}
        from{' '}
        <Link
          to={`/vendors/${vendorInfo.id}`}
          className='vendor-name text-info'>
          {vendorInfo.vendorName}
        </Link>
        .
      </Card.Title>

      {!review && (
        <div className='review mt-2'>
          <Link to={`/product/${item.id}`} className='card-text write-review'>
            Hasn't Write A Review Yet? Write It Now!
          </Link>
        </div>
      )}
      {review && (
        <div className='review mt-2'>
          <h5 className='card-text review-title'>Your Review:</h5>
          <Ratings rating={4} />
          <Card.Text className='review-text'>{review.comment}</Card.Text>
          <Link
            to={`/product/${item.product.id}`}
            className='card-text write-review'>
            Edit or Delete Your Comment
          </Link>
        </div>
      )}
    </div>
  );
};

export default ActivityProductReview;
