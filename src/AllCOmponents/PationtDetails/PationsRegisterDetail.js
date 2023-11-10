import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Pations.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Data.css';
import { API_URL } from './API_URL';


const PationsRegisterDetail = () => {
    const[formdatas,setFormDatas]=useState({
        fname:'',
        lname:'',
        fathername:'',
        mothername:'',
        age:'',
        gender:'',
        email:'',
        mobile:'',
        address:'',
        pations_descriptions:'',

    })
    const navegates=useNavigate()

    const values_submit= async(e)=>{
        e.preventDefault();
        await axios.post(API_URL,formdatas)
        .then((res)=>{
          alert("Success Full datas")
          navegates("/datas")
        })
        .catch((err)=>console.log(err))
    }
    
  return (
    <>
    
    <Container>
        
        <Row>

            <Col>
               <div className='pations_Regiter_details'>
               <h1 className='text-center mt-3 mb-3 '>Patient Register Details</h1>
                  <form >
                  
                        <div>
                            <label>FirstName</label>
                            <input type='text' name='fname'
                            placeholder='Enter Your FirstName' 
                            onChange={(e)=>setFormDatas({...formdatas,fname:e.target.value})} />
                       </div>
                   
                       <div>
                            <label>LastName</label>
                            <input type='text' name='lname'
                            placeholder='Enter Your LastName' 
                            onChange={(e)=>setFormDatas({...formdatas,lname:e.target.value})} />
                       </div>
                   
                        <div>
                            <label>FatherName</label>
                            <input type='text' name='fathername'
                            placeholder='Enter Your FatherName' 
                            onChange={(e)=>setFormDatas({...formdatas,fathername:e.target.value})} />
                       </div>
                    
                       <div>
                            <label>MotherName</label>
                            <input type='text' name='mothername'
                            placeholder='Enter Your MotherName' 
                            onChange={(e)=>setFormDatas({...formdatas,mothername:e.target.value})} />
                       </div>
                    
                        <div>
                            <label>Age</label>
                            <input type='text' name='age'
                            placeholder='Enter Your Age' 
                            onChange={(e)=>setFormDatas({...formdatas,age:e.target.value})} />
                       </div>
                    
                       <div>
                            <label>Gender</label>
                            <input type='text' name='gender'
                            placeholder='Enter Your Gender' 
                            onChange={(e)=>setFormDatas({...formdatas,gender:e.target.value})} />
                       </div>
                    
                        <div>
                            <label>Email</label>
                            <input type='text' name='email'
                            placeholder='Enter Your Email Address' 
                            onChange={(e)=>setFormDatas({...formdatas, email:e.target.value})} />
                       </div>
                    
                       <div>
                            <label>MobileNo</label>
                            <input type='text' name='mobile'
                            placeholder='Enter Your Mobile No' 
                            onChange={(e)=>setFormDatas({...formdatas,mobile:e.target.value})} />
                       </div>
                    
                        <div>
                            <label>Address</label>
                            <input type='text' name='address'
                            placeholder='Enter Your Address' 
                            onChange={(e)=>setFormDatas({...formdatas, address:e.target.value})} />
                       </div>
                   
                       <div>
                            <label>PationsDescriptions</label>
                            <input type='text' name='pations_descriptions'
                            placeholder='Enter Your Pationsdescriptions' 
                            onChange={(e)=>setFormDatas({...formdatas,pations_descriptions:e.target.value})} />
                       </div>
                    
                   <button className='btn' onClick={values_submit}>Submit</button>
                  </form>
                
               </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default PationsRegisterDetail
