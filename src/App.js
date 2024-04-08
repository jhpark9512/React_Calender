
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/calender/Calender.js';
import Create from './component/crud/Create.js';
import { Board, List } from './component/crud/Board.js';
import Update from './component/crud/Update.js';
import Detail from './component/crud/Detail.js';
import Register from './component/register/register.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Test from './component/meal/Test.js';

function App() {


  const navigate = useNavigate();

  const moveToCalender = () => {
    navigate('/calender')
  }
  const moveToBoard = () => {
    navigate('/Board/List' )
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
            </NavItem>
          </Nav>
        </Nav>
      </Navbar>
      <br></br>
      
      <Routes>
        <Route path="/Calender" element={<Calender/>} />
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Board" element={<Board/>}>
          <Route path="List" element={<List/>}/>
          <Route path="Register" element={<Register/>} />
          <Route path="Create" element={<Create/>}/>
          <Route path="Update/:id" element={<Update/>} />
          <Route path="Detail/:id" element={<Detail/>} />
        </Route>
      </Routes>
    </div>
  );

}
export default App;
