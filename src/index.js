import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Components/Portfolio';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import { BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => (
  <>
    <Navigation />
    <About />
    <Portfolio />
    <Contact />
  </>
);

root.render(

  <BrowserRouter>
    <React.Fragment>
    <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
    </React.Fragment>
  </BrowserRouter>

);