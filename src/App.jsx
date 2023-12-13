import{ React,  useEffect, useState } from 'react';
import { Routes,Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Button,Container} from 'react-bootstrap';

import Img from './assets/2.png'
import './App.css'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Movie from './Components/Movie';
import Seat from './Components/SeatPage';
import CheckOut from './Components/CheckOut';





function App() {

  const[user,setUser]=useState('');
  const navigate=useNavigate()


  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail')
    if(userEmail){
      setUser(userEmail)
    }
  },[user])

 

  const handleLogOut=()=>{
    localStorage.removeItem('userEmail')
  setUser(null)
    navigate('/')
  }
  return (
    
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Img}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Ticket Box
            </Navbar.Brand>
           {user && <Button onClick={()=>handleLogOut()} className='logout'>Logout</Button>}
          </Container>
        </Navbar>
        <Routes>
        
        <Route path="/" element={<Login setUser={setUser} />}/>
        <Route path="/signup" element={<Signup setUser={setUser} />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/movie/:id" element={<Movie />}/>
        <Route path="/select" element={<Seat />}/>
        <Route path="/checkout" element={<CheckOut />}/>
        </Routes>
        
        
      </div>
  )
}

export default App