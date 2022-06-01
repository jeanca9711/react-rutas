import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MenuConceptos from './MenuConceptos';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import User from './pages/User';

const ConceptosBasicos = () => {
  return (
    <>
      <h2>Conceptos Básicos</h2>
      <Router>
      <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username/:age" element={<User />} />
           {/* Always 404 at the end */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}
export default ConceptosBasicos