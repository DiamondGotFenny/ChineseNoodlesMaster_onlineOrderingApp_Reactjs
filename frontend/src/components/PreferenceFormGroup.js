import  React  from 'react';
import {  Form } from 'react-bootstrap';


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