import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./componentes/layout/Footer";
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";

import HomePage from "./pages/HomePage";
import PlantelPage from "./pages/PlantelPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/plantel" component={PlantelPage} />
          <Route path="/novedades" component={NovedadesPage} />
          <Route path="/contacto" component={ContactoPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
