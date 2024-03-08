
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/Calender.js';
import {Creat, Read} from './component/CRUD.js';
import { useState } from 'react';

function App() {

  let [modal1, setModal1] = useState(false);
  let [modal2, setModal2] = useState(false);
  function Cal(){
    setModal1(!modal1)
    if(modal2 == true){
      setModal2(false)
    }
  }
  function Crud(){
    setModal2(!modal2)
    if(modal1 == true){
      setModal1(false)
    }
  }

  return (
    <div className='myApp'>

      <Navbar bg="dark" variant="dark">
        <NavbarBrand>MyApp</NavbarBrand>
        <Nav className="me-auto">
          <Nav>
            <NavItem>
              <Button className='nav-button' onClick={() => { Cal() }}>달력</Button>
              <Button className='nav-button' onClick={() => { Crud() }}>CRUD</Button>
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
      <br></br>
      {
        modal1 == true ? <Calender/> : null
      }
      {
        modal2 == true ? <Creat/>: null
      }
      <Read/>
    </div>
  );
}

export default App;
