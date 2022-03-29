import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PricePage from "./pages/PricePage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/portfolio">
            <AboutPage />
          </Route>
          <Route path="/uslugi">
            <ServicePage />
          </Route>
          <Route path="/cennik">
            <PricePage />
          </Route>
          <Route path="/kontakt">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
