import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Introduce from './Components/Introduce/Introduce';
import './App.scss';

function App() {



  return (
    <div className="App">
      <Nav />
    <Switch>
      
  
        <Route exact path='/'> 
          <Home />
          <Introduce />
        </Route>

        <Route path="/:id"> 
          <div>
            <p>🚫 Invalid Page</p> 
            <p>Please click below to back to the main page on our website.</p>
            <p><Link to="./">Move to main page on Shoe Shop site</Link></p>
          </div>
    </Route>

      </Switch>
      </div>
  );
}

export default App;
