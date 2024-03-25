import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NovaConsulta from './pages/NovaConsulta';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/agendar-consulta" component={NovaConsulta} />
      </Switch>
    </Router>
  );
}

export default App;
