import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import './App.scss';

function App() {



  return (
  
      <Switch>

        <Route exact path='/'>
          <Nav />
          <Home />
        </Route>

        <Route>
        </Route>

        <Route>
        </Route>

      </Switch>
    
  );
}

export default App;
