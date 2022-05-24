import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import Login from './pages/login';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } width="250px" className="App-logo" alt="logo" />
        <p>SUA VEZ group 6</p>
      </header>
      <Switch>
        <Route path="/" exact component={ Login } />
      </Switch>

    </div>
  );
}
