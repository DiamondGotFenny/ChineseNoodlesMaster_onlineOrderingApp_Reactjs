import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import {
  faBreadSlice,
  faCheck,
  faUser,
  faTruck,
  faBox,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

const TrackOrder = (props) => {
  const { status } = props;
  const transStatusToVal = (status) => {
    switch (status) {
      case 'Order confirmed':
        return 0;
      case 'Preparing by vendor':
        return 1;
      case 'Picked by Courier':
        return 2;
      case 'On the way':
        return 3;
      case 'Ready for pickup':
        return 4;
      case 'Order Completed':
        return 5;
      default:
        return 0;
    }
  };
  const statusVal = transStatusToVal(status);
  const stepsArr = [
    { text: 'Order confirmed', value: 0, icon: faCheck },
    { text: 'Preparing by Vendor', value: 1, icon: faBreadSlice },
    { text: 'Picked by Courier', value: 2, icon: faUser },
    { text: 'On the Way', value: 3, icon: faTruck },
    { text: 'Ready for Pickup', value: 4, icon: faBox },
    { text: 'Order Completed', value: 5, icon: faThumbsUp },
  ];
  const stepsNewArr = stepsArr.map((step) => {
    if (step.value <= statusVal) {
      step.className = 'step active';
      return step;
    } else {
      step.className = 'step';
      return step;
    }
  });

  return (
    <div className='track'>
      {stepsNewArr.map((step) => (
        <div className={step.className}>
          <span className='icon'>
            <FontAwesomeIcon icon={step.icon} />
          </span>
          <span className='text'>{step.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrackOrder;
