
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavbarBrand, NavItem, NavbarToggle, NavDropdown, NavbarCollapse } from 'react-bootstrap';
import Calender from './component/calender/Calender.js';
import Create from './component/crud/Create.js';
import Board from './component/crud/Board.js';
import Update from './component/crud/Update.js';
import Detail from './component/crud/Detail.js';
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  let [data, setData] = useState([]);


  useEffect(() => {
    const data = async () => {
      const query = await getDocs(collection(db, 'crud'));
      setData(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    data()
  }, [])


  const navigate = useNavigate();

  const moveToCalender = () => {
    navigate('/calender')
  }
  const moveToBoard = () => {
    navigate('/Board')
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
        <Route path="/Calender" element={<Calender />} />
        <Route path="/Board/*" element={<Board data={data} />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Board/Update/:id" element={<Update data={data}/>} />
        <Route path="/Board/Detail/:id" element={<Detail data={data}/>} />
      </Routes>

    </div>
  );

}
export default App;
