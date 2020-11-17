import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';


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
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;