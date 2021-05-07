import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {

  function handleNav() {
    let nav = document.querySelector('#nav');
    nav.classList.toggle('active')
  }

  return (
    <div className="App">
      <nav className="nav_container">
        <div className="active" id="nav">
          <ul>
              <Link className="li" to="/"> Home </Link>
              <Link className="li" to="/"> Introduce </Link>
              <Link className="li" to="/"> Skills </Link>
              <Link className="li" to="/"> Portfolio </Link>
              <Link className="li" to="/"> Contact </Link>
          </ul>
          <button className="icon" onClick={handleNav}>
              <div className="line line1"></div>
              <div className="line line2"></div>
          </button>
          </div>
      </nav>

      <Switch>

        <Route>
          dkssudgktkpdy
           sdfsdfdsfsd
          sdfsdfdsfsd
        </Route>

        <Route>
        </Route>

        <Route>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
