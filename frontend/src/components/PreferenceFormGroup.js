import  React, {  useState }  from 'react';
import { Card, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyFavorite from 'components/myFavorite';
import Ratings from 'components/ratingStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductQuantityCounter from 'components/ProductQuantityCounter';

const PreferenceFormGroup = (props) => {
    const {preferenceObj,formGroupState,handleOnchange}=props
    return ( 
        <Form.Group controlId={preferenceObj.name} onChange={handleOnchange}>
            {preferenceObj.itemsList.map(item=>{return <Form.Check key={item} type="radio" inline label={item} 
            id={item}  name={preferenceObj.name} value={item} readOnly checked={formGroupState===item}/>})}
        </Form.Group>
     );
}
 
export default PreferenceFormGroup;