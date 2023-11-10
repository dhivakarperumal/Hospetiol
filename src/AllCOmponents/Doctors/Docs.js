import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Doctas.css'






function Docs() {
    return (
        <>
            <Container fluid className="backrounds">
                <div className="text-center">
                    <h1 className="py-2 my-2">OUR  <span className="blues1">DOCTORS</span></h1>
                </div>
                <Row >
                    <Col md={6} lg={3} className="borders1 mb-5" >
                        <div className="boxes2">
                            <img src={require('../Asserts/team1.jpg')} alt="" width={300} height={300} />
                            <div className="text-center">
                                <h4>Hennry</h4>
                                <h4 className="doct">MBBS</h4>
                                <h4><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i></h4>
                            </div>

                        </div>
                    </Col>

                    <Col md={6} lg={3} className="borders1 mb-5" >
                        <div className="boxes2">
                            <img src={require('../Asserts/team2.jpg')} alt="" width={300} height={300} />
                            <div className="text-center">
                                <h4>Jani</h4>
                                <h4 className="doct">MBBS</h4>
                                <h4><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i></h4>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={3} className="borders1 mb-5" >
                        <div className="boxes2">
                            <img src={require('../Asserts/team3.jpg')} alt="" width={300} height={300} />
                            <div className="text-center">
                                <h4>Karthic</h4>
                                <h4 className="doct">MBBS</h4>
                                <h4><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i></h4>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={3} className="borders1 mb-5" >
                        <div className="boxes2">
                        <img src={require('../Asserts/team1.jpg')} alt="" width={300} height={300} />
                            <div className="text-center">
                                <h4>Hennry</h4>
                                <h3 className="doct">MBBS</h3>
                                <h4><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i></h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Docs