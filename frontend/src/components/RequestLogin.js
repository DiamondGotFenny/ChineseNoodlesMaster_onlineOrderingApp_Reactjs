import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const RequestLogin=(props)=>{

  const {show,handleClose}=props
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><h4 className="text-center my-3">Want to add to your favorite? Please Login.</h4> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link className="btn btn-primary" to={"/login"}>
            Login
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestLogin;