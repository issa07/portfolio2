import React from 'react';
// import { Route } from "react-router-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Home from './components';
import Resume from './components/Resume';
import Projets from './components/Projets';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline/>
        <Switch>
          <Route exact path="/portfolio2" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/projets" component={Projets} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
