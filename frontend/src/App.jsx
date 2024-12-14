import React from 'react'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import DeleteEmployee from './pages/DeleteEmployee';


const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addEmployee' element={<AddEmployee/>} />
      <Route path='/updateEmployee/:id' element={<UpdateEmployee/>} />
      <Route path='/deleteEmployee/:id' element={<DeleteEmployee/>} />
    </Routes>
    </>
  )
}

export default App