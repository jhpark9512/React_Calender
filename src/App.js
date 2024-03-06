
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/Calender.js';
import { useState } from 'react';

function App() {

  let [modal, setModal] = useState(false);

  return (
    <div className='myApp'>

      <Navbar bg="dark" variant="dark">
        <NavbarBrand>MyApp</NavbarBrand>
        <Nav className="me-auto">
          <Nav>
            <NavItem>
              <Button className='nav-button' onClick={()=>{setModal(!modal)}}>달력</Button>
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
      <br></br>
      {
        modal == true ? <Calender/> : null
      } 
    </div>

  );
}

export default App;
