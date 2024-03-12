
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/Calender.js';
import Create from './component/Create.js';
import Board from './component/Board.js';
import Update from './component/Update.js';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  const moveToCalender = () => {
    navigate('/calender')
  }
  const moveToBoard = () => {
    navigate('/Board')
  }
  const moveToWrite = () => {
    navigate('/Create')
  }
  return (
    <div className='myApp'>

      <Navbar bg="dark" variant="dark">
        <NavbarBrand>MyApp</NavbarBrand>
        <Nav className="me-auto">
          <Nav>
            <NavItem>
              <Button className='nav-button' onClick={() => { moveToCalender() }}>달력</Button>
              <Button className='nav-button' onClick={() => { moveToBoard() }}>글 목록</Button>
              <Button className='nav-button' onClick={() => { moveToWrite() }}>글 작성</Button>
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
      <br></br>

      <Routes>
      <Route path="/Calender" element={<Calender/>} />
      <Route path="/Board/*" element={<Board/>} />
      <Route path="/Create" element={<Create/>} />
      </Routes>
    </div>
  );

}
export default App;
