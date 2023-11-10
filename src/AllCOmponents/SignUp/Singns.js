import React, { useState } from "react";
import './Sin.css';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Sings2() {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        cpassword:''
    })

    const[errors,setErros]=useState({})
    const[valid,setValid]=useState(true)
    const navigate=useNavigate()


    const handel =(e) =>{

        e.preventDefault();
        // console.log(formData)
        let isValid=true;
        let validationErros={}

        if (formData.name === " " || formData.name === null)
        {
            isValid=false;
            validationErros.name="First Name Requerds"
        }

        if (formData.email===" " || formData.email===null)
        {
            isValid=false;
            validationErros.email="Email Requerds"
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            isValid=false;
            validationErros.email="Currect Email Requerds"
        }

        if (formData.password===" " || formData.password===null)
        {
            isValid=false;
            validationErros.password="Password Requerds"
        }
        else if(formData.password.length<6)
        {
            isValid=false;
            validationErros.password="Password max 6 char Requerds"
        }

        if (formData.cpassword !== formData.cpassword)
        {
            isValid=false;
            validationErros.cpassword="Conform Password max 6char Requerds"
        }
        setErros(validationErros)
        setValid(isValid)

        if(Object.keys(validationErros).length===0)
        {
           
            axios.post("https://651ae52a340309952f0e03d2.mockapi.io/users",formData)
            .then(result=>{
                alert("Register Success Fully")
                navigate('/login')
            })
            .catch(err=>console.log(err))
        }
    }
    return (
        <>

            <Container>
                <Row>
                    <Col md={7} lg={12}>
                        <div className="boxes_models">
                            <div className="elem">
                                <div className="head">
                                    <h3 className="sing_head mb-3 text-center mt-4">CREATE ACCOUNT</h3>
                                    <form  onSubmit={handel}>
                                    <div className="inputs_levels">
                                        <input type="text" placeholder="Enter Your Name.."
                                        name='name' 
                                        onChange={(e)=>setFormData({...formData,name:e.target.value})} />
                                    </div>
                                    {valid ? <></> : <span className='text-danger mx-3'>{errors.name} </span>}

                                    <div className="inputs_levels">
                                        <input type="email" placeholder="Your Email Address.." 
                                        name='email' 
                                        onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                                    </div>
                                    {valid ? <></> : <span className='text-danger mx-3'>{errors.email} </span>}

                                    
                                    <div className="inputs_levels">
                                        <input type="password" placeholder="Enter Your Password.." 
                                        name='password' 
                                        onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                                    </div>
                                    {valid ? <></> : <span className='text-danger mx-3'>{errors.password} </span>}
                                    

                                    <div className="inputs_levels">
                                        <input type="password" placeholder="Repeate Your PassWord" 
                                        name='cpassword' 
                                        onChange={(e)=>setFormData({...formData,cpassword:e.target.value})} />
                                    </div>
                                    {valid ? <></> : <span className='text-danger mx-3'>{errors.password} </span>}
                                    
                                   <div className="text-center">
                                            <button className="btns">SIGN UP</button>
                                   </div>
                                    </form>


                                </div>
                                <div className="text-center ">
                                        <p className="mt-4 mb-3"><Link to="/login">Have Already An Account? Login Hera!</Link> </p>
                                   </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

         
        </>
    )
}
export default Sings2