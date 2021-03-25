import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ActivityCard from 'components/ActivityCard';
import cloneDeep from 'lodash/cloneDeep';

const ActivitiesContainer = () => {
  /*
we read the orders data from userInfo, then diplay each product to a card, then we load the reviews data from the product database, then find out if the user writes a review in the reviews list or not.
*/
  const userInfo = useSelector((state) => state.userInfo);
  const [sortedOrders, setsortedOrders] = useState([]);
  const sortOrders = (orders) => {
    if (orders.length > 0) {
      //do the deep copy hereor the orders array will be alter in other components too;
      //even the array.map() won't here
      const newOrders = cloneDeep(orders);
      const updatedOrders = newOrders.sort(
        (a, b) => b.orderInfo.date - a.orderInfo.date
      );
      setsortedOrders(updatedOrders);
    }
  };
  useEffect(() => {
    if (userInfo.status === 'sucess') {
      //pass the orders array to local variable first, then you can alter it;
      //or the orders array will be alter in other components too;
      sortOrders(userInfo.data.orders);
    }
  }, [userInfo.status]);

  return (
    <>
      {sortedOrders.length > 0 &&
        sortedOrders.map((order) => (
          <ActivityCard key={order.orderInfo.id} order={order} />
        ))}
    </>
  );
};

export default ActivitiesContainer;
