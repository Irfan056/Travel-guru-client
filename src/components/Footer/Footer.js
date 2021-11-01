import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='m-5 p-5 rounded-3 text-center bg-dark text-light'>

            <Row >
                <Col>
                    <h1 className="mt-3">Travel Guru</h1>

                </Col>
                <Col>

                    <h6>About our journey</h6>
                    <h6>Our visiting Stories</h6>
                    <h6>Event/tickets</h6>
                    <h6>News</h6>

                </Col>

                <Col>
                    <h3>Help line</h3>
                    <h5>Phone: 01788564533</h5>
                    <h6>travelguru@gmail.com</h6>
                </Col>
            </Row>
        </div>

    );
};

export default Footer;