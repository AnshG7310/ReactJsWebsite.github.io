// ==================================================================================================================
// ================================================== REACT JS WEBSITE ==============================================
// ==================================================================================================================


import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
        </>
    );
}
export default App;

// ==================================================================================================================
// ================================================ CHALLENGE FINISHED ==============================================
// ==================================================================================================================
