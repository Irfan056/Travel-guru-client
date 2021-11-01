import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="subComponent-lg bg-success text-white" id="contactBody">
            <Container>
                <header className="headerTitle text-center pt-5">
                    <h1>Contact with Us </h1>
                    <br />
                </header>
                <section className="svg-group text-center">
                    <Row>
                        <Col lg="4" md="4">
                            <div className="svg-card-3">

                                <p>Phone :0177642525</p>
                                <br />
                                <p>Phone :0173636778</p>
                                <br />
                                <p> phone :01845467775</p>
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className="svg-card-3">

                                <p>America</p>
                                <br />
                                <p>Canada</p>
                                <br />
                                <p>Australia</p>
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className="svg-card-3">

                                <p>Harry Potter</p>
                                <br />
                                <p>smith256@yahoo.com</p>
                                <br />
                                <p>morrisharry@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </section>
                <hr />
                <br />
                <section className="msg text-center">
                    <form action="">
                        <Row>
                            <Col sm="6">
                                <input

                                    type="text"
                                    name="Name"
                                    id="reviewer-name"
                                    placeholder="Your name please"
                                    required
                                />
                                <br />
                                <br />
                                <input
                                    className="mb-5"
                                    type="email"
                                    name="Email"
                                    id="reviewer-email"
                                    placeholder="Your email"
                                    required
                                />
                            </Col>
                            <Col>
                                <div className="d-block">
                                    <textarea
                                        name="Message"
                                        id="reviewer-message"
                                        rows="4"
                                        placeholder="Your Message"
                                    />
                                    <br />

                                    <Button outline color="light" className="me-5 mb-5" >
                                        Send Message
                  </Button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </section>
            </Container>
        </div>
    );
};

export default Contact;