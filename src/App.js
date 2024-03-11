
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/Calender.js';
import Create from './component/Create.js';
import Read from './component/Read.js';
import { useState } from 'react';


function App() {

  let [modal1, setModal1] = useState(false);
  let [modal2, setModal2] = useState(false);
  let [modal3, setModal3] = useState(false);
  
  
  return (
    <div className='myApp'>

      <Navbar bg="dark" variant="dark">
        <NavbarBrand>MyApp</NavbarBrand>
        <Nav className="me-auto">
          <Nav>
            <NavItem>
              <Button className='nav-button' onClick={() => { setModal1(!modal1) }}>달력</Button>
              <Button className='nav-button' onClick={() => { setModal2(!modal2) }}>글 작성</Button>
              <Button className='nav-button' onClick={() => { setModal3(!modal3) }}>글 목록</Button>
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
      <br></br>
      {
        modal1 == true ? <Calender/> : null
      }
      {
        modal2 == true ? <Create/>: null
      }
      {
      modal3 == true ? <Read/> : null
      }
    </div>
  );
}

export default App;
