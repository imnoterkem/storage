import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Login from './component/login'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
