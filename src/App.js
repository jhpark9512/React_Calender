
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';
import Calender from './component/Calender.js';
import { useState } from 'react';

function App() {

  let [modal, setModal] = useState(false);

  return (
    <div className='myApp'>

      <Navbar bg="dark" variant="dark">
        <NavbarBrand>MyApp</NavbarBrand>
        <Nav className="me-auto">
          <NavDropdown>
            <NavItem>
              <Button className='nav-button'><Link to="/calender">달력</Link></Button>
            </NavItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <br></br>
      <Routes>
      <Route path="/calender" element={<Calender/>}/>
      </Routes>
    </div>

  );
}

export default App;
