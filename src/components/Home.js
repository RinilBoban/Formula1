import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        
        <Link to={'login'}>
            <Button>Login</Button>
        </Link>

        <Link to={'register'}>
            <Button>Register</Button>
        </Link>

        <Link to={'raceschedules'}>
            <Button>Race Schedules</Button>
        </Link>


    </div>
  )
}

export default Home