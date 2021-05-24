import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Introduce from './Components/Introduce/Introduce';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Top from './Components/Top/Top';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'> 
          <Home />
          <Introduce />
          <Project />
          <Contact />
          <Footer />
          <Top />
        </Route>

        <Route path="/:id"> 
          <div className="invalid">
            <p className="alert">🚫 Invalid Page</p> 
            <p>Please click below to back to the main page.</p>
            <p><Link to="./">Move to main page</Link></p>
          </div>
      </Route>

      </Switch>
      </div>
  );
}

export default App;
