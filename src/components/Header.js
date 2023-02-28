import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
          style={{height:'50px'}}
          src='https://img.favpng.com/11/22/21/2018-fia-formula-one-world-championship-abu-dhabi-grand-prix-mclaren-formula-two-logo-png-favpng-AMwwqjrVh7CLGLe5pWZq43u5h.jpg'
          ></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="raceschedules">Race Schedules</Nav.Link>
            <Nav.Link href="login">Login
      {/* <Link to={'login'}>Login</Link> */}
              </Nav.Link>
            <Button>Login</Button>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to={'login'}>
        <Button>Login</Button>
      </Link> */}

    </div>
  )
}

export default Header