import React from "react";
import './Books.css';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Container } from "react-bootstrap";


function Bookapoinment() {
  return (
    <>

      <Container>
        <div className="welcomes">
          <Row className="mb-3 mx-2 mt-5">
            <h1 className="mt-4 mx-4 mb-5 head"><span>BOOK </span>APPOINTMENT</h1>
            
              <Form.Group as={Col} md="4" >
                <Form.Label>Patient Name</Form.Label>
                <Form.Control required type="text" placeholder="First name" className="wel" />

              </Form.Group>
              <Form.Group as={Col} md="4" >
                <Form.Label>Doctor's Name</Form.Label>
                <Form.Select size="lg" className="wel">
                  <option>Normal Distriputions</option>
                  <option>Normal Distriputions</option>
                  <option>Normal Distriputions</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="4" >
                <Form.Label>Deportment's Name</Form.Label>
                <Form.Select size="lg" className="wel">
                  <option>Normal Distriputions</option>
                  <option>Normal Distriputions</option>
                  <option>Normal Distriputions</option>
                </Form.Select>
              </Form.Group>

          </Row>
          <Row className="mb-3 mx-2">
            <Form.Group as={Col} md="4">
              <Form.Label>Phone No</Form.Label>
              <Form.Control required type="number" placeholder="XXXXXXXX" className="wel" />
            </Form.Group>

            <Form.Group as={Col} md="4" >
              <Form.Label>Chooses Date</Form.Label>
              <Form.Control required type="text" placeholder="" className="wel" />
            </Form.Group>

            <Form.Group as={Col} md="4" >
              <Form.Label>Chooses Date</Form.Label>
              <Form.Control required type="date" placeholder="" className="wel" />
            </Form.Group>
            </Row>
            <Button className="mx-4 mb-4" type="submit">Submit form</Button>
        
      </div>
    </Container> 
                          
        </>
    )
}
export default Bookapoinment