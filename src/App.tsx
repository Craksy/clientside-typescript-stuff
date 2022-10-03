import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculators from './routes/Calculators';
import CityInfo from './routes/CityInfo';
import Home from './routes/Home';
import Navbar from './views/Navbar';

function App() {
  return (
    <div className="App mx-6">
        <Navbar/>
        <div className='container mt-6'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calc" element={<Calculators/>}/>
            <Route path="/cityinfo" element={<CityInfo/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
