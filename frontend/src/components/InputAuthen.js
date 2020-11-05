import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, FormControl } from 'react-bootstrap';
const InputAuthen=(props)=>{
    const {data,inputOnchange,value}=props;
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
            />
        </InputGroup>
    )
}

export default InputAuthen;