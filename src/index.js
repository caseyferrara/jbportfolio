import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Components/Portfolio';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.Fragment>
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);