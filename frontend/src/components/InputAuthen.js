import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
const InputAuthen=(props)=>{
    const {data,inputOnchange,value,error}=props;
    const {id,name,icon,type,placeholder,ariaLabel,ariaDesr}=data;
    return(
        <InputGroup id={id}>
            <InputGroup.Prepend>
                <InputGroup.Text >
                    <FontAwesomeIcon icon={icon} />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-describedby={ariaDesr}
                onChange={inputOnchange}
                isInvalid ={error}//use the error message to control this attri
                //the error message below will only show when isInvalid=true
            />
            <Form.Control.Feedback type="invalid"> 
                {error}
            </Form.Control.Feedback>
        </InputGroup>
    )
}

export default InputAuthen;