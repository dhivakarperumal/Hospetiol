import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Los.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Logs1() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErros] = useState({})
    const [valid, setValid] = useState(true)

    const handel = (e) => {
        e.preventDefault();
        // console.log(formData)
        let isValid = true;
        let validationErros = {}


        if (formData.email === " " || formData.email === null) {
            isValid = false;
            validationErros.email = "Email  Requerds"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErros.email = "Currect Email Requerds"
        }

        if (formData.password === " " || formData.password === null) {
            isValid = false;
            validationErros.password = "Password Requerds"
        }
        else if (formData.password.length < 6) {
            isValid = false;
            validationErros.password = "Password max 6 char Requerds"
        }

        axios.get("https://651ae52a340309952f0e03d2.mockapi.io/users")
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email) {
                        if (user.password === formData.password) {
                            alert("Login Success Fyll")
                            navigate("/")
                        }
                        else {
                            isValid = false;
                            validationErros.password = "Wrong Password"
                        }
                    }
                })
                setErros(validationErros)
                setValid(isValid)
            })
            .catch(err => console.log(err))

    }
    return (
        <>

            <Container>
                <Row>
                    <Col md={7} lg={12}>
                        <div className="boxes_models1">
                            <div className="elem1">
                                <div className="head1">
                                    <h3 className="mb-3 text-center mt-4">LOGIN</h3>
                                    <form onSubmit={handel}>
                                        <div className="inputs_levels1">
                                            <input type="email" placeholder="Your Email Address"
                                                name='email'

                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                        {valid ? <></> : <span className='text-danger mx-3'>{errors.email} </span>}


                                        <div className="inputs_levels1">
                                            <input type="password" placeholder="Enter Your Password"
                                                name='password'
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                        </div>
                                        {valid ? <></> : <span className='text-danger mx-3'>{errors.password} </span>}


                                        <div className="text-center">
                                            <button className="btns">LOGIN</button>
                                        </div>
                                    </form>
                                    <div className="text-center ">
                                        <p className="mt-3 mb-3"><Link to="/singup">You Have Don't An Account? SignUp Hera!</Link> </p>
                                   </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            
            </Container>
            
        </>
    )
}
export default Logs1