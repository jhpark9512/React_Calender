
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/calender/Calender.js';
import Create from './component/crud/Create.js';
import { Board, List } from './component/crud/Board.js';
import Update from './component/crud/Update.js';
import Detail from './component/crud/Detail.js';
import Register from './component/register/register.js';
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom';


function App() {

  let [data, setData] = useState([]);
  let [userData, setUserData] = useState([]);
useEffect(()=>{
  const listData = async () => {
    const query = await getDocs(collection(db, 'crud'));
    setData(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  const userdata = async () => {
    const userQuery = await getDocs(collection(db, 'user'));
    setUserData(userQuery.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  listData()
  userdata()
},[])



  const navigate = useNavigate();

  const moveToCalender = () => {
    navigate('/calender')
  }
  const moveToBoard = () => {
    navigate('/Board/List')
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
      <Outlet />
      <br></br>

      <Routes>
        <Route path="/Calender" element={<Calender />} />
        <Route path="/Create" element={<Create userData={userData} />} />
        <Route path="/Board" element={<Board />}>
          <Route path="List" element={<List data={data} />} />
          <Route path="Register" element={<Register/>} />
          <Route path="Update/:id" element={<Update data={data} userData={userData} />} />
          <Route path="Detail/:id" element={<Detail data={data} />} />
        </Route>
      </Routes>

    </div>
  );

}
export default App;
