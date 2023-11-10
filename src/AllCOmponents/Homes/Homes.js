import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import img2 from '../Asserts/slider-img.jpg';
import img3 from '../Asserts/about-img.jpg';
import img4 from '../Asserts/contact-img.jpg';
import Bookapoinment from "../BookApoinmet/BookApoiment";
import Conts from "../Contacts/Conts";
import Docs from "../Doctors/Docs";
import Abouts from '../About/Abouts';
import Tremarics from "../Treatments/Tretments";


function Homes1() {
    return (
        <>
            <Container fluid className="rows">
                <Row >
                    <Col>
                        <Carousel>
                            <Carousel.Item interval={1000} >
                                <Image src={img2} alt="" className="images1" width={500} height={500} />
                                <Carousel.Caption>
                                    <div className="box">
                                    <h1>MICO<br></br><span>HOSPITAL</span></h1>
                                       <div className="text-center">
                                       <p className="text-center">when looking at its layout. The point of using Lorem Ipsum is that it has a 
                                            more-or-less normal distribution of letters, as opposed to</p>
                                       </div>
                                        <Button className="btn">Contact Us</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <Image src={img3} alt="" className="images1" width={500} height={500} />
                                <Carousel.Caption>
                                <div className="box">
                                <h1>MICO<br></br><span>HOSPITAL</span></h1>
                                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a 
                                            more-or-less normal distribution of letters, as opposed to</p>
                                        <Button className="btn">Contact Us</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img4} alt="" className="images1" width={500} height={500} />
                                <Carousel.Caption>
                                <div className="box">
                                        <h1>MICO<br></br><span>HOSPITAL</span></h1>
                                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a 
                                            more-or-less normal distribution of letters, as opposed to</p>
                                        <Button className="btn">Contact Us</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                </Row>
            </Container>
          
           <Abouts/>
           <Tremarics/>
          <Bookapoinment/>
          <Docs/>
          <Conts/>  
         
        </>
    )
}
export default Homes1