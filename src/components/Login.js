import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const getData=(e)=>{

    const data={
      email,
      password
    }
    return axios.get('http://localhost:4200/login',data)
    .then(dat=>{
      console.log(dat.data.message)
      alert(dat.data.message)
    })
  }

  return (
    <div>
        <Form className='col-3 p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <div className='text-center'>
      <Link to={'/'}>
      <Button onClick={(e)=>getData(e)} variant="primary">
        Login
      </Button>
      </Link>
      </div>
    </Form>

    </div>
  )
}

export default Login