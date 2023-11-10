import React from "react";
import { Container ,Row ,Col, Button } from "react-bootstrap";
import './About.css';
import imgs1 from '../Asserts/about-img.jpg'



function Abouts()
{
    return(
        <>
         
         <Container>
            <Row >
                <Col md={6} className="borders" >
                   <div className="boxes">
                      <img src={imgs1} alt="" className="img-fluid" />
                   </div>
                </Col>

                <Col md={6} className="borders" >
                   <div className="boxes">
                      <h1>About <span>Hospital</span></h1>
                      <p>has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                        content here', making it look like readable English. Many desktop publishing packages 
                        and web page editors has a more-or-less normal distribution of letters, as opposed to 
                        using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors</p>
                        <Button className="btn">Read More....</Button>
                   </div>
                </Col>
            </Row>
         </Container>
        
        </>
    )
}
export default Abouts