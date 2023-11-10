import React from "react";
import {Col, Row } from "react-bootstrap";
import './Footer.css';



function Footers() {
    return (
        <>


            <Row className="rows12">

                <Col md={6} lg={12}>
                    <div className="booters">
                        <img className="post" src={require('../AllCOmponents/Asserts/post3.jpg')} alt="" />
                        <div className="inputs">
                            <input type="text"></input>
                            <p className="sub">Subcribes</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="footers">
                        <span className="boxes4"></span><h5 >ADDRESS</h5>
                        <p>Location</p>
                        <p>Call +01 1234567890</p>
                        <p>mail@domain.com</p>
                        <h4><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i></h4>
                    </div>
                </Col>

                <Col md={6} lg={3}>
                    <div className="footers">
                        <span className="boxes4"></span><h5 >USEFUL LINK</h5>

                        <p>Home</p>
                        <p>About</p>
                        <p>Tretments</p>
                        <p>Docters</p>
                        <p>Testimonial</p>
                        <p>Contacts Us</p>
                    </div>
                </Col>


                <Col md={6} lg={3}>
                    <div className="footers">
                        <span className="boxes4"></span><h5 >LATEST POSTS</h5>

                        <div className="post mt-5">
                           <h6> <img src={require('../AllCOmponents/Asserts/post1.jpg')} alt="" width={80} height={80}/>Normal distribution</h6>
                            <h6> <img src={require('../AllCOmponents/Asserts/post2.jpg')} alt=""  width={80} height={80}/>Normal distribution</h6>
                        </div>

                    </div>
                </Col>

                <Col md={6} lg={3}>
                    <div className="footers">
                        <span className="boxes4"></span><h5 >NEWS</h5>

                        <div className="post mt-5">
                            <h6><img src={require('../AllCOmponents/Asserts/post3.jpg')} alt="" width={80} height={80} />Normal distribution</h6>
                            <h6><img src={require('../AllCOmponents/Asserts/post4.png')} alt="" width={80} height={80} />Normal distribution</h6>
                        </div>
                    </div>
                </Col>

                <div className="text-center">
                    <p className="text-white mt-5">© 2023 All Rights Reserved. By Designs</p>
                </div>

            </Row>


        </>
    )
}
export default Footers