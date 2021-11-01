import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="bg-light text-dark">
            <br />
            <h1 className="mt-5 text-center">Travel Goru Owners </h1>
            <br />
            <br />
            <Row>
                <Col>
                    <div className="card text-dark shadow-lg ms-5 me-5">
                        <img width="100%" height="400px" src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        <br />
                        <div className="ms-3 mb-2">
                            <h6>Harry Potter</h6>
                            <p class="title">Guide</p>
                            <p>He is founder of travel-guru</p>
                        </div>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://images.unsplash.com/photo-1597627094703-2a8af9caa749?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG91ciUyMGd1aWRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <br />
                        <div className="ms-3 mb-2">
                            <h6>Smith </h6>
                            <p class="title">Guide</p>
                            <p>He is the founder</p>
                        </div>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://media.istockphoto.com/photos/theres-so-much-to-see-picture-id855413388?k=20&m=855413388&s=612x612&w=0&h=mj_yC5JyEc10zei9vxL06DUqBiRqHlNU6viUe-0IcKA=" alt="" />
                        <br />
                        <div className="ms-3 mb-2">
                            <h6>Morrish Harry</h6>
                            <p class="title">Manager</p>
                            <p>He is the manager</p>
                        </div>

                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
            </Row>
            <br />
            <br />

        </div>
    );
};

export default About;