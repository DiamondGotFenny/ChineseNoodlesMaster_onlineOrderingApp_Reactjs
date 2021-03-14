import React from 'react';
import Form from 'react-bootstrap/Form';

const AddressSelectableLayer = (props) => {
  const { id, addressTitle } = props.item;
  const { selectedAdrs } = props;
  return (
    <Form.Label>
      <Form.Check
        key={id}
        type='radio'
        id={id}
        name={addressTitle}
        value={addressTitle}
        readOnly
        className='card-input-element d-none'
        checked={selectedAdrs === addressTitle}
      />
      {props.children}
    </Form.Label>
  );
};

export default AddressSelectableLayer;
