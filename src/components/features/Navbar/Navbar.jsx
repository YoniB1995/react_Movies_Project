import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

export default function NavTest() {
    return (
    <Navbar bg="dark" variant="dark" className="header_nav">
    <Navbar.Brand href="#home" >Homepage</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="nav1">Subjects</Nav.Link>
      <Nav.Link href="#features" className="nav1">Features</Nav.Link>
      <Nav.Link href="#pricing" className="nav1">About Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="הקלד.." className="mr-sm-2" />
      <Button variant="outline-info">Search!</Button>
    </Form>
  </Navbar>
    )
}
