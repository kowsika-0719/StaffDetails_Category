import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import StaffDetails from './Components/StaffDetails';
import Home from './Components/Home';

function App() {
    
    return (
        <>
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/staffdetails" element={<StaffDetails />} />
                </Routes>
        </Router>
        </>
        
    );
}

export default App;
