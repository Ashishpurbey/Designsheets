import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../asset/Header.css'
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'


const Header = () => {
    return (
        <div className='nav_dimension'>
    
 
<Navbar  className="pt-0 pb-0  nav_color" collapseOnSelect expand="md"   variant="light">
  <Navbar.Brand href="#home">
    <img className="img1" src="./images/logoblue@1X.png"></img>
    <img className="img2" src="./images/DesignSheets@1X.png"></img>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/howitwork" className='text-color '>
      <div className="hover">How it works</div></Nav.Link>
      <Nav.Link href="/feature" className='text-color'>
      <div className="hover shadow-box-example hoverable ">Features</div></Nav.Link>
      <Nav.Link href="" className='text-color'>
      <div className="hover">About</div></Nav.Link>
      <Nav.Link href="/career" className='text-color'><div className="hover">Careers</div></Nav.Link>
      <Nav.Link href="" className='text-color '><div className='hover'>Register</div></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
