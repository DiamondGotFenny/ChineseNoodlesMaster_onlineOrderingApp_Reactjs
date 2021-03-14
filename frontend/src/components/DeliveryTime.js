import React from 'react';
import Form from 'react-bootstrap/Form';
import { availableDeiveryTime } from 'utilis/availableDeliveryTime';

const DeliveryTime = (props) => {
  const { handleTimeValueChanges, getDefaultVal } = props;
  const currentTime = new Date();
  const availableTime = availableDeiveryTime(currentTime);
  const defaultVal = `${availableTime[0].start}-${availableTime[0].end}`;
  getDefaultVal(defaultVal);
  return (
    <Form.Control
      id='deliveryTime'
      as='select'
      defaultValue={defaultVal}
      onChange={handleTimeValueChanges}>
      {availableTime.map((ele) => (
        <option
          key={`${ele.start}-${ele.end}`}
          value={`${ele.start}-${ele.end}`}>{`${ele.start}-${ele.end}`}</option>
      ))}
    </Form.Control>
  );
};

export default DeliveryTime;
