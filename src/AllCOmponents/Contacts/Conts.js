import React from "react";
import { Container ,Row ,Col, Button } from "react-bootstrap";
import './Contst12.css';


function Conts()
{
    return(
        <>
        
        <Container>
            <Row >
                <Col md={6} className="borders mt-4" >
                <div className="boxes">
                      <h1>GET IN TOUCH</h1>
                     
                     <div className="input_box">
                        <div className="inputs1">
                            <input type="text" className="loves" placeholder="Full Name" />
                        </div>

                        <div className="inputs1">
                            <input type="email" className="loves" placeholder="Email" />
                        </div>

                        <div className="inputs1">
                            <input type="text" placeholder="Phone No" className="loves" />
                        </div>

                        <div className="inputs1">
                           <textarea placeholder="Messages"></textarea>
                        </div>
                     </div>

                        <Button className="Btns">Send</Button>
                   </div>
                </Col>

                <Col md={6} className="borders" >
                   <div className="boxes">
                      <img src={require('../Asserts/contact-img.jpg')} alt="" width={500} height={400}/>
                   </div>
                </Col>
            </Row>
         </Container>
       
        </>
    )
}
export default Conts