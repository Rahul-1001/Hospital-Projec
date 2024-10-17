import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import SignUp from './pages/Signup'
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={< SignUp/>} />
        <Route path="/login" element={< Login/>} />
   
        {/* Add other routes */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
