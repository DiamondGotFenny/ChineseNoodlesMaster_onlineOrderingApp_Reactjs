import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Container, Form, InputGroup, FormControl, Row, Col, FormLabel, FormGroup } from 'react-bootstrap';
import { faFacebookF, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Link } from 'react-router-dom';

const Register=()=>{
    return (
        <Container>
            <Card className="bg-light mt-3 px-3 col-11 col-md-6 row">
                <Card.Body className="mx-auto col-11" style={{maxWidth: "600px"}}>
                    <p>
                        <Button className="btn btn-block btn-twitter">
                            <FontAwesomeIcon icon={faTwitter} /> Login via Twitter
                        </Button>
                        <Button className="btn btn-block btn-facebook">
                            <FontAwesomeIcon icon={faFacebookF} /> Login via Facebook
                        </Button>
                        <Button className="btn btn-block btn-google">
                            <FontAwesomeIcon icon={faGoogle} /> Login via Google
                        </Button>
                        <Button className="btn btn-block btn-instagram">
                            <FontAwesomeIcon icon={faInstagram} /> Login via Instagram
                        </Button>
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <h5 className="text-center mb-3">Get started with your free account</h5>
                    <Form>
                        <Form.Group>
                        <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-name">
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="text"
                                    placeholder="Your Name"
                                    aria-label="name"
                                    aria-describedby="enter your name"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="email"
                                    placeholder="Your Email"
                                    aria-label="email"
                                    aria-describedby="enter your email"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-phone">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="tel"
                                    placeholder="Your Phone"
                                    aria-label="phone number"
                                    aria-describedby="enter your phone number"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-Password">
                                        <FontAwesomeIcon icon={faLock} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="password"
                                    placeholder="Your password"
                                    aria-label="password"
                                    aria-describedby="enter your password"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-password-repeat">
                                        <FontAwesomeIcon icon={faLock} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="password"
                                    placeholder="Repeat Your Password"
                                    aria-label="password"
                                    aria-describedby="Repeat your password"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Row className="justify-content-start my-3">
                            <Col>
                                <div className="form-check">
                                    <FormLabel className="form-check-label">
                                        <FormCheckInput type="checkbox" className="form-check-input"/>
                                        I Read and Accept <Link to={"/"}>Terms and Conditions</Link>
                                    </FormLabel>
                                </div>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Button type="submit" className="btn btn-primary btn-block">
                                Create Account
                            </Button>
                            <p class="text-center">Have an account? <Link to={"/login"}>Log In</Link></p>
                        </FormGroup>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Register;