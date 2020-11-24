import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import InkingLights from './pages/InkingLights';
import Aerodinamica from './pages/Aerodinamica';
import Filtros from './pages/Filtros';
import Hydrografia from './pages/Hydrografia';
import PaintProtection from './pages/PaintProtection';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact path='/'
            render={
              () => (
                <Home />
              )
            }
          />
          <Route 
            exact path='/entintadoDeFaros'
            render={
              () => (
                <InkingLights />
              )
            }
          />
          <Route 
            exact path='/aerodinamica'
            render={
              () => (
                <Aerodinamica />
              )
            }
          />
          <Route 
            exact path='/filtros'
            render={
              () => (
                <Filtros />
              )
            }
          />
          <Route 
            exact path='/hydrografia'
            render={
              () => (
                <Hydrografia />
              )
            }
          />
          <Route 
            exact path='/paintProtection'
            render={
              () => (
                <PaintProtection />
              )
            }
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
