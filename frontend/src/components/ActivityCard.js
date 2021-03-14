import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ActivityProductReview from './ActivityProductReview';

const ActivityCard = (props) => {
  const { date, id, items, vendorInfo } = props.order;
  return (
    <Card border='secondary' className='m-3'>
      <Card.Header>
        Date: {date.toLocaleDateString()}
        <Button className='order-detail text-info' variant='light'>
          Order Number: {id}
        </Button>
      </Card.Header>

      <Card.Body>
        {items.map((item) => (
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
