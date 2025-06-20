import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/style.scss';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Pages';
import Contact from './Pages/contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
