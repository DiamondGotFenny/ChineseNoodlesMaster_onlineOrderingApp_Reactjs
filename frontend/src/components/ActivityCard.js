import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ActivityProductReview from './ActivityProductReview';

const ActivityCard = (props) => {
  const { orderInfo, id } = props.order;
  const { date, orderItems } = orderInfo;
  const vendorInfo = orderItems[0]['product']['vendorInfo'];
  const dateStr = new Date(date).toLocaleDateString();
  return (
    <Card border='secondary' className='m-3'>
      <Card.Header>
        Date: {dateStr}
        <Button className='order-detail text-info' variant='light'>
          Order Number: {id}
        </Button>
      </Card.Header>

      <Card.Body>
        {orderItems.map((item) => (
          <ActivityProductReview
            key={item.id}
            item={item}
            vendorInfo={vendorInfo}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default ActivityCard;
