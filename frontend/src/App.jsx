import React from 'react'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';


const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addEmployee' element={<AddEmployee/>} />
    </Routes>
    </>
  )
}

export default App