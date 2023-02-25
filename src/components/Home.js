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

        <Link to={'standings'}>
          <Button>Standings</Button>
        </Link>

        <Link to={'/'}>
          <Button>Race Results</Button>
        </Link>


    </div>
  )
}

export default Home

// https://s0.2mdn.net/dfp/1779066/5130156133/1676982839104/ATA-IconParka-Libery%20Media-Media_en_970x250/headline-1.png