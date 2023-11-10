import React from "react";
import { Container ,Row ,Col, Button } from "react-bootstrap";
import './Treate.css';



function Tremarics()
{
    return(
        <>
        
        <Container>
            <div className="text-center mt-5">
               <h1>Hospital <span className="blues">Treatment</span></h1>
            </div>
            <Row >
                <Col md={6} lg={3} className="borders mb-5" >
                   <div className="boxes">
                      <div className="text-center">
                      <img src={require('../Asserts/t1.png')} alt="" width={80} height={80}/>
                        </div>
                      <h3>Nephrologist Care</h3>
                      <p>alteration in some form, by injected humour, or randomised words which don't 
                        look even slightly e sure there isn't anything</p>
                        <Button className="btn1">Read Mores...</Button>
                   </div>
                </Col>

                <Col md={6} lg={3} className="borders mb-5" >
                   <div className="boxes">
                      <div className="text-center">
                      <img src={require('../Asserts/t2.png')} alt="" width={80} height={80} />
                        </div>
                      <h3>Eye Care</h3>
                      <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                      <Button className="btn1">Read Mores...</Button>
                   </div>
                </Col>

                <Col md={6} lg={3} className="borders mb-5" >
                   <div className="boxes">
                      <div className="text-center">
                      <img src={require('../Asserts/t3.png')} alt=""  width={80} height={80}/>
                     </div>
                      <h3>Pediatrician Clinic</h3>
                      <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                      <Button className="btn1">Read Mores...</Button>
                   </div>
                </Col>

                <Col md={6} lg={3} className="borders mb-5" >
                   <div className="boxes">
                      <div className="text-center">
                       <img src={require('../Asserts/t4.png')} alt="" width={80} height={80}/>
                      </div>
                      <h3>Parental Care</h3>
                      <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                      <Button className="btn1">Read Mores...</Button>
                   </div>
                </Col>
            </Row>
         </Container>
      
        </>
    )
}
export default Tremarics