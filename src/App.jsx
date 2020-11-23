import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import InkingLights from './pages/InkingLights';
import Aerodinamica from './pages/Aerodinamica';

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
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
