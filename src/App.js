import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/Home';
import NosotrosPage from './pages/Nosotros';
import NovedadesPage from './pages/Novedades';
import ContactoPage from './pages/Contacto';

function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
