import React from 'react';
import { Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Home from './components';
import Resume from './components/Resume';
import Projets from './components/Projets';
import Contact from './components/Contact';

import { Router } from '@material-ui/icons';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/projets" component={Projets} />
    <Route path="/contact" component={Contact} />

    </>
  );
}

export default App;
