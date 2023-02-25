import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from "axios";

function Register() {

  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const setData=(e)=>{
    console.log(email);
    console.log(username);
    console.log(password);

    const data={
      email,
      username,
      password
    }
    return axios.post('http://localhost:4200/register',data)
    .then(dat=>{
      if(dat){
      console.log(dat.data)
      alert(dat.data.message)
      }
      else{
      console.log(dat.AxiosError.message);
      alert(dat.message)
      }
    })
  }

  return (
    <div>
    <Form style={{width:'700px', margin:'50px'}}>
        <h1 style={{textAlign:'center'}}>Register here...</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept the Terms & Conditions" />
      </Form.Group>
      <Link to={'/login'}>
      <Button variant="primary" onClick={(e)=>setData(e)}>
        Register
      </Button>
      </Link>
    </Form>

    </div>
  )
}

export default Register