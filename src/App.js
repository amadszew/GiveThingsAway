import React from 'react';
import {
  HashRouter as Router,
  Route  
} from 'react-router-dom';

import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/oddajrzeczy" render={() => <h1>Form</h1>} />
        <Route path="/logowanie" render={() => <h1>Login</h1>} />
        <Route path="/rejestracja" render={() => <h1>Register</h1>} />
        <Route path="/wylogowano" render={() => <h1>Logout</h1>} />
      </Router>
    </div>
  );
}

export default App;
