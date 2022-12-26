import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Components/Portfolio';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Contact from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
    </React.Fragment>
);