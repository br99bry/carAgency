import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import InkingLights from './pages/InkingLights';
import Aerodinamica from './pages/Aerodinamica';
import Filtros from './pages/Filtros';
import Hydrografia from './pages/Hydrografia';
import PaintProtection from './pages/PaintProtection';
import PinturaRines from './pages/PinturaRines';
import Detaling from './pages/Detaling';
import SistemasEscape from './pages/SistemasEscape';
import SuspensionDeportiva from './pages/SuspensionDeportiva';
import ValvulasAlivio from './pages/ValvulasAlivio';
import Wrap from './pages/Wrap';

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
            exact path='/nosotros'
            render={
              () => (
                <About />
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
          <Route 
            exact path='/pinturaRines'
            render={
              () => (
                <PinturaRines />
              )
            }
          />
          <Route 
            exact path='/detaling'
            render={
              () => (
                <Detaling />
              )
            }
          />
          <Route 
            exact path='/sistemasEscape'
            render={
              () => (
                <SistemasEscape />
              )
            }
          />
          <Route 
            exact path='/suspensionDeportiva'
            render={
              () => (
                <SuspensionDeportiva />
              )
            }
          />
          <Route 
            exact path='/valvulasAlivio'
            render={
              () => (
                <ValvulasAlivio />
              )
            }
          />
          <Route 
            exact path='/wrap'
            render={
              () => (
                <Wrap />
              )
            }
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
