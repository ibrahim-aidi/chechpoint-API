import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <header>
          <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">WS API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users"> Users</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar