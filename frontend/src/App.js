// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConsultasList from './pages/ConsultasList';
import NovaConsulta from './pages/NovaConsulta';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/consultas" component={ConsultasList} />
        <Route path="/nova-consulta" component={NovaConsulta} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
