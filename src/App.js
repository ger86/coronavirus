import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Spain from './Spain';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/spain">España</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/spain">
            <Spain />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}