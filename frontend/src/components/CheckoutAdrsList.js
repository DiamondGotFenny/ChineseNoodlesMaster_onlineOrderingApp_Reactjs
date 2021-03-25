import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddressCard from 'components/AddressCard';
import EditAddressModal from 'components/EditAddressModal';
import AddressSelectableLayer from './AddressSelectableLayer';

const CheckoutAdrsList = (props) => {
  const { handleSelectedAdrs, addressesList } = props;
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAdrs, setselectedAdrs] = useState('Default Address');
  const handleOnchange = (e) => {
    setselectedAdrs(e.target.value);
    const selectedAdrsObj = addressesList.find(
      (ele) => ele.addressTitle === e.target.value
    );
    handleSelectedAdrs(selectedAdrsObj);
  };
  return (
    <>
      <Form.Group onChange={handleOnchange}>
        {addressesList?.length > 0 &&
          addressesList.map((item, index) => (
            <AddressSelectableLayer
              key={index}
              item={item}
              selectedAdrs={selectedAdrs}>
              <AddressCard item={item} />
            </AddressSelectableLayer>
          ))}
      </Form.Group>

      <Card className='mb-4'>
        <Card.Body className='addNewAdrs'>
          <Button
            variant='outline-light'
            onClick={() => setShowEditModal(true)}
            className='addNewAdrsBtn'>
            <FontAwesomeIcon icon={faPlus} />
            <h2 className='mt-1 text-info'>Add New Address</h2>
          </Button>
        </Card.Body>
      </Card>
      <EditAddressModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
      />
    </>
  );
};

export default CheckoutAdrsList;
