import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/style.scss';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Pages';
import Contact from './Pages/contact';
import { Footer } from './Components/Footer';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  return (
    <Router basename={basename}>
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
