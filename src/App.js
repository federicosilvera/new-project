
import './App.css';
import { Navbar } from './components/Navbar';
import { FakePeople } from './components/FakePeople';
import { Sign } from './components/Sign';
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar></Navbar>
      
        <Routes>
          <Route path='/' element={<FakePeople/>}></Route>
          <Route path='/home' element={<FakePeople/>}></Route>
          <Route path='/signin' element={<Sign/>}></Route>
        </Routes>
     
      
      
    </>
  );
}

export default App;
