import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { validateInputs } from 'services/formValidation';

const EditProfile = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const intiVal = { name: '', email: '', tel: '' };
  const [errors, setErrors] = useState(intiVal);
  const [inputVals, setInputVals] = useState(intiVal);
  const handleInputOnchange = (e) => {
    //replace the value of relative input according to its name attri
    setInputVals({ ...inputVals, [e.target.name]: e.target.value });
    const errorMsg = validateInputs(e.target.name, e.target.value);
    setErrors({ ...errors, [e.target.name]: errorMsg });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'sorry, due to the limit of fake server, we can not support edit user basic info now'
    );
  };
  const handleReset = () => {
    setInputVals({
      name: userInfo.data.name,
      email: userInfo.data.email,
      tel: userInfo.data.tel,
    });
  };
  useEffect(() => {
    if (userInfo.status === 'sucess') {
      setInputVals({
        name: userInfo.data.name,
        email: userInfo.data.email,
        tel: userInfo.data.tel,
      });
    }
  }, [userInfo.status]);
  return (
    <Form onSubmit={handleSubmit} className='editProfileForm'>
      <Form.Group controlId='profileEditName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='input'
          name='name'
          value={inputVals.name}
          placeholder='Your Name'
          onChange={handleInputOnchange}
          isInvalid={errors['name']}
        />
        <Form.Control.Feedback type='invalid'>
          {errors['name']}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='profileEditEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={inputVals.email}
          placeholder='Enter email'
          onChange={handleInputOnchange}
          isInvalid={errors['email']}
        />
        <Form.Control.Feedback type='invalid'>
          {errors['email']}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='profileEditPhone'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='tel'
          name='tel'
          value={inputVals.tel}
          placeholder='Your Phone Number'
          onChange={handleInputOnchange}
          isInvalid={errors['tel']}
        />
        <Form.Control.Feedback type='invalid'>
          {errors['tel']}
        </Form.Control.Feedback>
      </Form.Group>
      <Link className='changePasswordLink' to={'/'}>
        Change Your Password(undone)
      </Link>
      <Button variant='outline-primary' type='submit'>
        Submit
      </Button>
      <Button variant='outline-danger' onClick={handleReset}>
        Reset
      </Button>
    </Form>
  );
};

export default EditProfile;
