import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { API_URL } from './API_URL';
import { useNavigate } from 'react-router-dom';


const DataPationsAll = () => {


    // const navvigates=useNavigate()
    const[user,setUser]=useState([])

      const callGetApi =async ()=>{
        const res=await axios.get(API_URL)
        setUser(res.data)
    }

 
    const delete_users=async(id)=>{
        await axios.delete(API_URL+id)
        callGetApi();
    }

//     const update_users=({fname,lname,fathername,mothername,age,gender,email,mobile,address,pations_descriptions,id})=>
//     {
               
//         localStorage.setItem('id',id)
//         localStorage.setItem('fname',fname)
//         localStorage.setItem('lname',lname)
//         localStorage.setItem('fathername',fathername)
//         localStorage.setItem('mothername',mothername)
//         localStorage.setItem('age',age)
//         localStorage.setItem('gender',gender)
//         localStorage.setItem('email',email)
//         localStorage.setItem('mobile',mobile)
//         localStorage.setItem('address',address)
//         localStorage.setItem('pations_descriptions',pations_descriptions)
//         navvigates("/updated")

// }    
    useEffect(()=>{
        callGetApi();
    },[])



  return (
    <>
    <Container fluid>
    <div>
        <h1 className='text-center'>All Pations Details</h1>
    </div>

    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>FatherName</th>
                    <th>MotherName</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>MobileNo</th>
                    <th>Address</th>
                    <th>Pations Desis</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               
                   {
                     user.map((u)=>(
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.fname}</td>
                            <td>{u.lname}</td>
                            <td>{u.fathername}</td>
                            <td>{u.mothername}</td>
                            <td>{u.age}</td>
                            <td>{u.gender}</td>
                            <td>{u.email}</td>
                            <td>{u.mobile}</td>
                            <td>{u.address}</td>
                            <td>{u.pations_descriptions}</td>
                            <td><button className="btn123" >Edit</button></td>
                            <td><button className="btn1234" onClick={()=>delete_users(u.id)}>Delete</button></td>
                            
                        </tr>

                     ))
                   }
            </tbody>
        </table>
    </div>
    </Container>
    </>
  )
}

export default DataPationsAll
