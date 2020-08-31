import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/home";
import Privacy from "./components/layout/privacy";
import ShowInfo from "./components/show/showInfo";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header branding="MAL_RipOff" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route
              exact
              path="/season/current"
              component={() => <ShowInfo type="season" />}
            />
            <Route
              exact
              path="/top/anime"
              component={() => <ShowInfo type="topAnime" />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
